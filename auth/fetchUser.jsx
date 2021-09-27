import axios from "axios";
import { fetchUserData } from "../redux/actions";

const fetchUser = async ({ id, setUser, setIsLoggedIn, dispatch }) => {
	const res = await axios
		.get(`/api/users/${id}`)
		.then((res) => {
			setUser(res.data.data);
			setIsLoggedIn(true);
			return dispatch(fetchUserData(res.data));
		})
		.catch((err) => console.error(err));
	return res;
};

export default fetchUser;
