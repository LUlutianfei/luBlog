import React from 'react';
import Head from '../Header';
import Nav from '../Nav';
import List from './List';


class New extends React.Component{
	// constructor(props){
	// 	super(props);
	// }
	render(){
		return(
			<div>
				<Head/>
				<Nav/>
				<List/>
			</div>
		)
	}
}

export default New;