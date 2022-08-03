import React, {useState} from "react";

const CountResult = React.memo(({text, countState}) => {
	console.log(`${text}ボタンがクリックされました。`);
	return (
		<p>
			{text}:{countState}
		</p>
	)
})

const Counter = () => {
	const [countStateA, setCountStateA] = useState(0);
	const [countStateB, setCountStateB] = useState(0);

	const countIncrementA = () => setCountStateA((prevCountStateA) => prevCountStateA + 1);
	const countIncrementB = () => setCountStateB((prevCountStateB) => prevCountStateB + 1);

	return (
		<>
			<CountResult text="Aボタン" countState={countStateA} />
			<CountResult text="Bボタン" countState={countStateB} />
			<button onClick={countIncrementA}>Aボタン</button>
			<button onClick={countIncrementB}>B ボタン</button>
		</>
	)
}

export default function Memo(){
	return <Counter />
}