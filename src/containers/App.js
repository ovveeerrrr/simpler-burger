import React, {useState} from 'react';
import '../assets/styles/App.scss';
import Header from '../components/Header';
import ProductList from '../components/ProductList';
import Modal from '../components/Modal'
import Footer from '../components/Footer';

const App = () => {

	const [showModal, setShowModal] = useState(false);
	const [showModalCheckout, setShowModalCheckout] = useState(false);
	const [productInModal, setProductInModal] = useState();
	const [productInCart, setProductInCart] = useState([]);
	const [priceInCheckout, setPriceInCheckout] = useState(0);

	return (
		<div className="App">
			<Header
				showModalCheckout={showModalCheckout}
				setShowModalCheckout={setShowModalCheckout}
				priceInCheckout={priceInCheckout}
				setPriceInCheckout={setPriceInCheckout}
				productInCart={productInCart}
				setProductInCart={setProductInCart}
			/>

			<ProductList
				titleProductList='Combo'
				subTitleProductList='Complete for you'
				type='combo'
				layoutType='layout-yellow layout-background'
				showModal={showModal}
				setShowModal={setShowModal}
				productInModal={productInModal}
				setProductInModal={setProductInModal}
			/>

			<ProductList
				titleProductList='Burgers'
				subTitleProductList='Delicious'
				type='burgers'
				layoutType='layout-background'
				showModal={showModal}
				setShowModal={setShowModal}
				productInModal={productInModal}
				setProductInModal={setProductInModal}
			/>

			<ProductList
				titleProductList='Other'
				subTitleProductList='More?'
				type='other'
				showModal={showModal}
				setShowModal={setShowModal}
				productInModal={productInModal}
				setProductInModal={setProductInModal}
			/>

			<Footer />

			<Modal
				showModal={showModal}
				setShowModal={setShowModal}
				productInModal={productInModal}
				setProductInModal={setProductInModal}
				productInCart={productInCart}
				setProductInCart={setProductInCart}
				priceInCheckout={priceInCheckout}
				setPriceInCheckout={setPriceInCheckout}
			/>

		</div>
	);
}

export default App;
