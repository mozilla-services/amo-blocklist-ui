import { combineReducers } from "redux";
import settings from "./settings";
import collection from "./collection";
import collections from "./collections";
import notifications from "./notifications";
import form from "./form";
const { routeReducer } = require("../redux-router");

const rootReducer = combineReducers({
  settings,
  collection,
  collections,
  notifications,
  form,
  routing: routeReducer,
});

export default rootReducer;
