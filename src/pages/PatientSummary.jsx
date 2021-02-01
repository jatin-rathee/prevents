import React from 'react'
import { useHistory } from 'react-router-dom'
import summaryContext from '../context/summaryContext'
import { Row, Col, Button, Form, Modal } from 'react-bootstrap'

import PatientDetails from '../components/PatientDetails'
import RiskFactors from '../components/RiskFactors'
import PatientNotes from '../components/PatientNotes'
import StrokeRiskResults from '../components/StrokeRiskResults'
import LongTextArea from '../components/LongTextArea'

import scrollToTop from '../helpers/scrollToTop'

import data from '../fixtures/recommendations'
import qrCode from '../assets/qr-code.png'

const PatientSummary = () => {
	const history = useHistory()

	const { summary, setSummary } = React.useContext(summaryContext)

	const [show, setShow] = React.useState(false)

	const handleClose = () => setShow(false)
	const handleShow = () => setShow(true)

	const reset = () => {
		history.push('/')
		setSummary({
			details: false,
			notes: false,
			recommendations: false,
			riskFactors: false,
			strokeRiskResults: false,
		})
		scrollToTop()
	}

	const printSummary = () => {
		window.print()
	}

	return (
		<>
			{summary && (
				<>
					<Row>
						<Col>
							{summary.details && <PatientDetails />}
							{summary.riskFactors && <RiskFactors />}
						</Col>

						<Col>
							{summary.notes && <PatientNotes />}
							{summary.strokeRiskResults && <StrokeRiskResults />}
						</Col>
					</Row>

					<Row>
						{summary.recommendations && (
							<>
								<h4 className='primary mt-4'>
									Patient's Risk Factor Recommendations
								</h4>

								<div className='w-100'>
									{data.map((each, idx) => (
										<LongTextArea key={idx} {...each} />
									))}
								</div>
							</>
						)}
					</Row>

					<Row className='my-5 d-flex justify-content-between align-items-center no-print'>
						<Button onClick={reset}>Reset</Button>
						<Button>Upload to Database</Button>
						<Button onClick={handleShow}>Share</Button>
						<Button onClick={printSummary}>Print Patient Summary</Button>
					</Row>
				</>
			)}

			<Modal
				show={show}
				onHide={handleClose}
				className='border-primary fancy-modal'
				centered
			>
				<Modal.Header closeButton>
					<Modal.Title className='d-flex justify-content-between align-items-center'>
						<h4>Share Results</h4>
					</Modal.Title>
				</Modal.Header>
				<Modal.Body className='px-md-5 py-md-3'>
					<Form.Group>
						<Form.Label>Unique Token: </Form.Label>
						<Form.Control
							placeholder='Unique Token'
							defaultValue='CXEO295145MCF'
						/>
					</Form.Group>
					<Form.Group>
						<Form.Label>Email Paitent: </Form.Label>
						<Form.Control
							placeholder='Email Paitent'
							defaultValue='jonhsmith@outlook.com'
						/>
					</Form.Group>
					<div>
						<Form.Label>QR Code: </Form.Label>
					</div>
					<div className='d-flex justify-content-center'>
						<img src={qrCode} className='qr-code' alt='QR Code' />
					</div>
					<div className='d-flex justify-content-center'>
						<Button className='px-4 my-4' onClick={handleClose}>
							Ok
						</Button>
					</div>
				</Modal.Body>
			</Modal>
		</>
	)
}

export default PatientSummary
