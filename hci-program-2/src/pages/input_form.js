import { React } from "react";
import { Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import { Dropdown } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { tickets } from '../data/tickets'
import { type } from "@testing-library/user-event/dist/type";

const InputForm = () => {
	let navigate = useNavigate();
	const routeChange = () =>{
		let nextID = tickets.length
		console.log(nextID)

		let path = '../home'
		navigate(path);
	}

	const handleOnChange = e =>{
		const {name, value} = e.target
	}
	
	const onSubmit = () => {
		//put save state here
		routeChange()
		console.log("Submitted ticket");
		JSON.stringify({ "id": "nextID", "subject": "subject", "type": "type", "name": "name", "phone": "phone", "date": "date" })
	};

	return (
		<div>
			<h1>
				Submit a Ticket
			</h1>

			<Form autocomplete="off" onSubmit={onSubmit}>
				<Form.Label id="form_item" class="d-flex justify-content-center" >
           			Name
          		</Form.Label>
				<Form.Control id="form_item" class="d-flex justify-content-center" 
					name="name"
					//value={frmData.name}
					onChange={handleOnChange}
					placeholder="Name"
					required
				/>

				<Form.Label>
           			Phone Number
          		</Form.Label>
				<Form.Control
					name="phone"
					//value={frmData.phone}
					onChange={handleOnChange}
					placeholder="Phone Number"
				/>

				<Form.Label>
           			Subject
          		</Form.Label>
				<Form.Control
					name="Subject"
					//value={frmData.Subject}
					onChange={handleOnChange}
					placeholder="Subject"
					required
				/>

				<Form.Label>
           			Description
          		</Form.Label>
				<Form.Control
					name="Description"
					//value={frmData.desc}
					onChange={handleOnChange}
					placeholder="Description"
					required
				/>

				<div class="btn-group d-flex justify-content-center" id="form_item">
				<Dropdown>
					<Dropdown.Toggle variant="success" id="dropdown-basic">
						Select a Category
					</Dropdown.Toggle>

					<Dropdown.Menu name = "type">
						<Dropdown.Item href="#/action-1">Tech Issue</Dropdown.Item>
						<Dropdown.Item href="#/action-2">Device Request</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>
				</div>

				<Button type="button submit" class="btn btn-primary" onClick={routeChange}>
					Submit
				</Button>
			</Form>

			<div id="form_item" class="d-flex justify-content-center">
				<Button type="button" class="btn btn-primary" onClick={routeChange}>
					Submit
				</Button>
			</div>

		</div>
		/*
		<div>
			<h1>
				Submit a Ticket
			</h1>
		
			<div id="form_item" class="d-flex justify-content-center">
				<Form>
					<label>
						Name:  
						<input type="text" name="name" />
					</label>
				</Form>
			</div>

			<div id="form_item" class="d-flex justify-content-center">
				<Form>
					<label>
						Phone:  
						<input type="text" name="phone" />
					</label>
				</Form>
			</div>

			<div id="form_item" class="d-flex justify-content-center">
				<Form>
					<label>
						Subject:  
						<input type="text" name="subject" />
					</label>
				</Form>
			</div>

			<div id="form_item" class="d-flex justify-content-center">
				<Form>
					<label>
						Description:  
						<input type="text" name="desc" />
					</label>
				</Form>
			</div>
	
			<div class="btn-group d-flex justify-content-center" id="form_item">
				<Dropdown>
					<Dropdown.Toggle variant="success" id="dropdown-basic">
						Select a Category
					</Dropdown.Toggle>

					<Dropdown.Menu name = "type">
						<Dropdown.Item href="#/action-1">Tech Issue</Dropdown.Item>
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
		*/
	);
	// This is the code for the input form where you can type in your name, phone, subject, and description on the webpage. Also includes buttons via bootstrap that a user can click on.
};

export default InputForm;

/*<Route path='/home' element={<Home />} />*/