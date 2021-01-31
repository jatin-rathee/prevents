import React from 'react'
import summaryContext from '../context/summaryContext'
import { Row, Col } from 'react-bootstrap'

import PatientDetails from '../components/PatientDetails'
import RiskFactors from '../components/RiskFactors'
import PatientNotes from '../components/PatientNotes'
import StrokeRiskResults from '../components/StrokeRiskResults'
import LongTextArea from '../components/LongTextArea'

import data from '../fixtures/recommendations'

const PatientSummary = () => {
	const { summary } = React.useContext(summaryContext)

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
				</>
			)}
		</>
	)
}

export default PatientSummary
