import ActionTypes from "../constants/index";

export const userSignIn = (data) => {
	return {
		type: ActionTypes.SIGN_IN,
		payload: data,
	};
};

export const fetchUserData = (data) => {
	return {
		type: ActionTypes.FETCH_USER,
		payload: data,
	};
};

export const updatedUser = () => {
	return {
		type: ActionTypes.USER_UPDATED,
	};
};
