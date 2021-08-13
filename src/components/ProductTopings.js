import React from 'react'
import styled from 'styled-components'

function ProductSoda() {
	return (
		<WrapSoda>

			<ColumnSoda>
				<TitleProductOptions>
					Toppings
				</TitleProductOptions>

				<label className='select-option' htmlFor="mayonnaise">
					<input type="checkbox" name="topping" id="mayonnaise" />
					<div className="check-square-icon"></div>
					Mayonnaise
				</label>
				<label className='select-option' htmlFor="ketchup">
					<input type="checkbox" name="topping" id="ketchup" />
					<div className="check-square-icon"></div>
					Ketchup
				</label>
				<label className='select-option' htmlFor="lettuce">
					<input type="checkbox" name="topping" id="lettuce" />
					<div className="check-square-icon"></div>
					Lettuce
				</label>
				<label className='select-option' htmlFor="tomato">
					<input type="checkbox" name="topping" id="tomato" />
					<div className="check-square-icon"></div>
					Tomato
				</label>
				<label className='select-option' htmlFor="pickles">
					<input type="checkbox" name="topping" id="pickles" />
					<div className="check-square-icon"></div>
					Pickles
				</label>
				<label className='select-option' htmlFor="onion">
					<input type="checkbox" name="topping" id="onion" />
					<div className="check-square-icon"></div>
					Onion
				</label>
				<label className='select-option' htmlFor="bread">
					<input type="checkbox" name="topping" id="bread" />
					<div className="check-square-icon"></div>
					Bread
				</label>
			</ColumnSoda>

		</WrapSoda>
	)
}

export default ProductSoda

const WrapSoda = styled.section`
	display: grid;
	column-gap: 1rem;
	grid-template-columns: 1fr;
	margin-bottom: 2rem;
`
const ColumnSoda = styled.div`
	display: flex;
	gap: 13px 25px;
	flex-wrap: wrap;
	align-items: flex-start;
`

const TitleProductOptions = styled.h4 `
	border-bottom: 1px solid rgba(0,0,0,.12);
	text-align: left;
	margin-bottom: 0;
	padding-bottom: .5rem;
	width: 100%;
`