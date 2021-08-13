import React from 'react';
import styled from 'styled-components';

function ProductCard(props) {

	let media;
	if (window.matchMedia("(min-width: 531px)").matches) {
		media = '-square'
	}

	function openModal() {
		props.setShowModal(true);
		props.setProductInModal(props.id)
	}


	return (
		<ProductCardItem>
			<ProductCardImage src={props.img + media +'.png'} alt={props.name} />
			<ProductCardDescription>
				<h4>
					{props.name}
				</h4>
				<p>
					{props.description}
				</p>
				<ProductCardPrice className="button symbol-money">
					{props.price}
				</ProductCardPrice>

				<button className="button button-green button-cart"
					onClick={openModal} >
					Select
				</button>
			</ProductCardDescription>
		</ProductCardItem>
	)
}

export default ProductCard

const ProductCardItem = styled.section`
	background-color: #ffffff;
	width: 100%;
	height: auto;
	border-radius: 10px;
	box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.04),
		0px 4px 25px rgba(0, 0, 0, 0.05),
		0px 3px 6px rgba(0, 0, 0, 0.04);
	overflow: hidden;
	text-align: left;
	transition: all .5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
	&:hover{
		transform: translateY(-10px);
	}
	@media (max-width: 531px) {
		display: flex;
	}
`

const ProductCardImage = styled.img`
	height: 128px;
	object-fit: cover;
	@media (max-width: 531px) {
		max-width: 40%;
		height: 170px;
	}
`

const ProductCardDescription = styled.div`
	padding: 1rem;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	width: 100%;
	@media (max-width: 531px) {
		align-items: flex-end;
	}
	h4, p{
		width: 100%;
	}
	h4{
		@media (max-width: 777px) {
			min-height: 37px;

		}
	}
	p{
		@media (max-width: 777px) {
			display: none;
		}
	}
	.button{
		width: calc(50% - 10px);
		margin: 0;
		padding-top: 5px;
		padding-bottom: 5px;
		@media (max-width: 531px) {
			width: 100%;
		}
	}
	.button-cart{
		transition: all .3s cubic-bezier(0.785, 0.135, 0.15, 0.86);
		overflow: hidden;
		&:hover{
			transform : scale(1.1) ;
			&::before{
				animation-name: cartButton;
				animation-delay: 1s;
				animation-duration: 3s;
				animation-iteration-count: infinite;
			}
		}
	}
`

const ProductCardPrice = styled.div`
	background-color:#EFF0F2;
	color:#000;
	justify-content: center;
	cursor: auto ;
	@media (max-width: 531px) {
		margin-bottom: 1rem;
	}
`
