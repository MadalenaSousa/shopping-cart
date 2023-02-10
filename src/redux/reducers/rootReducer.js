import { combineReducers } from "redux";
import songsReducer from "./songsReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
    songs: songsReducer,
    user: userReducer
});

export default rootReducer