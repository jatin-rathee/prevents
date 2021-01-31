import React from 'react'
import { useHistory } from 'react-router-dom'
import { Row, Col, Button } from 'react-bootstrap'

import PatientDetails from '../components/PatientDetails'
import RiskFactors from '../components/RiskFactors'
import PatientNotes from '../components/PatientNotes'
import StrokeRiskResults from '../components/StrokeRiskResults'
import LongTextArea from '../components/LongTextArea'
import AddToSummaryCheck from '../components/AddToSummaryCheck'

import data from '../fixtures/recommendations'
import scrollToTop from '../helpers/scrollToTop'

const RiskMonitoring = () => {
	const history = useHistory()

	const handleBack = () => {
		history.push('/recommendations')
		scrollToTop()
	}
	
	const handleNext = () => {
		history.push('/patient-summary')
		scrollToTop()
	}

	return (
		<>
			<h2>Patient's Risk Monitoring</h2>
			<hr className='mb-5' />

			<Row>
				<Col sm={12} md={6} className='mr-md-5'>
					<PatientDetails />
					<RiskFactors />
					<PatientNotes />
				</Col>

				<Col sm={12} md={5} className='ml-md-3'>
					<StrokeRiskResults />

					<div className='my-5 d-flex justify-content-between align-items-start'>
						<h4 className='primary'>Patient's Risk Factor Recommendations</h4>
						<AddToSummaryCheck name='recommendations' />
					</div>

					<div className='my-5'>
						{data.slice(0, 3).map((each, idx) => (
							<LongTextArea key={idx} {...each} />
						))}
					</div>
				</Col>
			</Row>

			<Row className='px-md-5 my-5'>
				<Button onClick={handleBack} className='mr-auto px-5'>
					Back
				</Button>
				<Button onClick={handleNext} className='ml-auto px-5'>
					Next
				</Button>
			</Row>
		</>
	)
}

export default RiskMonitoring
