import React, {useState} from "react";
const values = [
	{ id: 1, item: "赤"},
	{ id: 2, item: "青"},
	{ id: 3, item: "黄"},
]
const RadioBtnItems = (props) =>
	values.map((value) => {
		return (
			<label key={value.id}>
				<input
					type="radio"
					value={value.item}
					onChange={props.onChange}
					checked={props.checked === value.item}
				/>
				{value.item}
			</label>
		)
	})

const InputRadio = () => {
	const [checkedValue, setCheckdValue] = useState("赤");
	const handleChange = (e) => setCheckdValue(e.target.value);

	return (
		<div className="App">
			<p>
				現在選択されている値：<b>{checkedValue}</b>
			</p>
			<RadioBtnItems onChange={handleChange} checked={checkedValue} />
		</div>
	)
}

export default function Radio() {
	return <InputRadio />
}