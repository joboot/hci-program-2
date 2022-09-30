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
						<input type="text" name="email" />
					</label>
				</form>
			</div>

			<div id="form_item" class="d-flex justify-content-center">
				<form>
					<label>
						Subject:
						<input type="text" name="email" />
					</label>
				</form>
			</div>

			<div class="btn-group d-flex justify-content-center" id="form_item">
				<div class="dropdown show">
					<Button class="btn btn-info dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
						Select a Category
					</Button>
					<div class="dropdown-menu" aria-labelledby="dropdownMenuLink" >
						<a class="dropdown-item" href="#">Technology Issue</a>
						<a class="dropdown-item" href="#">Device Request</a>
					</div>
				</div>
			</div>

			<div id="form_item" class="d-flex justify-content-center">
				<Button type="button" class="btn btn-primary" onClick={routeChange}>
					Submit
				</Button>
			</div>

		</div>
	);
};

export default InputForm;

/*<Route path='/home' element={<Home />} />*/