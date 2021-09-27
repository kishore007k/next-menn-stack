import axios from "axios";
import router from "next/router";

const cPost = async ({ postData }) => {
	const res = await axios
		.post("/api/posts", postData)
		.then((res) => {
			router.push("/");
			return res.data;
		})
		.catch((err) => console.error(err));
	return res;
};

export default cPost;
