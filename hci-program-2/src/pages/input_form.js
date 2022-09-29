import { React } from "react";
import { Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import { Dropdown } from 'react-bootstrap';

const InputForm = () => {
	let navigate = useNavigate();
	const routeChange = () =>{
		let path = '../home'
		navigate(path);
	}

	return (
		<div>
			<h1>
				Submit a Ticket
			</h1>

			<div id="form_item">
				<form>
					<label>
						Name:
						<input type="text" name="name" />
					</label>
				</form>
			</div>

			<div id="form_item">
				<form>
					<label>
						Phone:
						<input type="text" name="email" />
					</label>
				</form>
			</div>

			<div id="form_item">
				<form>
					<label>
						Subject:
						<input type="text" name="email" />
					</label>
				</form>
			</div>

			<div class="btn-group" id="form_item">
				<div class="dropdown show">
					<a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
						Select a Category
					</a>

					<div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
						<a class="dropdown-item" href="#">Technology Issue</a>
						<a class="dropdown-item" href="#">Device Request</a>
					</div>
				</div>
			</div>

			<div id="form_item">
				<button type="button" class="btn btn-success" onClick={routeChange}>
					Submit
				</button>
			</div>

		</div>
	);
};

export default InputForm;

/*<Route path='/home' element={<Home />} />*/