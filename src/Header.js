import React from 'react';
import './css/Header.css';
import Logo from './img/logo.jpg';
import Find from './img/find.svg';

class Header extends React.Component{
	render(){
		return(
			<header>
				<img src={Logo} className="header_logo" alt='logo' />
				<p className="header_title"><span className="header_name">lulu</span> Blog</p>
				<img className="header_find" src={Find} alt='搜索' />
				<input className="header_search" type='search'/>
			</header>
		)
	}
}

export default Header;