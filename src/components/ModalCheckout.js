import React from 'react';
import ReactDOM from 'react-dom'
import styled from 'styled-components';

import ProductSoda from './ProductSoda'
import ProductTopings from './ProductTopings'

import Products from '../utils/Products'
import closeIcon from '../assets/static/icons/circle-close.svg'

function ModalCheckOut(props) {

	const productInCart = Products.filter(product => {
		return props.productInCart.indexOf(product.id) > -1
	});

	function removeInCartCheckout(id) {
		const deleteProductCheckOut = Products.find(product => product.id === id)

		props.setPriceInCheckout(prevValue => (
				props.priceInCheckout - deleteProductCheckOut.price
			)
		)
		const currentProductInCart = props.productInCart.filter(
			item => item !== id
		)

		props.setProductInCart(prevValue => (currentProductInCart)
		)

	}

	function closeCheckoutModal(){
		props.setShowModalCheckout(false);
	}
	function payCheckout() {
		props.setShowModalCheckout(false);
		props.setProductInCart('');
		props.setPriceInCheckout(0);
	}

	if (!props.showModalCheckout) {
		return null;
	}

	return ReactDOM.createPortal(

		<React.Fragment>
			<div className={`modal start ${props.showModalCheckout ? "active" : ""}`}>
				<span className="modalOverlayClose"
					onClick={closeCheckoutModal}>

				</span>

				<section className="wrap">
					<img className="modal-close-button"
						src={closeIcon}
						alt="Close Button"
						onClick={closeCheckoutModal} />
					{
						productInCart
							.map(product => {
								return (
						<div key={product.id}>

							<ModalContainerCheckout className="modalCheckoutImage" >
								<img src={product.img + '.png'} alt={product.name} />
								<div>
									<h4>
										{product.name}
									</h4>
									<p>
										{product.description}
									</p>
								</div>
								<ModalContainerCheckoutButtons>
									<ProductCardPrice className="button symbol-money">
										{product.price}
									</ProductCardPrice>
									<button className='button button-red button-cart'
										onClick={() => removeInCartCheckout(product.id)}>
										Remove
									</button>
								</ModalContainerCheckoutButtons>
							</ModalContainerCheckout>
							<div className="modal-container modal-container-desc modal-container-group" >
								{product.type !== 'burgers' && product.id !== '9' ? <ProductSoda /> : ''}

								{product.id !== '10' ? <ProductTopings /> : ''}
							</div>
						</div>

							)
						})
					}

					<div className="modal-container">
						<button className="button button-gren button-cart"
							onClick={payCheckout}
						>
								Finalize order
							<span className='symbol-money'>
								{Number.parseFloat(props.priceInCheckout).toFixed(2)}
							</span>
						</button>
					</div>
				</section>
			</div>
		</React.Fragment>,
		document.getElementById('modal')
	)
}

export default ModalCheckOut

const ModalContainerCheckout = styled.div`
	background-color: #fff;
	border-bottom: 1px solid rgba(0,0,0,.1);
	border-radius: 10px 10px 0 0;
	column-gap: 1rem;
	display: grid;
	grid-template-columns: 150px 1fr 180px;
	grid-template-rows: 115px;
	margin-bottom: 1rem;
	padding-right: 1rem;
	text-align: left;
	img{
		object-fit: cover;
		height: 100%;
		border-radius: 10px 0 0 0;
		@media (max-width: 740px) {
			grid-area: a;
		}
	}
	div{
		padding-top: 1rem;
	}
	@media (max-width: 740px) {
		grid-template-columns: 100px 1fr ;
		grid-template-rows: auto;
		grid-template-areas: "a . " "a . ";
	}
`
const ModalContainerCheckoutButtons = styled.div`
	display: grid;
	grid-template-columns: 60px 1fr;
	grid-template-rows: 45px;
	align-items: start;
	gap: .5rem;
	.button{
		height: 100%;
	}
	@media (max-width: 740px) {
		padding-top:0 !important;
		padding-bottom:1rem;
	}
`

const ProductCardPrice = styled.span`
	background-color:#EFF0F2;
	color:#000;
	justify-content: center;
	cursor: auto ;
	@media (max-width: 531px) {
		margin-bottom: 1rem;
	}
`
