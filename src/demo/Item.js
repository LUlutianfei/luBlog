import React from 'react';
import Six from './img/6.svg';
import './css/Item.css';

class Item extends React.Component{
	render(){
		return(
			<div className="item_item" >
				<img src={Six} alt="图标" className="item_six" />
				<a className="item_link" href="/" >canvas时钟</a>
			</div>
		)
	}
}

export default Item;