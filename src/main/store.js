import { createStore, applyMiddleware, compose } from "redux";
//async actions for redux
import thunk from "redux-thunk";
//root reducer which contains all reducers asigned for each react component
import rootReducer from "./rootReducer";

const enhancers = [];
const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;
if (typeof devToolsExtension === "function") {
  enhancers.push(devToolsExtension());
}

const composedEnhancers = compose(
  applyMiddleware(thunk),
  ...enhancers
);

export default createStore(rootReducer, {}, composedEnhancers);
