import React from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { Formik } from 'formik'
import { Form, Button, Row, Col, Modal } from 'react-bootstrap'
import Select from './Select'

import detailsContext from '../context/detailsContext'
import resultContext from '../context/resultContext'

import scrollToTop from '../helpers/scrollToTop'

import { CalculateBaseFA } from '../functions/CalculateBaseFA'
import { CalculateAbsoluteFA } from '../functions/CalculateAbsoluteFA'
import { CalculateFinalRisk } from '../functions/CalculateFinalRisk'

const DetailsForm = ({ logPatient, resetDetails }) => {
	const history = useHistory()
	const location = useLocation()

	const { setDetails } = React.useContext(detailsContext)
	const { result, setResult } = React.useContext(resultContext)

	const [show, setShow] = React.useState(false)

	const handleClose = () => setShow(false)
	const handleShow = () => setShow(true)

	return (
		<>
			<Formik
				initialValues={{
					Age: 69,
					Sex: 'Male',
					Ethnicity: 'Pacific Islander',
					Weight: 115,
					Height: 180,
					Smoking: 'No',
					Drinking: 'Yes',
					Fruits: 'Yes',
					Activity: 'No',
					Stress: 'No',
					ParentStroke: 'Yes',
					BloodPressure: 140,
					PressureMedication: 'Yes',
					Diabetes: 'Yes, more than 12 months ago',
					HeartDisease: 'Yes, more than 12 months ago',
					EnlargedHeart: 'No',
					Fibrillation: 'No',
					Dementia: 'No',
					Memory: 'No',
					BrainInjury: 'No',
					MiniStroke: 'No',
				}}
				// validate={(values) => {
				// 	const errors = {}
				// 	if (!values.email) {
				// 		errors.email = 'Required'
				// 	} else if (
				// 		!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
				// 	) {
				// 		errors.email = 'Invalid email address'
				// 	}
				// 	return errors
				// }}
				onSubmit={(values, { setSubmitting }) => {
					const BaseFA5 = CalculateBaseFA(
						values.Age,
						values.Sex,
						5,
						values.BloodPressure,
						values.Ethnicity
					)
					console.log('BaseFA5: ', BaseFA5)

					const BaseFA10 = CalculateBaseFA(
						values.Age,
						values.Sex,
						10,
						values.BloodPressure,
						values.Ethnicity
					)
					console.log('BaseFA10: ', BaseFA10)

					const AbsoluteFA5 = CalculateAbsoluteFA(
						values.Age,
						values.Sex,
						values.BloodPressure,
						values.PressureMedicine,
						values.Diabetes,
						values.Smoking,
						values.HeartDisease,
						values.Fibrillation,
						values.EnlargedHeart,
						5
					)
					console.log('AbsoluteFA5: ', AbsoluteFA5)

					setResult({
						...result,
						AbsoluteFA5: Number(AbsoluteFA5).toFixed(2),
					})

					const AbsoluteFA10 = CalculateAbsoluteFA(
						values.Age,
						values.Sex,
						values.BloodPressure,
						values.PressureMedicine,
						values.Diabetes,
						values.Smoking,
						values.HeartDisease,
						values.Fibrillation,
						values.EnlargedHeart,
						10
					)
					console.log('AbsoluteFA10: ', AbsoluteFA10)

					const FinalRisk5 = CalculateFinalRisk(
						AbsoluteFA5,
						values.Ethnicity,
						values.Fruits,
						values.Drinking,
						values.Activity,
						values.ParentStroke,
						values.Stress,
						5,
						values.Dementia,
						values.Memory,
						values.BrainInjury,
						values.MiniStroke,
						values.Weight,
						values.Height,
						'kg',
						'cm'
					)
					console.log('FinalRisk5: ', FinalRisk5)

					const FinalRisk10 = CalculateFinalRisk(
						AbsoluteFA5,
						values.Ethnicity,
						values.Fruits,
						values.Drinking,
						values.Activity,
						values.ParentStroke,
						values.Stress,
						10,
						values.Dementia,
						values.Memory,
						values.BrainInjury,
						values.MiniStroke,
						values.Weight,
						values.Height,
						'kg',
						'cm'
					)
					console.log('FinalRisk10: ', FinalRisk10)

					history.push('/stroke-risk-calculator/result')
					scrollToTop()
					setSubmitting(false)
					setDetails(values)
					// setTimeout(() => {
					// 	alert(JSON.stringify(values, null, 2))
					// }, 400)
				}}
			>
				{({
					values,
					errors,
					touched,
					handleChange,
					handleBlur,
					handleSubmit,
					isSubmitting,
					/* and other goodies */
				}) => (
					// 	{/* {errors.email && touched.email && errors.email} */}

					<Form onSubmit={handleSubmit} className='my-2'>
						<Row>
							<Col xs={12} md={6}>
								<Form.Group>
									<Form.Label>Age in years</Form.Label>
									<Form.Control
										type='number'
										name='Age'
										value={values.Age}
										onChange={handleChange}
										onBlur={handleBlur}
										placeholder='Enter age'
									/>
								</Form.Group>

								<Select
									name='Sex'
									label='Sex'
									handleChange={handleChange}
									value={values.Sex}
									options={['Male', 'Female']}
								/>

								<Select
									name='Ethnicity'
									label='Ethnicity'
									handleChange={handleChange}
									value={values.Ethnicity}
									options={[
										'Caucasian',
										'Maori',
										'Pacific Islander',
										'Chinese',
										'Indian',
										'African',
										'Arabian/Persian',
										'Japanese',
										'Latin American/Hispanic',
										'Malay/Indonesian/Other South East Asian',
										'Other',
										'Other Asian',
										'Not Specified',
									]}
								/>

								<Form.Group>
									<Form.Label>Weight (kg)</Form.Label>
									<Form.Control
										type='number'
										name='Weight'
										value={values.Weight}
										onChange={handleChange}
										onBlur={handleBlur}
										placeholder='Enter weight'
									/>
								</Form.Group>

								<Form.Group>
									<Form.Label>Height (cm)</Form.Label>
									<Form.Control
										type='number'
										name='Height'
										value={values.Height}
										onChange={handleChange}
										onBlur={handleBlur}
										placeholder='Enter height'
									/>
								</Form.Group>

								<Select
									name='Smoking'
									label='Smoking'
									handleChange={handleChange}
									value={values.Smoking}
									type='yes/no'
								/>

								<Select
									name='Drinking'
									label='Alcohol'
									handleChange={handleChange}
									value={values.Drinking}
									type='yes/no'
								/>

								<Select
									name='Fruits'
									label='Fruits and/or Vegetables'
									handleChange={handleChange}
									value={values.Fruits}
									type='yes/no'
								/>

								<Select
									name='Activity'
									label='Physical Activity'
									handleChange={handleChange}
									value={values.Activity}
									type='yes/no'
								/>

								<Select
									name='Stress'
									label='Chronic Stress or Depression'
									handleChange={handleChange}
									value={values.Stress}
									type='yes/no'
								/>

								<Select
									name='ParentStroke'
									label='Stroke or Heart Attack'
									handleChange={handleChange}
									value={values.ParentStroke}
									type='yes/no'
								/>
							</Col>

							<Col xs={12} md={6}>
								<Form.Group>
									<Form.Label>Systolic Blood Pressure</Form.Label>
									<Form.Control
										type='number'
										name='BloodPressure'
										value={values.BloodPressure}
										onChange={handleChange}
										onBlur={handleBlur}
										placeholder='Enter Systolic Blood Pressure'
									/>
								</Form.Group>

								<Select
									name='PressureMedication'
									label='Blood Pressure Medication'
									handleChange={handleChange}
									value={values.PressureMedication}
									type='yes/no'
								/>

								<Select
									name='Diabetes'
									label='Diabetes'
									handleChange={handleChange}
									value={values.Diabetes}
									type='more/less'
								/>

								<Select
									name='HeartDisease'
									label='Heart Disease'
									handleChange={handleChange}
									value={values.HeartDisease}
									type='more/less'
								/>

								<Select
									name='EnlargedHeart'
									label='Enlarged Heart'
									handleChange={handleChange}
									value={values.EnlargedHeart}
									type='more/less'
								/>

								<Select
									name='Fibrillation'
									label='Aterial Fibrillation'
									handleChange={handleChange}
									value={values.Fibrillation}
									type='more/less'
								/>

								<Select
									name='Dementia'
									label='Cognitive Problem'
									handleChange={handleChange}
									value={values.Dementia}
									type='more/less'
								/>

								<Select
									name='Memory'
									label='Memory Complaints'
									handleChange={handleChange}
									value={values.Memory}
									type='more/less'
								/>

								<Select
									name='BrainInjury'
									label='Traumatic Brain Injury'
									handleChange={handleChange}
									value={values.BrainInjury}
									type='more/less'
								/>

								<Select
									name='MiniStroke'
									label='Stroke Or TIA'
									handleChange={handleChange}
									value={values.MiniStroke}
									type='more/less'
								/>
							</Col>
						</Row>

						<Row className='my-4 px-2'>
							{location.pathname.includes('/result') ? (
								<>
									<Button
										variant='primary'
										onClick={resetDetails}
										disabled={isSubmitting}
									>
										Reset
									</Button>
									<Button
										variant='primary'
										onClick={logPatient}
										disabled={isSubmitting}
										className='ml-auto'
									>
										Log Patient
									</Button>
								</>
							) : (
								<>
									<Button variant='primary' onClick={handleShow}>
										Populate Data
									</Button>
									<Button
										variant='primary'
										type='submit'
										className='ml-auto'
										disabled={isSubmitting}
									>
										Analyze
									</Button>
								</>
							)}
						</Row>
					</Form>
				)}
			</Formik>

			<Modal
				show={show}
				onHide={handleClose}
				className='border-primary fancy-modal'
				centered
			>
				<Modal.Header closeButton>
					<Modal.Title className='d-flex justify-content-between align-items-center'>
						<h4>Prepopulate Data</h4>
						<h6 className='ml-5'>Powered by Azure</h6>
					</Modal.Title>
				</Modal.Header>
				<Modal.Body className='p-md-5'>
					<div className='d-flex justify-content-center flex-column align-items-center'>
						<Form.Control placeholder='Enter NHI Number' />
						<Button className='px-4 my-4' onClick={handleClose}>Ok</Button>
					</div>

					<div className='my-4 text-center'>Or</div>

					<div className='d-flex justify-content-center flex-column align-items-center'>
						<Form.Control placeholder='Enter NHI Number' />
						<Button className='px-4 my-4' onClick={handleClose}>Ok</Button>
					</div>
				</Modal.Body>
			</Modal>
		</>
	)
}

export default DetailsForm
