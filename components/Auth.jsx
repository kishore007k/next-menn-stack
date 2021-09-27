import { useState } from "react";
import SignIn from "../auth/signIn";

const Auth = () => {
	const [userName, setUserName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [cPassword, setCPassword] = useState("");

	const [isLoggedIn, setIsLoggedIn] = useState(false);

	const handleSignUp = async (e) => {
		e.preventDefault();
		const userData = { userName, email, password, cPassword };
		const res = await SignUp(userData);
		return console.log(res);
	};

	const handleSignIn = async (e) => {
		e.preventDefault();
		const userData = { email, password };
		const res = await SignIn(userData);
		return console.log(res);
	};

	return (
		<div>
			{isLoggedIn ? (
				<div>
					<div>
						<label htmlFor="email">Email</label>
						<input
							type="email"
							id="email"
							placeholder="Email Address"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>
					<div>
						<label htmlFor="password">Password</label>
						<input
							type="password"
							id="password"
							placeholder="Password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>

					<div>
						<button onClick={handleSignIn}>Sign In</button>
					</div>
					<button onClick={() => setIsLoggedIn(!isLoggedIn)}>
						Don&apos;t have an account? Register!
					</button>
				</div>
			) : (
				<div>
					<div>
						<label htmlFor="userName">User Name</label>
						<input
							type="text"
							id="userName"
							placeholder="User Name"
							value={userName}
							onChange={(e) => setUserName(e.target.value)}
						/>
					</div>
					<div>
						<label htmlFor="email">Email</label>
						<input
							type="email"
							id="email"
							placeholder="Email Address"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>
					<div>
						<label htmlFor="password">Password</label>
						<input
							type="password"
							id="password"
							placeholder="Password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>
					<div>
						<label htmlFor="cPassword">Confirm Password</label>
						<input
							type="password"
							id="cPassword"
							placeholder="Confirm Password"
							value={cPassword}
							onChange={(e) => setCPassword(e.target.value)}
						/>
					</div>

					<div>
						<button onClick={handleSignUp}>Sign Up</button>
					</div>
					<button onClick={() => setIsLoggedIn(!isLoggedIn)}>
						Already have an account? Sign In
					</button>
				</div>
			)}
		</div>
	);
};

export default Auth;
