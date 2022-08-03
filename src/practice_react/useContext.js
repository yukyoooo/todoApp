import React, {createContext, useContext} from "react";

const SampleContextObject = createContext();
const ConsumerComponent = () => {
	const messageText = useContext(SampleContextObject);
	console.log(messageText);
	return <p>{messageText}</p>;
}

const message = "I Love React!!";
export default function UseContext(){
	return (
		<SampleContextObject.Provider value={message}>
			<ConsumerComponent />
		</SampleContextObject.Provider>
	)
}

