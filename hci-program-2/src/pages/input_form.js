import React from "react";
import Button from 'react-bootstrap/Button';

const InputForm = () => {
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
					Email:
					<input type="text" name="email" />
				</label>
			</form>
		</div>

		<div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
			<a class="dropdown-item">Technology Issue</a>
			<a class="dropdown-item">Device Request</a>
		</div>

		<button type="button" class="btn btn-success" href="">
			Submit Ticket
		</button>

	</div>
);
};

export default InputForm;

/*<Route path='/home' element={<Home />} />*/