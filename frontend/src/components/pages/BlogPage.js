import { useEffect, useState, useReducer } from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './ArticlePreview.css';
import { List } from 'react-content-loader'

const reducer = (state, action) => {
	switch(action.type){
		case 'FETCH_REQUEST':
			return {...state, loading: true};
		case 'FETCH_SUCCESS':
			return {...state, articles: action.payload, loading: false};
		case 'FETCH_FAIL':
			return {...state, loading: false, error: action.payload};
		default:
			return state;
	}
}

export default function BlogPage(){
	const [{loading, error, articles}, dispatch] = useReducer(reducer, {articles: [], loading: true, error: "",});

	useEffect(() => {
		const fetchData = async () => {
			dispatch({type: 'FETCH_REQUEST', payload: "loading"});
			try {
				const result = await axios.get('/api/articles');
				dispatch({type: 'FETCH_SUCCESS', payload: result.data})
			} catch (err) {
				dispatch({type: 'FETCH_FAIL', payload: err.message});
			}
		};
		fetchData();
	}, []);

	return <div>
		<h1 className="pageHeadline"><strong>Articles</strong></h1>
		{
			loading ? (<List />) : error ? (<div>{error}</div>) : (
				articles.map(article => (
					<div className="article" key={article.slug}>
						<div className="artprev-wrapper">
							<div className="artprev-bgWrapper">
								<img src={`http://localhost:4000/images/articles/${article.img}`} alt="Article BG" className="artprev-image" />
							</div>
							<h2>{article.title}</h2>
							<p>{article.description}</p>
						</div>
								</div>
							))

			)
		}
		</div>
};
