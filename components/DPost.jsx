import Link from "next/link";
import { ImHeart } from "react-icons/im";
import { FaComment, FaRegEye } from "react-icons/fa";
import DateFormat from "../utility/dateFormat";

const DPost = ({ post }) => {
	const { date, month, year } = DateFormat(post);
	return (
		<div className="bg-white border-[1px] border-border drop-shadow-sm p-5 rounded-md text-gray-800 transition-all hover:border-red-200 hover:bg-red-50 hover:text-red-500">
			<Link href="/">
				<a className="flex justify-between items-center">
					<div>
						<h1 className="font-inter text-2xl mb-5 font-semibold">{post.title}</h1>
						<div className="flex items-center text-gray-700 space-x-5 font-medium text-base">
							<p>
								Published:{" "}
								<span className="font-normal">
									{month} {date}, {year}
								</span>
							</p>
						</div>
					</div>
					<div className="flex items-center space-x-4">
						<div className="flex items-center space-x-1">
							<div>
								<ImHeart className="w-6 h-6 fill-current text-gray-800" />
							</div>
							<span className="font-semibold text-gray-800">25</span>
						</div>
						<div className="flex items-center space-x-1">
							<div>
								<FaComment className="w-6 h-6 fill-current text-gray-800" />
							</div>
							<span className="font-semibold text-gray-800">4</span>
						</div>
						<div className="flex items-center space-x-1">
							<div>
								<FaRegEye className="w-6 h-6 fill-current text-gray-800" />
							</div>
							<span className="font-semibold text-gray-800">2564</span>
						</div>
					</div>
					<div className="flex items-center space-x-2">
						<button className="text-gray-700 font-medium text-lg capitalize px-3 py-1 transition-all rounded-md hover:drop-shadow-sm hover:bg-red-200">
							manage
						</button>
						<button className="text-gray-700 font-medium text-lg capitalize px-5 py-1 transition-all rounded-md hover:drop-shadow-sm hover:bg-red-200">
							edit
						</button>
					</div>
				</a>
			</Link>
		</div>
	);
};

export default DPost;
