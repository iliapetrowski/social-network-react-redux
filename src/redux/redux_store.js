import {combineReducers, createStore} from "redux";
import sidebarReducer from "./sidebar_reducer";
import dialogsReducer from "./dialogs_reducer";
import profileReducer from "./profile_reducer";

let reducers = combineReducers(
    {
        dialogsPage: dialogsReducer,
        profilePage: profileReducer,
        sidebar: sidebarReducer,
    }
);

let store = createStore(reducers);
export default store;