import React, {useState} from "react";

const InputSelectBox = () => {
	const [selectedValue, setSelectedValue] = useState("HTML");
	const handleChange = (e) => setSelectedValue(e.target.value);
	const values = [
		{ id: 1, item: "HTML" },
		{ id: 2, item: "CSS" },
		{ id: 3, item: "javascript" },
	]
	const selectItems = values.map((value) => {
		return (
			<option value={value.item} key={value.id}>
				{value.item}
			</option>
		)
	})

	return (
		<div className="app">
			<p>
				現在選択されている値：
				<b>{selectedValue}</b>
			</p>
			<select value={selectedValue} onChange={handleChange}>
				{selectItems}
			</select>
		</div>
	)
}

export default function FormSelect(){
	return <InputSelectBox />
}