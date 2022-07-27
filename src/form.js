  import React, {useState} from "react";

const InputText = () => {
	const [inputTextValue, setInputTextValue] = useState("");
	const [text, setText] = useState("javaScript")
	const handleChange = (e) => setInputTextValue(e.target.value);
	const handleClick = () => {
		setText(inputTextValue);
		setInputTextValue("");
	}
	return (
		<div className="App">
			<h1>i Love {text}!!</h1>
			<input type="text" value={inputTextValue} onChange={handleChange} />
			<input type="button" value="入力" onClick={handleClick} />
		</div>
	)
}

export default function Form() {
	return <InputText />
}