import React from 'react';
import Head from '../Header';
import Nav from '../Nav';
import Item from './Item.js';

class Demo extends React.Component{
	// constructor(props){
	// 	super(props);
	// }

	render(){
		return(
			<div>
				<Head/>
				<Nav/>
				<Item/>
			</div>
		)
	}
}

export default Demo;