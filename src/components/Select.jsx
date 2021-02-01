import React from 'react'
import { Form } from 'react-bootstrap'

const Select = ({ label, name, handleChange, value, options, type }) => {
	const renderOptions = () => {
		if (type) {
			if (type === 'yes/no') {
				return (
					<>
						<option>Yes</option>
						<option>No</option>
					</>
				)
			} else if (type === 'more/less') {
				return (
					<>
						<option>Yes, more than 12 months ago</option>
						<option>Yes, less than 12 months ago</option>
						<option>No</option>
					</>
				)
			}
		} else {
			return options.map((each) => <option key={each.toLowerCase()}>{each}</option>)
		}
	}

	return (
		<Form.Group>
			<Form.Label>{label}</Form.Label>
			<Form.Control
				as='select'
				name={name}
				onChange={handleChange}
				value={value}
			>
				<option value=''>Please select one</option>
				{renderOptions()}
			</Form.Control>
		</Form.Group>
	)
}

export default Select
