import { combineReducers } from "redux";
import getSongs from "./getSongsReducer";
import splitSongs from "./splitSongsReducer";

const rootReducer = combineReducers({
    allSongs: getSongs,
    splitSongs: splitSongs
});

export default rootReducer