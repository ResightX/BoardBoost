import { useEffect, useState, useReducer } from 'react';
//import data from '../../data.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap';
import ShopSearchBar from '../ShopSearchBar.js';
import { List } from 'react-content-loader';

const reducer = (state, action) => {
	switch(action.type){
		case 'FETCH_REQUEST':
			return {...state, loading: true};
		case 'FETCH_SUCCESS':
			return {...state, products: action.payload, loading: false};
		case 'FETCH_FAIL':
			return {...state, loading: false, error: action.payload};
		default:
			return state;
	}
}

export default function HomePage (){
	const [{loading, error, products}, dispatch] = useReducer(reducer, {products: [], loading: true, error: "",});

	useEffect(() => {
		const fetchData = async () => {
			dispatch({type: 'FETCH_REQUEST', payload: "loading"});
			try {
				const result = await axios.get('/api/products');
				dispatch({type: 'FETCH_SUCCESS', payload: result.data})
			} catch (err) {
				dispatch({type: 'FETCH_FAIL', payload: err.message});
			}
		};
		fetchData();
	}, []);

	return <div>
		  <h1 className="pageHeadline"><strong>Shop</strong></h1>
		  <div className="products">
			  {
				  loading ? (<List />) : error ? (<div>{error}</div>) : (
				  products.map(product => (
					  <div className="product" key={product.slug}>
							  <Link to={`/product/${product.slug}`}>
							  <div className="prodImg">
								<img src={`http://localhost:4000/images/${product.image}`} alt={product.name} />
							  </div>
								</Link>
							  <div className="product-info">
							  <Link to={`/product/${product.slug}`}>
								<p>{product.name}</p>
								</Link>

							
							<p><strong>₽{product.price}</strong></p>

								<p></p>
								<button className="addToCartBtn"><strong>Add to cart</strong><FontAwesomeIcon className="cartIcon" icon={faCartShopping}/></button>
					  </div>

					  </div>
				  ))
				  )
			  }
		 </div>
		</div>
}
