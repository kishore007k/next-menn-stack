import axios from "axios";
import Head from "next/head";
import PostGrid from "../components/PostGrid";

const Home = ({ posts }) => {
	return (
		<div>
			<Head>
				<title>K-Blog📝</title>
				<meta
					name="description"
					content="A blog app created using Next.Js and MongoDB"
				/>
				<link rel="icon" href="/kishore_logo.png" />
			</Head>

			<main className="container max-w-screen-xl mx-auto px-5 xl:px-0">
				<>
					{posts !== "undefined" && (
						<>
							<h1 className="font-rampart text-center text-3xl xl:text-5xl font-medium text-gray-800 py-10">
								Posts Page
							</h1>
							<div>
								<PostGrid posts={posts.data} />
							</div>
						</>
					)}
				</>
			</main>
		</div>
	);
};

export default Home;

export const getStaticProps = async () => {
	const res = await axios.get("http://localhost:3000/api/posts");
	const article = await res.data;

	return {
		props: {
			posts: article,
		},
	};
};
