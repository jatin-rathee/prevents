import React from 'react'
import { Form } from 'react-bootstrap'
import summaryContext from '../context/summaryContext'

const AddToSummaryCheck = ({ name }) => {
	const { summary, setSummary } = React.useContext(summaryContext)

	const handleChange = (e) => {
		setSummary({
			...summary,
			[e.target.name]: e.target.checked,
		})
	}

	return (
		<Form.Group>
			<Form.Check
				type='checkbox'
				name={name}
				defaultChecked={summary[name]}
				onChange={handleChange}
				label='Add to Patient Summary'
			/>
		</Form.Group>
	)
}

export default AddToSummaryCheck
