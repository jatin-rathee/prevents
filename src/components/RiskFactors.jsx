import React from 'react'
import { useLocation } from 'react-router-dom'
import { Form } from 'react-bootstrap'
import detailsContext from '../context/detailsContext'
import AddToSummaryCheck from './AddToSummaryCheck'

const RiskFactors = () => {
	const location = useLocation()

	const { details } = React.useContext(detailsContext)

	return (
		<>
			{location.pathname === '/risk-monitoring' ? (
				<div className='mb-4 d-flex justify-content-between align-items-start'>
					<h4 className='primary'>Identified Risk Factors</h4>
					<AddToSummaryCheck name='riskFactors' />
				</div>
			) : (
				<h4 className='primary mb-4'>Identified Risk Factors</h4>
			)}

			{details &&
				Object.keys(details).map((detail, idx) => {
					if (
						details[detail] === 'Yes' ||
						details[detail] === 'Yes, more than 12 months ago' ||
						details[detail] > 100
					) {
						return (
							<div
								key={idx}
								className='d-flex justify-content-between align-items-center my-4'
							>
								<h5 style={{ flexGrow: 1 }}>{detail}</h5>
								<Form.Control
									type='text'
									className='w-40'
									defaultValue={details[detail]}
								/>
							</div>
						)
					}

					return null
				})}
		</>
	)
}

export default RiskFactors
