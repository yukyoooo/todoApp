import ReactDOM from "react-dom/client";
import React from "react";
import App from "./components/App";
import {ChakraProvider} from "@chakra-ui/react";
import theme from "./theme/theme";

class TodoApp extends React.Component{
	render(){
		return(
			<React.StrictMode>
				<ChakraProvider theme={theme}>
					<App />
				</ChakraProvider>
			</React.StrictMode>
		)
	}
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<TodoApp />);