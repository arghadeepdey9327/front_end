import { createStore,combineReducers } from "redux";

const store=createStore(combineReducers({Notes,renderListhtml,reRenderHtml}));
export default store;