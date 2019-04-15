export const actionTypes = {
  SAVE_USER_PROFILE: "SAVE_USER_PROFILE"
};

export const saveUserProfile = payload => {
  return dispatch => {
    dispatch({
      type: actionTypes.SAVE_USER_PROFILE,
      data: payload
    });
  };
};
