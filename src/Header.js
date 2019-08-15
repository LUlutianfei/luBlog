import React from 'react';
import './css/Header.css'

class Header extends React.Component{
	render(){
		return(
			<header>
				<img src='' alt='logo' />
				<span>lulu Blog</span>
				<input type='search'/>
			</header>
		)
	}
}

export default Header;