import React from 'react'
import styled from 'styled-components'

function ProductSoda() {
	return (
		<WrapSoda>
			<ColumnSoda className='column'>
				<TitleProductOptions>
					Size
				</TitleProductOptions>

				<label className='select-option' htmlFor="small">
					<input type="radio" name="size" id="small" />
					<div className="check-circle-icon"></div>
					Small
				</label>

				<label className='select-option' htmlFor="big">
					<input type="radio" name="size" id="big" />
					<div className="check-circle-icon"></div>
					Big (+$2.00)
				</label>
			</ColumnSoda>

			<ColumnSoda>
				<TitleProductOptions>
					Soda flavour
				</TitleProductOptions>

				<label className='select-option' htmlFor="cola">
					<input type="radio" name="soda" id="cola" />
					<div className="check-circle-icon"></div>
					Cola
				</label>
				<label className='select-option' htmlFor="lemon">
					<input type="radio" name="soda" id="lemon" />
					<div className="check-circle-icon"></div>
					Lemon
				</label>
				<label className='select-option' htmlFor="grapefruit">
					<input type="radio" name="soda" id="grapefruit" />
					<div className="check-circle-icon"></div>
					Grapefruit
				</label>
				<label className='select-option' htmlFor="water">
					<input type="radio" name="soda" id="water" />
					<div className="check-circle-icon"></div>
					Water
				</label>
				<label className='select-option' htmlFor="orange">
					<input type="radio" name="soda" id="orange" />
					<div className="check-circle-icon"></div>
					Orange
				</label>
			</ColumnSoda>

		</WrapSoda>
	)
}

export default ProductSoda

const WrapSoda = styled.section`
	display: grid;
	column-gap: 1rem;
	grid-template-columns: .5fr 1fr;
	margin-bottom: 2rem;
	@media (max-width: 740px) {
		grid-template-columns: 1fr;
		row-gap: 1rem;
	}
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