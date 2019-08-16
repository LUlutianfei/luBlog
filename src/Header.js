import React from 'react';
import './css/Header.css';
import Logo from './img/logo.jpg';
import Find from './img/find.svg';

class Header extends React.Component{
	render(){
		return(
			<header>
				<img src={Logo} className="logo" alt='logo' />
				<p className="title"><span className="name">lulu</span> Blog</p>
				<img className="find" src={Find} alt='搜索' />
				<input className="search" type='search'/>
			</header>
		)
	}
}

export default Header;