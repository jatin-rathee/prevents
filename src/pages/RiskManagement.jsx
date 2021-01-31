import React from 'react'
import { useHistory } from 'react-router-dom'
import { Row, Col, Button } from 'react-bootstrap'
import PatientDetails from '../components/PatientDetails'
import PatientNotes from '../components/PatientNotes'
import RiskFactors from '../components/RiskFactors'
import StrokeRiskResults from '../components/StrokeRiskResults'

import scrollToTop from '../helpers/scrollToTop'

const RiskManagement = () => {
	const history = useHistory()

	const clickHandler = () => {
		history.push('/recommendations')
		scrollToTop()
	}
	
	const resetDetails = () => {
		history.push('/')
		scrollToTop()
	}

	return (
		<>
			<h2>Patient's Risk Management</h2>
			<hr className='mb-5' />

			<Row>
				<Col sm={12} md={6} className='mr-md-4'>
					<PatientDetails />
				</Col>

				<Col sm={12} md={5} className='ml-md-4'>
					<PatientNotes />
				</Col>
			</Row>

			<Row className='mt-5'>
				<Col sm={12} md={6} className='mr-md-4'>
					<RiskFactors />
				</Col>

				<Col sm={12} md={5} className='ml-md-4'>
					<StrokeRiskResults />
				</Col>
			</Row>

			<Row className='my-3 mt-5 px-md-2'>
				<Button onClick={resetDetails} className='mr-auto'>
					Reset
				</Button>
				<Button onClick={clickHandler} className='ml-auto'>
					Patient Recommendations
				</Button>
			</Row>
		</>
	)
}

export default RiskManagement
