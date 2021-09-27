import axios from "axios";

const SignUp = async (userData) => {
	const user = await axios
		.post("/api/users/create", { ...userData })
		.then((res) => res.data)
		.catch((err) => console.error(err));
	return user;
};

export default SignUp;
