import  React, { useState } from "react";
import { Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import { Form } from 'react-bootstrap';
import tickets from '../data/tickets.json'

const InputForm = () => {
	const navigate = useNavigate();
	const [name, setName] = useState();
	const [phone, setPhone] = useState();
	const [type, setType] = useState();
	const [subject, setSubject] = useState();
	const [description, setDescription] = useState();
	
	const onSubmit = () => {
		let nextID = tickets.length + 1;
		let jsonTicket = JSON.stringify({ "id": nextID, "subject": subject, "type": type, "name": name, "phone": phone, "date": new Date().toLocaleString(), "description": description });
		console.log("Submitted ticket");
		console.log(jsonTicket)
		navigate("../home")
	};

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
			/* This code is used to display the form group on the input form page where the user can type in their information. there is placeholder text that the user can click on to type in their information*/
		)
	}

	return (
	<div>
		<h1>
			Submit a Ticket
		</h1>
		
		<Form autoComplete="off" >

			{createFormGroups()};
			
		</Form>
		<div>
			<Button type="button" className="btn btn-primary" onClick={() => {onSubmit()}}>
				Submit
			</Button>
		</div>
		

	</div>
	);
	// This is the code that is used to submit the users information by clicking a button provided by bootstrap
};

export default InputForm;