import React from 'react';
import './css/Article.css'
import Sideshow from './Sideshow.js';

class Article extends React.Component{
	render(){
		return(
			<article>
				<Sideshow />
				<div className="content" >
					<div className="content_left" ></div>
					<div className="content_right" ></div>
				</div>
			</article>
		)
	}
}

export default Article;