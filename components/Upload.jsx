/* eslint-disable @next/next/no-img-element */
import axios from "axios";
import { useState } from "react";

const Upload = ({ setPImage }) => {
	const [selectedImage, setSelectedImage] = useState("");

	const handleUpload = (e) => {
		e.preventDefault();
		const formData = new FormData();
		formData.append("file", selectedImage);
		formData.append("upload_preset", "nextjs_blog_app");

		axios
			.post("https://api.cloudinary.com/v1_1/ecsite/image/upload", formData)
			.then((res) => {
				setPImage(res.data.url);
			})
			.catch((err) => console.error(err));
	};

	return (
		<div>
			<input type="file" onChange={(e) => setSelectedImage(e.target.files[0])} />
			<button onClick={handleUpload}>Upload</button>
		</div>
	);
};

export default Upload;
