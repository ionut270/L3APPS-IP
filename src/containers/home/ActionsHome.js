import HereConfig from "../../config/HereConfig";
import firebaseProvider from "../../config/FireConfig";
import "es6-promise";
import "isomorphic-fetch";
import "fetch-jsonp-polyfill";

export const actionTypes = {
  GET_LOCATION_OPTIONS: "GET_LOCATION_OPTIONS",
  REQUEST_LOCATION_OPTIONS: "REQUEST_LOCATION_OPTIONS",
  RECEIVE_LOCATION_OPTIONS: "RECEIVE_LOCATION_OPTIONS",
  UPDATE_FORM_STATE: "UPDATE_FORM_STATE",
  REMOVE_SELECTED_LOCATION: "REMOVE_SELECTED_LOCATION",
  REQUEST_SAVE_EVENT: "REQUEST_SAVE_EVENT",
  RECEIVE_SAVE_EVENT: "RECEIVE_SAVE_EVENT",
  RESET_FORM_STATE: "RESET_FORM_STATE",
  REQUEST_EVENT_LIST: "REQUEST_EVENT_LIST",
  RECEIVE_EVENT_LIST: "RECEIVE_EVENT_LIST"
};

export const resetFormState = () => {
  return dispatch => {
    dispatch({
      type: actionTypes.RESET_FORM_STATE
    });
  };
};

export const requestLocationOptions = () => {
  return {
    type: actionTypes.REQUEST_LOCATION_OPTIONS
  };
};

export const receiveLocationOptions = data => {
  return {
    type: actionTypes.RECEIVE_LOCATION_OPTIONS,
    data: data
  };
};

export const requestSaveEvent = () => {
  return {
    type: actionTypes.REQUEST_SAVE_EVENT
  };
};

export const receiveSaveEvent = () => {
  return {
    type: actionTypes.RECEIVE_SAVE_EVENT
  };
};

export const requestEventList = () => {
  return {
    type: actionTypes.REQUEST_EVENT_LIST
  };
};

export const receiveEventList = data => {
  return {
    type: actionTypes.RECEIVE_EVENT_LIST,
    data: data
  };
};

export const getLocationOptions = suggestion => {
  return dispatch => {
    dispatch(requestLocationOptions());

    //async function for getting the locations (here api)
    return fetch(
      `${HereConfig.BASE_URL_AUTOCOMPLETE}?app_id=${
        HereConfig.APP_ID
      }&app_code=${HereConfig.APP_CODE}&query=${suggestion}&maxresults=10`
    )
      .then(
        resp => {
          return resp.json();
        },
        err => err
      )
      .then(resp => {
        dispatch(receiveLocationOptions(resp));
      });
  };
};

export const updateFormState = (propPath, payload) => {
  return dispatch => {
    dispatch({
      type: actionTypes.UPDATE_FORM_STATE,
      propPath: propPath,
      data: payload
    });
  };
};

export const removeSelectedLocation = () => {
  return dispatch => {
    dispatch({
      type: actionTypes.REMOVE_SELECTED_LOCATION
    });
  };
};

export const saveEvent = payload => {
  return dispatch => {
    dispatch(requestSaveEvent());

    let locationId = payload.location.id;
    //get lat and long for a specific address
    return fetch(
      `${HereConfig.BASE_URL_GEOCODE}?app_id=${HereConfig.APP_ID}&app_code=${
        HereConfig.APP_CODE
      }&locationid=${locationId}&gen=8`,
      {
        method: "JSONP",
        callback: "jsoncallback",
        callbackName: "callbackFiiPractic"
      }
    )
      .then(
        resp => {
          return resp.json();
        },
        err => err
      )
      .then(resp => {
        const {
          Latitude
        } = resp.Response.View[0].Result[0].Location.DisplayPosition;
        const {
          Longitude
        } = resp.Response.View[0].Result[0].Location.DisplayPosition;
        const newEvent = {
          ...payload,
          location: {
            ...payload.location,
            latitude: Latitude,
            longitude: Longitude
          }
        };
        setNewEvent(newEvent, payload.userId).then(() => {
          dispatch(receiveSaveEvent());
        });
      });
  };
};

export const setNewEvent = (event, userId) => {
  return firebaseProvider
    .database()
    .ref("events")
    .push()
    .set(event);
};

export const getEventList = () => {
  return dispatch => {
    dispatch(requestEventList());
    fetchEventListFirebase().then(rsp => {
      dispatch(receiveEventList(rsp));
    });
  };
};

export const fetchEventListFirebase = () => {
  let payload = {
    eventList: []
    /*hint
     *here you can add another array for scheduled events
     *fetch scheduled events from firebase
     */
  };
  return firebaseProvider
    .database()
    .ref("events")
    .once("value", snapshot => {
      if (snapshot.val() !== null) {
        payload["eventList"] = snapshotToArray(snapshot);
      }
    })
    .then(() => {
      return payload;
    });
};

export const snapshotToArray = snapshot => {
  let returnArr = [];

  snapshot.forEach(childSnapshot => {
    let item = childSnapshot.val();
    item.eventId = childSnapshot.key;
    returnArr.push(item);
  });

  return returnArr;
};
