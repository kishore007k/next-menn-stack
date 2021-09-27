import ActionTypes from "../constants/index";

const INITIAL_STATE = {
	users: [],
	user: {},
	token: "",
	message: "",
};

const UserReducer = (state = INITIAL_STATE, { type, payload }) => {
	switch (type) {
		case ActionTypes.SIGN_IN:
			return { ...state, user: { ...payload.data }, token: payload.data.token };

		case ActionTypes.FETCH_USER:
			return { ...state, user: { ...payload.data } };

		case ActionTypes.USER_UPDATED:
			return { ...state, message: "User Updated Successfully" };

		default:
			return state;
	}
};

export default UserReducer;
