import axios from "axios";
import PostGrid from "../../components/PostGrid";

const Posts = ({ posts }) => {
	return (
		<div className="container max-w-screen-xl mx-auto">
			{posts !== "undefined" && (
				<>
					<h1>Posts Page</h1>
					<div>
						<PostGrid posts={posts.data} />
					</div>
				</>
			)}
		</div>
	);
};

export default Posts;

export const getStaticProps = async () => {
	const res = await axios.get("http://localhost:3000/api/posts");
	const article = await res.data;

	return {
		props: {
			posts: article,
		},
	};
};
