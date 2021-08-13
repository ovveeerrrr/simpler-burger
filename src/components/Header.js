import React from 'react'
import styled from 'styled-components'

import ModalCheckOut from '../components/ModalCheckout'

import Logo from '../assets/static/simpler-burger.svg'
import HeaderHeroBg from '../assets/static/hero.png'

function Header(props) {

		function openModal() {
			props.setShowModalCheckout(true);
		}

		return (
			<React.Fragment>
				<HeaderMenu>
					<img src={Logo} alt="Simpler Burger" />
					<nav>
						<button className="button button-red button-bag"
							onClick={openModal}
						>
							View order
							<span className='symbol-money'>
								{
									Number.parseFloat(props.priceInCheckout).toFixed(2)
								}
							</span>
						</button>
					</nav>
				</HeaderMenu>

				<Hero className="layout">

				</Hero>

				<ModalCheckOut
					showModalCheckout={props.showModalCheckout}
					setShowModalCheckout={props.setShowModalCheckout}
					productInCart={props.productInCart}
					setProductInCart={props.setProductInCart}
					priceInCheckout={props.priceInCheckout}
					setPriceInCheckout={props.setPriceInCheckout}
				/>

			</React.Fragment>
		)
}

export default Header

const HeaderMenu = styled.header`
	align-items: flex-start;
	display: flex;
	justify-content: space-between;
	left: 50%;
	margin: 0 auto;
	max-width:1200px;
	position: absolute;
	transform: translateX(-50%);
	width: 100%;
	z-index:3;
	img{
		max-width: 178px;
		@media (max-width: 531px) {
			height: 61px;
			object-fit: contain;
			max-width: 50%;
			transform: scale(1.3);
		}
	}
	nav{
		background-color:#ffffff;
		padding:1rem;
		border-radius: 0 0 10px 10px;
		max-width: 368px;
		width: 50%;
		align-items: flex-end;

		@media (max-width: 531px) {
			padding:.5rem;
			border-radius: 0 0 0 10px ;
		}
	}
	.button-red{
		overflow: hidden;
		&::after {
		content: 'View order';
		position: absolute;
		width: 0%;
		height: 100%;
		background-color: #5AD88C;
		top: 0;
		left: 0;
		transition: all .7s ease;
		transition-delay: .7s color;
		border-radius: 5px;
		opacity: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		color: $black;
	}

	&:hover {

		&::after {
			width: 100%;
			opacity: 1;
			color: $white;
		}

		&::before {
			animation-name: cartButton;
			animation-delay: 1s;
			animation-duration: 3s;
			animation-iteration-count: infinite;
		}
	}
	}
`

const Hero = styled.figure`
	background:
		linear-gradient(180deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 73.31%),
		url(${HeaderHeroBg});
	background-size: cover;
	background-position: center bottom;
	border-radius: 0 0 40px 40px;
	display: block;
	height: 384px;
	z-index:2;
	@media (max-width: 777px) {
		height: 270px;
	}
`