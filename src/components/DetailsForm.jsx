import React from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { Formik } from 'formik'
import { Form, Button, Row, Col } from 'react-bootstrap'
import Select from './Select'

import detailsContext from '../context/detailsContext'
import scrollToTop from '../helpers/scrollToTop'

const DetailsForm = ({ logPatient, resetDetails }) => {
	const history = useHistory()
	const location = useLocation()

	const { setDetails } = React.useContext(detailsContext)

	return (
		<Formik
			initialValues={{
				age: 69,
				gender: 'Male',
				ethnicity: 'Pacific Islander',
				weight: 115,
				height: 180,
				smoking: 'No',
				alcohol: 'Yes',
				fruitsAndVegetables: 'Yes',
				physicalActivity: 'No',
				depression: 'No',
				heartAttack: 'Yes',
				systolicBloodPressure: 140,
				bloodPressureMedication: 'Yes',
				diabetes: 'Yes, more than 12 months ago',
				heartDisease: 'Yes, more than 12 months ago',
				enlargedHeart: 'No',
				aterialFibrillation: 'No',
				cognitiveProblem: 'No',
				memoryComplaints: 'No',
				traumaticBrainInjury: 'No',
				strokeOrTia: 'No',
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
									name='age'
									value={values.age}
									onChange={handleChange}
									onBlur={handleBlur}
									placeholder='Enter age'
								/>
							</Form.Group>

							<Select
								name='gender'
								label='Gender'
								handleChange={handleChange}
								value={values.gender}
								options={['Male', 'Female']}
							/>

							<Select
								name='ethnicity'
								label='Ethnicity'
								handleChange={handleChange}
								value={values.ethnicity}
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
									name='weight'
									value={values.weight}
									onChange={handleChange}
									onBlur={handleBlur}
									placeholder='Enter weight'
								/>
							</Form.Group>

							<Form.Group>
								<Form.Label>Height (cm)</Form.Label>
								<Form.Control
									type='number'
									name='height'
									value={values.height}
									onChange={handleChange}
									onBlur={handleBlur}
									placeholder='Enter height'
								/>
							</Form.Group>

							<Select
								name='smoking'
								label='Smoking'
								handleChange={handleChange}
								value={values.smoking}
								type='yes/no'
							/>

							<Select
								name='alcohol'
								label='Alcohol'
								handleChange={handleChange}
								value={values.alcohol}
								type='yes/no'
							/>

							<Select
								name='fruitsAndVegetables'
								label='Fruits and/or Vegetables'
								handleChange={handleChange}
								value={values.fruitsAndVegetables}
								type='yes/no'
							/>

							<Select
								name='physicalActivity'
								label='Physical Activity'
								handleChange={handleChange}
								value={values.physicalActivity}
								type='yes/no'
							/>

							<Select
								name='depression'
								label='Chronic Stress or Depression'
								handleChange={handleChange}
								value={values.depression}
								type='yes/no'
							/>

							<Select
								name='heartAttack'
								label='Stroke or Heart Attack'
								handleChange={handleChange}
								value={values.heartAttack}
								type='yes/no'
							/>
						</Col>

						<Col xs={12} md={6}>
							<Form.Group>
								<Form.Label>Systolic Blood Pressure</Form.Label>
								<Form.Control
									type='number'
									name='systolicBloodPressure'
									value={values.systolicBloodPressure}
									onChange={handleChange}
									onBlur={handleBlur}
									placeholder='Enter Systolic Blood Pressure'
								/>
							</Form.Group>

							<Select
								name='bloodPressureMedication'
								label='Blood Pressure Medication'
								handleChange={handleChange}
								value={values.bloodPressureMedication}
								type='yes/no'
							/>

							<Select
								name='diabetes'
								label='Diabetes'
								handleChange={handleChange}
								value={values.diabetes}
								type='more/less'
							/>

							<Select
								name='heartDisease'
								label='Heart Disease'
								handleChange={handleChange}
								value={values.heartDisease}
								type='more/less'
							/>

							<Select
								name='enlargedHeart'
								label='Enlarged Heart'
								handleChange={handleChange}
								value={values.enlargedHeart}
								type='more/less'
							/>

							<Select
								name='aterialFibrillation'
								label='Aterial Fibrillation'
								handleChange={handleChange}
								value={values.aterialFibrillation}
								type='more/less'
							/>

							<Select
								name='cognitiveProblem'
								label='Cognitive Problem'
								handleChange={handleChange}
								value={values.cognitiveProblem}
								type='more/less'
							/>

							<Select
								name='memoryComplaints'
								label='Memory Complaints'
								handleChange={handleChange}
								value={values.memoryComplaints}
								type='more/less'
							/>

							<Select
								name='traumaticBrainInjury'
								label='Traumatic Brain Injury'
								handleChange={handleChange}
								value={values.traumaticBrainInjury}
								type='more/less'
							/>

							<Select
								name='strokeOrTia'
								label='Stroke Or TIA'
								handleChange={handleChange}
								value={values.strokeOrTia}
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
	)
}

export default DetailsForm
