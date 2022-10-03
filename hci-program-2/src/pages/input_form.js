import  React, { useState } from "react";
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import tickets from '../data/tickets.json'; // Data file to hold tickets

const InputForm = () => {
	// useNavigate is used to navigate from on js page to another
	const navigate = useNavigate();
	
	// useState returns a pair: the current state value and a function that lets you update it
	const [name, setName] = useState();
	const [phone, setPhone] = useState();
	const [type, setType] = useState();
	const [subject, setSubject] = useState();
	const [description, setDescription] = useState();
	
	//function that is called when submit button is pressed
	const onSubmit = () => {
		let nextID = tickets.length + 1;
		let jsonTicket = JSON.stringify({ "id": nextID, "subject": subject, "type": type, "name": name, "phone": phone, "date": new Date().toLocaleString(), "description": description });
		console.log("Submitted ticket");
		console.log(jsonTicket)
		navigate("../home")
	};

	/* This code is used to display the form group on the input form page where the user can type in their information. 
	There is placeholder text that the user can click on to type in their information*/
	const createFormGroups = () => {
		return(
			<div>
				<Form.Group>
					<Form.Label>
						Name:
					</Form.Label>
					<Form.Control
						name="name"
						placeholder="Name"
						value={name || ''}
						onChange= {e => setName(e.target.value)}
						type="text"
						required
					/>
				</Form.Group>

				<br />

				<Form.Group>
					<Form.Label>
						Phone Number:
					</Form.Label>
					<Form.Control
						name="phone"
						placeholder="Phone Number"
						value={phone || ''}
						onChange={e => setPhone(e.target.value)}
						type="text"
						required
					/>
				</Form.Group>

				<br />

				<Form.Group>
					<Form.Label>
						Type:
					</Form.Label>
					<Form.Select
						value={type || ''}
						onChange={e => setType(e.target.value)}>
						<option value="" isinvalid="true">
							Select Type
						</option>
						<option value="Incident">Incident</option>
						<option value="Request">Request</option>

					</Form.Select>
				</Form.Group>

				<br />

				<Form.Group>
					<Form.Label>
						Subject:
					</Form.Label>
					<Form.Control
						name="subject"
						placeholder="Subject"
						value={subject || ''}
						onChange={e => setSubject(e.target.value)}
						type="text"
						required
					/>
				</Form.Group>

				<br />

				<Form.Group>
					<Form.Label>
						Description:
					</Form.Label>
					<Form.Control
						name="description"
						placeholder="Description"
						value={description || ''}
						onChange={e => setDescription(e.target.value)}
						type="text"
						required
					/>
				</Form.Group>

				<br />

			</div>
		)
	}

	// Returns the form and a Bootstrap button that submits data in the form boxes
	return (
	<div style={{ 
			display: 'block',
			width: 1000, 
			padding: 30, 
			margin: "auto" 
			}}>
		<h1>
			Submit a Ticket
		</h1>
		
		<Form autoComplete="off" >

			{createFormGroups()}
			
		</Form>

		<Button type="button" className="btn btn-primary" onClick={() => {onSubmit()}}>
			Submit
		</Button>
		

	</div>
	);
	// This is the code that is used to submit the users information by clicking a button provided by bootstrap
};

export default InputForm;