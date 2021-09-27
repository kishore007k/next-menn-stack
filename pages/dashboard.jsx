import Link from "next/link";
import withAuth from "../auth/withAuth";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import fetchUser from "../auth/fetchUser";
import Loader from "../components/Loader";
import DPost from "../components/DPost";

const Dashboard = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [user, setUser] = useState("");
	const dispatch = useDispatch();

	useEffect(() => {
		const user = JSON.parse(localStorage.getItem("user"));
		if (user) {
			fetchUser({ id: user._id, setUser, setIsLoggedIn, dispatch });
		}
	}, [dispatch]);

	const posts = user.userPosts;

	return (
		<>
			{!isLoggedIn ? (
				<Loader />
			) : (
				<div>
					<h1 className="font-rampart text-3xl text-gray-700 font-semibold py-10">
						Dashboard
					</h1>

					{/* Top Div Cards */}
					<div className="grid grid-cols-4 gap-5 mb-12">
						<div className="bg-white border-[1px] border-border drop-shadow-sm p-5 rounded-md transition-all text-gray-700 hover:bg-red-50 hover:text-red-500 hover:border-red-200">
							<h2 className="font-inter text-2xl font-medium mb-2">31</h2>
							<p className="font-inter text-sm font-normal">Total post reactions</p>
						</div>
						<div className="bg-white border-[1px] border-border drop-shadow-sm p-5 rounded-md transition-all text-gray-700 hover:bg-red-50 hover:text-red-500 hover:border-red-200">
							<h2 className="font-inter text-2xl font-medium mb-2">2,712</h2>
							<p className="font-inter text-sm font-normal">Total post views</p>
						</div>
						<div className="bg-white border-[1px] border-border drop-shadow-sm p-5 rounded-md transition-all text-gray-700 hover:bg-red-50 hover:text-red-500 hover:border-red-200">
							<h2 className="font-inter text-2xl font-medium mb-2">10</h2>
							<p className="font-inter text-sm font-normal">Listings created</p>
						</div>
						<div className="bg-white border-[1px] border-border drop-shadow-sm p-5 rounded-md transition-all text-gray-700 hover:bg-red-50 hover:text-red-500 hover:border-red-200">
							<h2 className="font-inter text-2xl font-medium mb-2">5</h2>
							<p className="font-inter text-sm font-normal">Credits available</p>
						</div>
					</div>

					{/* Posts */}
					<div className="grid grid-cols-4 gap-5">
						{/* Left Side */}
						<div className="col-span-1 space-y-5 bg-white border-[1px] border-border drop-shadow-sm p-5 rounded-md">
							<div className="flex justify-between items-center transition-all hover:bg-red-50 hover:text-red-400 p-2 rounded-md">
								<Link href="/dashboard">
									<a className="font-inter text-base font-normal">Posts</a>
								</Link>
								<div className="p-1 bg-gray-100 rounded-full">2</div>
							</div>
							<div className="flex justify-between items-center transition-all hover:bg-red-50 hover:text-red-400 p-2 rounded-md">
								<Link href="/dashboard">
									<a className="font-inter text-base font-normal">Series</a>
								</Link>
								<div className="p-1 bg-gray-100 rounded-full">0</div>
							</div>
							<div className="flex justify-between items-center transition-all hover:bg-red-50 hover:text-red-400 p-2 rounded-md">
								<Link href="/dashboard">
									<a className="font-inter text-base font-normal">Followers</a>
								</Link>
								<div className="p-1 bg-gray-100 rounded-full">152</div>
							</div>
							<div className="flex justify-between items-center transition-all hover:bg-red-50 hover:text-red-400 p-2 rounded-md">
								<Link href="/dashboard">
									<a className="font-inter text-base font-normal">Following tags</a>
								</Link>
								<div className="p-1 bg-gray-100 rounded-full">12</div>
							</div>
							<div className="flex justify-between items-center transition-all hover:bg-red-50 hover:text-red-400 p-2 rounded-md">
								<Link href="/dashboard">
									<a className="font-inter text-base font-normal">Following users</a>
								</Link>
								<div className="p-1 bg-gray-100 rounded-full">54</div>
							</div>
							<div className="flex justify-between items-center transition-all hover:bg-red-50 hover:text-red-400 p-2 rounded-md">
								<Link href="/dashboard">
									<a className="font-inter text-base font-normal">
										Following organizations
									</a>
								</Link>
								<div className="p-1 bg-gray-100 rounded-full">15</div>
							</div>
							<div className="flex justify-between items-center transition-all hover:bg-red-50 hover:text-red-400 p-2 rounded-md">
								<Link href="/dashboard">
									<a className="font-inter text-base font-normal">Following podcasts</a>
								</Link>
								<div className="p-1 bg-gray-100 rounded-full">10</div>
							</div>
							<div className="flex justify-between items-center transition-all hover:bg-red-50 hover:text-red-400 p-2 rounded-md">
								<Link href="/dashboard">
									<a className="font-inter text-base font-normal">Listings</a>
								</Link>
								<div>Icon</div>
							</div>
							<div className="flex justify-between items-center transition-all hover:bg-red-50 hover:text-red-400 p-2 rounded-md">
								<Link href="/dashboard">
									<a className="font-inter text-base font-normal">Analytics</a>
								</Link>
							</div>
						</div>

						{/* Right Side */}
						<div className="col-span-3 row-span-2 space-y-5">
							{posts.map((post) => (
								<DPost post={post} key={post._id} />
							))}
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default withAuth(Dashboard);
