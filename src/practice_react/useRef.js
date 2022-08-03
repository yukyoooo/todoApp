import React, {useRef, useState, useEffect} from "react";

const SampleComponent = () => {
	const inputRefObject = useRef(null);
	const [text, setText] = useState("");
	useEffect(() => console.log("レンダリング！"));
	const handleClick = () => {
		setText(inputRefObject.current.value);
	}
	const textReset = () => {
		setText("");
		inputRefObject.current.value = "";
	}

	return (
		<>
			<input ref={inputRefObject} type="text" />
			<button onClick={handleClick}>set text</button>
			<button onClick={textReset}>reset</button>
			<p>text: {text}</p>
		</>
	)
}

export default function UseRef(){
	return <SampleComponent />
}