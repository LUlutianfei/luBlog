import React from 'react';
import './css/Article.css'
import Sideshow from './Sideshow.js'

class Article extends React.Component{
	render(){
		return(
			<article>
				<Sideshow />
			</article>
		)
	}
}

export default Article;