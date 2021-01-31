import React from 'react'
import { Card } from 'react-bootstrap'
import { useLocation } from 'react-router-dom'
import AddToSummaryCheck from './AddToSummaryCheck'

const StrokeRiskResults = () => {
	const location = useLocation()

	return (
		<>
			{location.pathname === '/risk-monitoring' ? (
				<div className='mb-4 d-flex justify-content-between align-items-start'>
					<h4 className='primary'>Stroke Risk Results</h4>
					<AddToSummaryCheck name='strokeRiskResults' />
				</div>
			) : (
				<h4 className='primary my-4'>Stroke Risk Results</h4>
			)}

			<Card className='border-primary result-card'>
				<Card.Body>
					<h4>Patient Stroke Risk result</h4>
					<div className='mt-5 d-flex align-items-center justify-content-around'>
						<span className='bg-grey p-3'>5 Years Risk</span>
						<h3 className='years bg-light p-3'>9.72%</h3>
					</div>
					<div className='my-3 d-flex align-items-center justify-content-around'>
						<span className='bg-grey p-3'>Relative Risk</span>
						<h3 className='relative bg-light p-3'>4.18 x</h3>
					</div>
					<br />
					<br />

					<Card.Text>
						Your patient of having a stoke in the next five years is 9.72%. This
						means their relative risk of stroke is approximately 4.18 times that
						of someone their own age, gender and ethnicity without any
						contributing risk factors. Patient's Overview
					</Card.Text>
				</Card.Body>
			</Card>
		</>
	)
}

export default StrokeRiskResults
