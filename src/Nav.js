import React from 'react';
import './css/Nav.css';

class Nav extends React.Component{
	render(){
		return(
			<nav>
				<ul>
					<li><a href="./App.js">主页</a></li>
					<li><a href="./App.js">文章</a></li>
					<li><a href="./App.js">作品</a></li>
					<li><a href="./App.js">随笔</a></li>
					<li><a href="./App.js">图集</a></li>
				</ul>
			</nav>
		)
	}
}

export default Nav;