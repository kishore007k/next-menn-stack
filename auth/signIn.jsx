import axios from "axios";
import router from "next/router";
import { userSignIn } from "../redux/actions";

const SignIn = async (userData, dispatch) => {
	const user = await axios
		.post("/api/users", { ...userData })
		.then((res) => {
			const user = res.data.data;
			localStorage.setItem("user", JSON.stringify(user));
			localStorage.setItem("token", res.data.token);
			router.push("/");
			return dispatch(userSignIn(res.data));
		})
		.catch((err) => console.error(err));
	return user;
};

export default SignIn;
