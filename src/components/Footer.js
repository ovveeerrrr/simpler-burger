import React, { Component } from 'react'
import styled from 'styled-components'

import Logo from '../assets/static/simpler-burger.svg'

export class Footer extends Component {
	render() {
		return (
			<ContainerFooter className='layout'>
				<img src={Logo} alt="Simpler Burger" />
			</ContainerFooter>
		)
	}
}

export default Footer

const ContainerFooter = styled.footer`
	background-color: #000000;
	text-align: center;
	margin-top: 4rem;
	padding-top: 38px;
	padding-bottom: 38px;
	img{
		max-width: 156px;
		@media (max-width: 531px) {
			transform: scale(1.3);
		}
	}
`