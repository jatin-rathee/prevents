import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import { Redirect, Route, Switch } from 'react-router-dom'

import { Container } from 'react-bootstrap'

import Navbar from './components/Navbar'
import StrokeRiskCalculator from './pages/StrokeRiskCalculator'
import Recommendations from './pages/Recommendations'
import PatientSummary from './pages/PatientSummary'
import RiskManagement from './pages/RiskManagement'
import RiskMonitoring from './pages/RiskMonitoring'

import detailsContext from './context/detailsContext'
import summaryContext from './context/summaryContext'
import resultContext from './context/resultContext'

export default function App() {
	const [details, setDetails] = React.useState(null)
	const [summary, setSummary] = React.useState({
		details: false,
		notes: false,
		recommendations: false,
		riskFactors: false,
		strokeRiskResults: false,
	})
	const [result, setResult] = React.useState({
		AbsoluteFA5: 0,
		Relative: 0,
	})

	return (
		<>
			<Navbar />

			<detailsContext.Provider value={{ details, setDetails }}>
				<summaryContext.Provider value={{ summary, setSummary }}>
					<resultContext.Provider value={{ result, setResult }}>
						<main>
							<Container className='p-4'>
								<Switch>
									<Route
										path='/stroke-risk-calculator'
										component={StrokeRiskCalculator}
									/>
									<Route path='/recommendations' component={Recommendations} />
									<Route path='/patient-summary' component={PatientSummary} />
									<Route path='/risk-management' component={RiskManagement} />
									<Route path='/risk-monitoring' component={RiskMonitoring} />

									<Redirect from='*' to='/stroke-risk-calculator' />
								</Switch>
							</Container>
						</main>
					</resultContext.Provider>
				</summaryContext.Provider>
			</detailsContext.Provider>

			<footer>
				<div className='bg-light p-4 text-center'>PreventS &copy; 2020</div>
			</footer>
		</>
	)
}
