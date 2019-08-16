import React from 'react';
import './css/Nav.css';

class Nav extends React.Component{
	render(){
		return(
			<nav>
				<ul>
					<li><a href="./">主页</a></li>
					<li><a href="./">文章</a></li>
					<li><a href="./">作品</a></li>
					<li><a href="./">随笔</a></li>
					<li><a href="./">图集</a></li>
				</ul>
			</nav>
		)
	}
}

export default Nav;