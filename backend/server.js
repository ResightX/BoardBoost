import express from 'express';
import prodData from './products.js';
import articleData from './articles.js';

const port = 4000;

const app = express();
app.use(express.static('./public'));

app.get('/api/products', (request, response) => {
	response.send(prodData.products);
});

app.get('/api/products/slug/:slug', (request, response) => {
	const product = prodData.products.find(x => x.slug === request.params.slug);
	if (product){
		response.send(product);
	}
	else {
		response.status(404).send({message: "Item not found."});
	}
});

app.get('/api/articles', (request, response) => {
	response.send(articleData.articles);
});

app.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}`);
})
