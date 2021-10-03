import { combineReducers } from "redux";
import searchReducer from "./search";

const rootReducers = combineReducers({
  search: searchReducer,
});

export default rootReducers;
