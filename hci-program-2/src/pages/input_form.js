import { React } from "react";
import { Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import { Dropdown } from 'react-bootstrap';
import { tickets } from '../data/tickets'

const InputForm = () => {
	let navigate = useNavigate();
	const routeChange = () =>{
		let nextID = tickets.length
		console.log(nextID)

		let path = '../home'
		navigate(path);
	}
	
	const onSubmit = () => {
		//put save state here
		routeChange()
		console.log("Submitted ticket");
	};

	return (
		<div>
			<h1>
				Submit a Ticket
			</h1>

			<div id="form_item" class="d-flex justify-content-center">
				<form>
					<label>
						Name:
						<input type="text" name="name" />
					</label>
				</form>
			</div>

			<div id="form_item" class="d-flex justify-content-center">
				<form>
					<label>
						Phone:
						<input type="text" name="email" />
					</label>
				</form>
			</div>

			<div id="form_item" class="d-flex justify-content-center">
				<form>
					<label>
						Subject:
						<input type="text" name="subject" />
					</label>
				</form>
			</div>

			<div id="form_item" class="d-flex justify-content-center">
				<form>
					<label>
						Description:
						<input type="text" name="desc" />
					</label>
				</form>
			</div>
	
			<div class="btn-group d-flex justify-content-center" id="form_item">
				<Dropdown>
					<Dropdown.Toggle variant="success" id="dropdown-basic">
						Dropdown Button
					</Dropdown.Toggle>

					<Dropdown.Menu>
						<Dropdown.Item href="#/action-1">Technology Issue</Dropdown.Item>
						<Dropdown.Item href="#/action-2">Device Request</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>
			</div>

			<div id="form_item" class="d-flex justify-content-center">
				<Button type="button" class="btn btn-primary" onClick={routeChange}>
					Submit
				</Button>
			</div>

		</div>
	);
	// This is the code for the input form where you can type in your name, phone, subject, and description on the webpage. Also includes buttons via bootstrap that a user can click on.
};

export default InputForm;

/*<Route path='/home' element={<Home />} />*/