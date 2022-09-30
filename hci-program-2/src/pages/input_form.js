import { React } from "react";
import { Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import { tickets } from "../data/tickets"

const InputForm = () => {
	let navigate = useNavigate();
	const routeChange = () =>{
		let nextID = tickets.length
		console.log(nextID)

		let path = '../home'
		navigate(path);
	}
	
	const onSubmit = () => {
		routeChange()
		console.log("Submitted ticket");
	  };

	return (
		<div>
			<h1>
				Submit a Ticket
			</h1>

			<div>
				<form>
					<label>
						Name:
						<input type="text" name="name" />
					</label>
				</form>
			</div>

			<div>
				<form>
					<label>
						Email:
						<input type="text" name="email" />
					</label>
				</form>
			</div>

			<div>
				<form>
					<label>
						Phone:
						<input type="text" name="email" />
					</label>
				</form>
			</div>

			<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
				<a className="dropdown-item">Technology Issue</a>
				<a className="dropdown-item">Device Request</a>
			</div>

			<Button type='button' color="primary" onClick={onSubmit}>Submit</Button>

		</div>
	);
};

export default InputForm;

/*<Route path='/home' element={<Home />} />*/