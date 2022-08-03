import React from 'react';

export const NameInput = () => {
	const [name, setName] = React.useState("〇〇");
	const handoleOnChange = (event) => setName(event.target.value);

	return (
		<div>
			<input type="text" onChange={handoleOnChange} />
			<p>こんにちは、{name}さん</p>
		</div>
	)
}