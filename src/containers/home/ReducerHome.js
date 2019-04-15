import { actionTypes } from "./ActionsHome";
import { categoryOptions } from "../../utils/utils";

export default function homeReducer(
  state = {
    isFetching: false,
    isFetchingSearch: false,
    formState: {
      title: "",
      organizer: "",
      description: "",
      location: {
        id: "",
        title: ""
      },
      date: {
        day: "",
        month: "",
        entireDate: ""
      },
      category: "",
      joined:[]
    },
    locationOptions: [],
    categoryOptions: categoryOptions,
    eventList: []
  },
  action
) {
  switch (action.type) {
    case actionTypes.RESET_FORM_STATE:
      return {
        ...state,
        formState: {
          title: "",
          organizer: "",
          description: "",
          location: {
            id: "",
            title: ""
          },
          date: {
            day: "",
            month: "",
            entireDate: ""
          },
          category: "",
          joined: [],
          eventList: []
        },
        locationOptions: []
      };
    case actionTypes.REQUEST_LOCATION_OPTIONS:
      return {
        ...state,
        isFetchingSearch: true
      };
    case actionTypes.RECEIVE_LOCATION_OPTIONS:
      const locationOptions = action.data.suggestions.map(item => {
        return {
          id: item.locationId,
          title: item.label
        };
      });
      return {
        ...state,
        isFetchingSearch: false,
        locationOptions: locationOptions
      };
    case actionTypes.REQUEST_SAVE_EVENT:
      return {
        ...state,
        isFetching: true
      };
    case actionTypes.RECEIVE_SAVE_EVENT:
      return {
        ...state,
        isFetching: false
      };
    case actionTypes.REQUEST_EVENT_LIST:
      return {
        ...state,
        isFetching: true
      };
    case actionTypes.RECEIVE_EVENT_LIST:
      return {
        ...state,
        isFetching: false,
        eventList: action.data.eventList
      };
    case actionTypes.UPDATE_FORM_STATE:
      return {
        ...state,
        formState: {
          ...state.formState,
          [action.propPath]: action.data
        }
      };
    case actionTypes.REMOVE_SELECTED_LOCATION:
      return {
        ...state,
        formState: {
          ...state.formState,
          location: {
            id: "",
            title: ""
          }
        }
      };
    default:
      return state;
  }
}
