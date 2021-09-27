import { combineReducers } from "redux";
import UserReducer from "./userReducer";

const reducer = combineReducers({
	user: UserReducer,
});

export default reducer;
