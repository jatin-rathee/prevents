import React from 'react'
import { useHistory } from 'react-router-dom'
import { Button } from 'react-bootstrap'

import LongTextArea from '../components/LongTextArea'

import data from '../fixtures/recommendations'
import scrollToTop from '../helpers/scrollToTop'

const Recommendations = () => {
	const history = useHistory()

	const handleBack = () => {
		history.push('/risk-management')
		scrollToTop()
	}
	
	const handleNext = () => {
		history.push('/risk-monitoring')
		scrollToTop()
	}

	return (
		<>
			<h2>Recommendations</h2>
			<hr className='mb-5' />

			<h4 className='primary'>Patient's Risk Factor Recommendations</h4>

			<div className='my-5'>
				{data.map((each, idx) => (
					<LongTextArea key={idx} {...each} />
				))}
			</div>

			<div className='my-5 d-flex'>
				<Button onClick={handleBack} className='mr-auto px-5'>
					Back
				</Button>
				<Button onClick={handleNext} className='ml-auto px-5'>
					Next
				</Button>
			</div>
		</>
	)
}

export default Recommendations
