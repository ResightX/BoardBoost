import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import HomePage from './components/pages/HomePage.js';
import ProductPage from './components/pages/ProductPage.js';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { LinkContainer } from 'react-router-bootstrap';
import { useRef } from 'react';
import logo from './logo2.svg';
import BlogPage from './components/pages/BlogPage.js';
import SignUp from './components/pages/SignUp.js';

function App() {
  return (
	<BrowserRouter>
    <div>
      <header>
		<Navbar bg="light" variant="light">
		  <Container>
			<LinkContainer to="/">
				<Navbar.Brand><img src={logo} className="logo" /></Navbar.Brand>
			</LinkContainer>

			<Nav className="me-auto">
				<LinkContainer to="/">
					<Nav.Link className="shop">Shop</Nav.Link>
				</LinkContainer>
				<LinkContainer to="/blog">
					<Nav.Link className="blog">Blog</Nav.Link>
				</LinkContainer>
			</Nav>
			<Nav className="me-right">
				<LinkContainer to="/cart">
						<Nav.Link><FontAwesomeIcon className="cartIcon" icon={faCartShopping}/></Nav.Link>
				</LinkContainer>
				<LinkContainer to="/signup">
					<Nav.Link className="text-center">Sign Up</Nav.Link>
				</LinkContainer>
			</Nav>
		  </Container>
		</Navbar>
      </header>
	  <main>
		  <Container>
			  <Routes>
				<Route path="/product/:slug" element={<ProductPage />} />
				<Route path="/blog" element={<BlogPage />} />
				<Route path="/" element={<HomePage />} />
				<Route path="/signup" element={<SignUp className="d-flex align-items-center" />} />
			  </Routes>
		  </Container>
	  </main>
    </div>
	</BrowserRouter>
  );
}

export default App;
