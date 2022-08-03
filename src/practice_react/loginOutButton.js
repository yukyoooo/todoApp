import React, {useState} from "react";

const LogoutButton = (props) => ( <button onClick={props.toggleIsLoggedIn}>ログアウト</button>)
const LoginButton = (props) => ( <button onClick={props.toggleIsLoggedIn}>ログイン</button>)
const LoginControl = () => {
	const [isLoggdIn, setIsLoggedInState] = useState(false);

	const toggleIsLoggedIn = () => {
		setIsLoggedInState(!isLoggdIn);
	}

	if(isLoggdIn) return <LogoutButton toggleIsLoggedIn={toggleIsLoggedIn} />;
	return <LoginButton toggleIsLoggedIn={toggleIsLoggedIn} />;
}

export default function LoginOutButton() {
	return <LoginControl />;
}