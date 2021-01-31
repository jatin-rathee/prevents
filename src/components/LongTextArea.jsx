import React from 'react'
import { useLocation } from 'react-router-dom'

const LongTextArea = ({ label, text }) => {
	const location = useLocation()

	return (
		<div className='my-3 mb-4'>
			<h5>{label}</h5>
			<textarea
				className={location.pathname === '/risk-monitoring' ? 'half' : 'full'}
				defaultValue={text}
			/>
		</div>
	)
}

export default LongTextArea
