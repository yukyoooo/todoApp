import React, {useState, useEffect} from "react";

const INITIAL_COUNT = 0;
const Timer = () => {
	const [count, setCount] = useState(INITIAL_COUNT);
	const countReset = () => setCount(INITIAL_COUNT)
	const countIncrement = () => {
		setCount((prevCount) => prevCount + 1);
		console.log("カウントアップ＋１")
	}
	const callbackFunction = () => {
		alert("副作用関数が実行されました！");
		const timer = setInterval(countIncrement, 1000);
		return () => {
			console.log("timerが削除されました！");
			clearInterval(timer)
		}
	}
	useEffect(callbackFunction, []);

	return (
		<div>
			<p>現在のカウント数：{count}</p>
			<button onClick={countReset}>RESET</button>
		</div>
	)
}

export default function CountSetTimer() {
	const [display, toggleDisplay] = useState(false);
	const handleToggleDisplay = () => {
		toggleDisplay(!display)
	}
	return (
		<>
			<button onClick={handleToggleDisplay}>
				{display ? "タイマーを非表示" : "タイマーを表示" }
			</button>
			{display && <Timer />}
		</>
	)
}