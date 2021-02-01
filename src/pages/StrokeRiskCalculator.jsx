import React from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { Card, Row, Col, Button } from 'react-bootstrap'

import DetailsForm from '../components/DetailsForm'

import scrollToTop from '../helpers/scrollToTop'
import resultContext from '../context/resultContext'

const StrokeRiskCalculator = () => {
	const history = useHistory()
	const location = useLocation()

	const {result} = React.useContext(resultContext)

	const logPatient = () => {
		history.push('/risk-management')
		scrollToTop()
	}

	const resetDetails = () => {
		history.push('/')
	}

	return (
		<div>
			<h2>Hi Dr. John Smith</h2>
			<hr />
			<h5 className='mb-5'>Please fill in patients data below</h5>

			{location.pathname.includes('/result') && (
				<Row className='py-5'>
					<Col sm={12} md={6}>
						<Card className='border-primary result-card fancy-card'>
							<Card.Body >
								<h4>Patient Stroke Risk result</h4>
								<div className='mt-5 d-flex align-items-center justify-content-around'>
									<span className='bg-grey p-3'>5 Years Risk</span>
									<h3 className='years bg-light p-3'>{result.AbsoluteFA5}%</h3>
								</div>
								<div className='my-3 d-flex align-items-center justify-content-around'>
									<span className='bg-grey p-3'>Relative Risk</span>
									<h3 className='relative bg-light p-3'>4.18 x</h3>
								</div>
							</Card.Body>
						</Card>
					</Col>
					<Col sm={12} md={6}>
						<Card className='border-primary fancy-card'>
							<Card.Body>
								<h5>Patient's Overview</h5>
								<Card.Text>
									Your patient of having a stoke in the next five years is 
									{result.AbsoluteFA5}%. This means their relative risk of stroke is
									approximately 4.18 times that of someone their own age, gender
									and ethnicity without any contributing risk factors. Patient's
									Overview
								</Card.Text>
								<Button onClick={logPatient}>Log Patient</Button>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			)}

			<DetailsForm logPatient={logPatient} resetDetails={resetDetails} />
		</div>
	)
}

export default StrokeRiskCalculator
