/* eslint-disable @next/next/no-img-element */
import axios from "axios";
import { useState } from "react";
import MarkdownViewer from "../../components/MarkdownViewer";
import readingTime from "reading-time";
import Image from "next/image";
import Loader from "../../components/Loader";
import Head from "next/head";
import DateFormat from "../../utility/dateFormat";

const PostDetails = ({ post }) => {
	const [loaded, setLoaded] = useState(false);
	const [stats, setStats] = useState({});

	const { date, month, year } = DateFormat(post);

	setTimeout(() => {
		if (post.pBody) {
			setLoaded(true);
			const stats = readingTime(post.pBody);
			return setStats(stats);
		}
	}, [500]);

	return (
		<div>
			{!loaded ? (
				<Loader />
			) : (
				<>
					<Head>
						<title>Blog App - {post.title}</title>
					</Head>
					<div className="container max-w-screen-xl mx-auto pt-10 flex flex-col items-center space-y-14 px-2 lg:px-5 xl:px-0">
						<h4 className="text-center uppercase font-sourceCodePro font-bold text-base lg:text-lg border-2 border-black px-2 tracking-widest">
							category
						</h4>

						<h1 className="font-inter text-skin-base font-bold text-3xl text-center lg:text-left lg:text-6xl">
							{post.title}
						</h1>

						<div className="flex items-center">
							<p className="text-gray-500 font-medium text-sm uppercase tracking-wider">
								by{" "}
								<span className="text-gray-900 font-bold">{post.pAuthor.userName}</span>
							</p>
							<span className="px-5 text-gray-500">&#47;</span>
							<p className="uppercase text-sm text-gray-500 tracking-wider">
								{date} {month} {year}
							</p>
							<span className="px-5 text-gray-500">&#47;</span>
							<p className="uppercase text-sm text-gray-500 tracking-wider">
								{stats.text}
							</p>
						</div>

						<div>
							<Image
								src={post.pImage}
								alt={post.title}
								width={1280}
								height={500}
								className="object-cover w-full h-full"
							/>
						</div>

						<MarkdownViewer pBody={post.pBody} />

						<div className="w-full flex flex-col items-center pb-10 lg:pb-20 xl:pb-40 space-y-10">
							<div className="flex w-full relative">
								<span className="w-full h-px bg-gray-300 absolute top-1/2" />
								<div className="w-20 h-20 mx-auto bg-white z-10 userImage relative">
									<img
										src={post.pAuthor.userImage}
										alt={post.pAuthor.userName}
										className="w-full h-full object-cover rounded-full object-center"
									/>
								</div>
							</div>

							<div className="space-y-5">
								<h4 className="text-center font-inter text-sm uppercase font-medium tracking-wider text-gray-800">
									{post.pAuthor.userName}
								</h4>
								<p className="text-center capitalize text-sm font-inter font-medium tracking-wider text-gray-500">
									flim maker at red rocks church
								</p>
							</div>
						</div>
					</div>
				</>
			)}
		</div>
	);
};

export default PostDetails;

export const getStaticPaths = async () => {
	const res = await axios.get("http://localhost:3000/api/posts");
	const article = await res.data;

	const paths = article.data.map((post) => {
		return {
			params: {
				slug: post.slug.toString(),
			},
		};
	});

	return {
		paths,
		fallback: false,
	};
};

export const getStaticProps = async (context) => {
	const slug = context.params.slug;
	const res = await axios.get(`http://localhost:3000/api/posts/${slug}`);
	const data = await res.data.data;

	return {
		props: {
			post: data,
		},
	};
};
