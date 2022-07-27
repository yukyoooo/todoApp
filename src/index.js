import React from 'react';
import './index.css';
import {LikeButton} from './likeButton'
import {NameInput} from "./nameInput";
import {Game} from "./game";
import {Counter} from "./counter";
import ReactDOM from 'react-dom/client';
import LoginOutButton from "./loginOutButton";
import Map from "./map";
import Form from "./form";
import FormSelect from "./formSelect";
import Radio from "./radio";
import Check from "./check";
import UseEffect from "./useEffect";
import CountSetTimer from "./countSetTimer";


class App extends React.Component{
	render(){
		return(
			<div>
				<React.StrictMode>
					<Game />
					<LikeButton />
					<NameInput />
					<Counter name="腕立て伏せ"/>
					<Counter name="腹筋"/>
					<Counter name="スクワット"/>
					<br/><br/>
					<LoginOutButton />
					<Map />
					<Form />
					<FormSelect />
					<Radio />
					<Check />
					<UseEffect />
					<CountSetTimer />
				</React.StrictMode>
			</div>
		)
	}
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);