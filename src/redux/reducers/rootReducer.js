import { combineReducers } from "redux";
import getSongsReducer from "./getSongsReducer";

const rootReducer = combineReducers({
    allSongs: getSongsReducer
});

export default rootReducer