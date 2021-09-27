import axios from "axios";
import router from "next/router";
import { updatedUser } from "../redux/actions";

const UpdateUser = async ({ dispatch, updatedData, userId }) => {
	const res = await axios
		.put("http://localhost:3000/api/users", { userId, updatedData })
		.then((res) => {
			dispatch(updatedUser());
			router.push("/profile");
			return res;
		})
		.catch((err) => console.error(err));

	return res;
};

export default UpdateUser;
