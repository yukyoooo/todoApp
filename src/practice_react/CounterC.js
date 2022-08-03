import { useCounter } from "./hooks";
import { CounterText } from "./counterText";

export const CounterC = () => {
	const { count, countAdd, countSub, countReset } = useCounter(0);
	return (
		<div>
			<h1>カウンターC</h1>
			<CounterText count={count} />
			<button onClick={countAdd}>ボタン+1</button>
			<button onClick={countSub}>ボタン-1</button>
			<button onClick={countReset}>リセット</button>
		</div>
	)
}