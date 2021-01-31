import React from 'react'
import { useLocation } from 'react-router-dom'
import AddToSummaryCheck from './AddToSummaryCheck'

const PatientNotes = () => {

	const location = useLocation()

	return (
		<>
			{location.pathname === '/risk-monitoring' ? (
				<div className='mb-4 d-flex justify-content-between align-items-start'>
					<h4 className='primary'>Patient's Notes</h4>
					<AddToSummaryCheck name='notes' />
				</div>
			) : (
				<h4 className='primary mb-4'>Patient's Notes</h4>
			)}
			
			<textarea
				className='ta1'
				defaultValue='
						21/01/2020: Patient has recently been treated with XYZ and was
						prescribed 200mg Dose of XYZ200. \n25/01/2020: Stroke risk assesed by
						Dr. John Smith - recommendations given 25/01/2020: Discharged from
						Auckland Hospital Type notes here...
					'
			/>
		</>
	)
}

export default PatientNotes
