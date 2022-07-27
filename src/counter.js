import React, {useState} from 'react';

const INITIAL_COUNT = 0;
export const Counter = (props) => {
	const [count, setCount] = useState(INITIAL_COUNT);
	const countAdd = () => setCount((prevCount) => prevCount + 1);
	const countSub = () => setCount((prevCount) => prevCount - 1);
	const countReset = () => setCount(INITIAL_COUNT);
	const CounterText = (props) => {
		return (
			<p>
				<b>{props.name}</b>のカウント数：{props.count}
			</p>
		)
	}

	return (
		<>
			<CounterText count={count} name={props.name} />
			<button onClick={countAdd}>ボタン +1</button>
			<button onClick={countSub}>ボタン -1</button>
			<button onClick={countReset}>リセット</button>
		</>
	)
}