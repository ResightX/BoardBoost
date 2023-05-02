import './ArticlePreview.css';
import bg from './articles/article1bg.jpg';

export default function ArticlePreview(title, description){
	return (
		<div className="artprev-wrapper">
			<div className="artprev-bgWrapper">
				<img src={bg} alt="Article BG" className="artprev-image" />
			</div>
			<h2>{title}</h2>
			<p>{description}</p>
		</div>
	);
};
