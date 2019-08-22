import React from 'react';
import './css/Nav.css';

class Nav extends React.Component{
	render(){
		return(
			<nav>
				<ul>
					<li><a href="./">主页</a></li>
					<li><a href="./new">新闻</a></li>
					<li><a href="./demo">作品</a></li>
					<li><a href="./mood">随笔</a></li>
					<li><a href="./image">图集</a></li>
				</ul>
			</nav>
		)
	}
}

export default Nav;