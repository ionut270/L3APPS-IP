import {
  connect
} from "react-redux";
import HomeComponent from "./Home";
import {
  getLocationOptions,
  updateFormState,
  removeSelectedLocation,
  saveEvent,
  resetFormState,
  getEventList
} from "../ActionsHome";

const mapStateProps = (state) => ({
  home: Object.assign({}, state.home),
  login: Object.assign({}, state.login)
});

const mapDispatchToProps = (dispatch) => ({
  onGetLocationOptions: (suggestion) => {
    dispatch(getLocationOptions(suggestion));
  },
  onUpdateFormState: (propPath, payload) => {
    dispatch(updateFormState(propPath, payload));
  },
  onRemoveSelectedLocation: () => {
    dispatch(removeSelectedLocation());
  },
  onSaveEvent: (props) => {
    const {
      title,
      organizer,
      description,
      location,
      date,
      category,
      joined
    } = props;
    const payload = {
      userId: localStorage.getItem("userId"),
      title,
      organizer,
      description,
      location,
      date,
      category,
      joined: ["Default user!", localStorage.getItem("userId"), ]
    };
    dispatch(saveEvent(payload));
  },
  onResetFormState: () => {
    dispatch(resetFormState());
  },
  onGetEventList: () => {
    dispatch(getEventList());
  }
});

const Home = connect(
  mapStateProps,
  mapDispatchToProps
)(HomeComponent);

export default Home;