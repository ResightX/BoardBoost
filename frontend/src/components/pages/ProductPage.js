import { useParams } from 'react-router-dom';
import { useEffect, useReducer } from 'react';
import axios from 'axios';

const reducer = (state, action) => {
	switch(action.type){
		case 'FETCH_REQUEST':
			return {...state, loading: true};
		case 'FETCH_SUCCESS':
			return {...state, product: action.payload, loading: false};
		case 'FETCH_FAIL':
			return {...state, loading: false, error: action.payload};
		default:
			return state;
	}
}

export default function ProductPage() {
	const params = useParams();
	const { slug } = params;
	const [{loading, error, product}, dispatch] = useReducer(reducer, {product: [], loading: true, error: "",});

	useEffect(() => {
		const fetchData = async () => {
			dispatch({type: 'FETCH_REQUEST', payload: "loading"});
			try {
				const result = await axios.get(`/api/products/slug/${slug}`);
				dispatch({type: 'FETCH_SUCCESS', payload: result.data})
			} catch (err) {
				dispatch({type: 'FETCH_FAIL', payload: err.message});
			}
		};
		fetchData();
	}, [slug]);
	return (
		loading ? <div>Loading...</div>
		: error ? <div>{error}</div> 
		: <div>{product.name}</div>
	);
}
