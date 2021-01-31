import React from 'react'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Navbar, Nav, Button, Container } from 'react-bootstrap'

import logo from '../assets/logo.png'

const TopNavbar = () => {
	const location = useLocation()

	return (
		<Navbar bg='light' expand='lg' className='p-4'>
			<Container className="mw-100 px-md-5">
				<Navbar.Brand href='/'>
					<img
						alt=''
						src={logo}
						width='50'
						height='50'
						className='d-inline-block align-top'
					/>{' '}
				</Navbar.Brand>
				<Navbar.Toggle aria-controls='basic-navbar-nav' />
				<Navbar.Collapse id='basic-navbar-nav'>
					<Nav className='mr-auto' activeKey={location.pathname}>
						<Nav.Link className='mx-md-4'
							as={Link}
							href='/stroke-risk-calculator'
							to='/stroke-risk-calculator'
						>
							Stroke Risk Calculator
						</Nav.Link>
						<Nav.Link className='mx-md-4' as={Link} href='/risk-management' to='/risk-management'>
							Risk Management
						</Nav.Link>
						<Nav.Link className='mx-md-4' as={Link} href='/recommendations' to='/recommendations'>
							Recommendations
						</Nav.Link>
						<Nav.Link className='mx-md-4' as={Link} href='/risk-monitoring' to='/risk-monitoring'>
							Risk Monitoring
						</Nav.Link>
						<Nav.Link className='mx-md-4' as={Link} href='/patient-summary' to='/patient-summary'>
							Patient Summary
						</Nav.Link>
					</Nav>
					<div className='d-flex align-items-center'>
						<h5 className='mr-4'>Dr. John Smith</h5>
						<Button variant='primary'>Log Out</Button>
					</div>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}

export default TopNavbar
