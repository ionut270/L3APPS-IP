import { actionTypes } from "./ActionsLogin";

export default function loginReducer(
  state = {
    userProfile: {
      firstName: "",
      lastName: "",
      email: ""
    }
  },
  action
) {
  switch (action.type) {
    case actionTypes.SAVE_USER_PROFILE:
      return {
        ...state,
        userProfile: {
          firstName: action.data.firstName,
          lastName: action.data.lastName,
          email: action.data.email
        }
      };
    default:
      return state;
  }
}
