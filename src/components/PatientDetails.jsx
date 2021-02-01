import React from 'react'
import { useLocation } from 'react-router-dom'
import { Form } from 'react-bootstrap'
import detailsContext from '../context/detailsContext'
import AddToSummaryCheck from './AddToSummaryCheck'

const PatientDetails = () => {
	const location = useLocation()

	const { details } = React.useContext(detailsContext)

	return (
		<div>
			{location.pathname === '/risk-monitoring' ? (
				<div className='mb-4 d-flex justify-content-between align-items-start'>
					<h4 className='primary'>Patient's Details</h4>
					<AddToSummaryCheck name="details" />
				</div>
			) : (
				<h4 className='primary mb-4'>Patient's Details</h4>
			)}

			<div className='d-flex justify-content-between align-items-center my-4'>
				<h5 style={{ flexGrow: 1 }}>Patient Unique Id</h5>
				<Form.Control type='text' className='w-40' defaultValue='WPF2390AUT' />
			</div>

			<div className='d-flex justify-content-between align-items-center my-4'>
				<h5 style={{ flexGrow: 1 }}>Age in Years</h5>
				<Form.Control
					type='text'
					className='w-40'
					defaultValue={details?.Age}
				/>
			</div>

			<div className='d-flex justify-content-between align-items-center my-4'>
				<h5 style={{ flexGrow: 1 }}>Ethnicity</h5>
				<Form.Control
					type='text'
					className='w-40'
					defaultValue={details?.Ethnicity}
				/>
			</div>

			<div className='d-flex justify-content-between align-items-center my-4'>
				<h5 style={{ flexGrow: 1 }}>Gender</h5>
				<Form.Control
					type='text'
					className='w-40'
					defaultValue={details?.Sex}
				/>
			</div>
		</div>
	)
}

export default PatientDetails
