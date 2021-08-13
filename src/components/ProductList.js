import React from 'react'
import styled from 'styled-components'

import Products from '../utils/Products'
import ProductCard from './ProductCard'


function ProductList(props) {
	return (
		<section className={`layout ${props.layoutType}`}>
			<article className="wrap">
				<h3 className="subTitle-divider">
					{props.subTitleProductList}
				</h3>
				<ProductTitle>
					{props.titleProductList}
					<span>
						{props.titleProductList}
					</span>
				</ProductTitle>

				<ProductCardWrap>
					{
						Products
							.filter(product => product.type === props.type)
							.map(product => {
							return (
								<ProductCard
									key={product.id}
									name={ product.name}
									description={ product.description}
									price={product.price }
									img={product.img}
									id={product.id}
									type={props.type}
									showModal={props.showModal}
									setShowModal={props.setShowModal}
									productInModal={props.productInModal}
									setProductInModal={props.setProductInModal}
								/>
							)
						})
					}
				</ProductCardWrap>

			</article>
		</section>
	)
}

export default ProductList

const ProductTitle = styled.h2`
	position: relative;
	z-index:1;
	text-shadow:-1px -1px 0 #4C3260;
	span{
		position: absolute;
		left: 50%;
		margin: 1px 0 0 5px;
		font-family: 'Cocogoose Pro Block';
		transform: translateX(-50%);
		color: #4C3260;
		z-index:-1;
		font-size:1.05em;
	}
`

const ProductCardWrap = styled.div`
	display: grid;
	margin-top: 2.3em;
	grid-row-gap: 1.3rem;
	grid-column-gap: 2.4rem;
	grid-auto-rows: auto;
	grid-template-columns: repeat(auto-fill, minmax(min(100%, 14rem), 1fr));
	@media (max-width: 1083px) {
		grid-column-gap: 1.3rem;
	}
`