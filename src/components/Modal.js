import React from 'react';
import ReactDOM from 'react-dom'

import ProductSoda from './ProductSoda'
import ProductTopings from './ProductTopings'

import Products from '../utils/Products'
import closeIcon from '../assets/static/icons/circle-close.svg'

function Modal(props) {

	const productSelected = Products.find(product => product.id === props.productInModal);

	const addProductCart = () => {

		props.setProductInCart(prevValue => (
				[...props.productInCart, props.productInModal]
			)
		)

		props.setPriceInCheckout(prevValue => (
				props.priceInCheckout + productSelected.price
			)
		)

		props.setShowModal(false);
	}

	if (!props.showModal) {
		return null;
	}

	return ReactDOM.createPortal(

		<React.Fragment>
			<div className={`modal ${props.showModal ? "active" : ""}`}>
				<span className="modalOverlayClose" onClick={() => props.setShowModal(false)}></span>

				<section className="wrap">
					<img className="modal-close-button"
						src={closeIcon}
						alt="Close Button"
						onClick={() => props.setShowModal(false)} />
					<img className='modal-img-hero' src={ productSelected.img + '.png'} alt={productSelected.name}/>

					<div className="modal-container modal-container-desc">
						<h4>
							{productSelected.name}
						</h4>
						<p>
							{productSelected.description}
						</p>
					</div>

					<div className="modal-container modal-container-group">


						{productSelected.type !== 'burgers' && productSelected.id !== '9' ? <ProductSoda /> : ''}

						{productSelected.id !== '10' ? <ProductTopings /> : ''}


					</div>

					<div className="modal-container">
						<button className="button button-gren button-cart"
							onClick={addProductCart}>
								Add to my order
							<span className='symbol-money'>
								{productSelected.price}
							</span>
						</button>
					</div>
				</section>
			</div>
		</React.Fragment>,
		document.getElementById('modal')
	)
}

export default Modal
