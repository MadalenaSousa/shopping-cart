import { combineReducers } from "redux";
import getSongs from "./getSongsReducer";

const rootReducer = combineReducers({
    songList: getSongs
});

export default rootReducer