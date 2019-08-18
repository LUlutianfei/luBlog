import React from 'react';
import './css/Sideshow.css'
import Img1 from './img/sideshow1.jpg';
import Img2 from './img/sideshow2.jpg';
import Img3 from './img/sideshow3.jpg';
import Img4 from './img/sideshow4.jpg';

class Sideshow extends React.Component{
	constructor(props){
		super(props);
		this.state = {img:Img1,mouse:false};
		this.change = this.change.bind(this);
		this.mouseover = this.mouseover.bind(this);
		this.mouseout = this.mouseout.bind(this);
		this.imgs=[Img1,Img2,Img3,Img4];
		this.i=0;
	}
	componentDidMount(){
		this.timerID = setInterval(
			()=>this.change(),
			5000
		);
	}
	componentWillUnmount(){
		clearInterval(this.timerID);
	}
	change(num){
		if(num+1){
			this.i=num;
			clearInterval(this.timerID);
			this.timerID = setInterval(
				()=>this.change(),
				5000
			);
		}else{
			this.i=this.i>2?0:this.i+1;
		}
		this.setState({
			img:this.imgs[this.i]
		})
		
	}	
	mouseover(){
		this.setState({
			mouse:true
		})
	}
	mouseout(){
		this.setState({
			mouse:false
		})
	}
	
	render(){
		const sectionStyle = {
  			width: document.body.clientWidth>=1000?'100%':'1000px',
			height: '340px',
			backgroundImage: `url(${this.state.img})`,
			backgroundSize:'100% 100%',
			transition: '2s all',
		};
		let smallImgs = this.imgs.map((val,i)=>(
			<img key={i} onMouseOver={this.change.bind(this,i)} style={{display:this.state.mouse?'inline':'none',boxShadow:this.i==i?'5px 5px 10px 2px #666':'none'}}  className="smallImg" alt="缩略图" src={val} />
		));
		return(
			<div   style={sectionStyle} >
				<div onMouseOver={this.mouseover} onMouseOut={this.mouseout} className="sideShow">
					{/*<div className="left" ></div>*/}
					<img className="sideImg" alt="轮播图" src={this.state.img} />
					{/*<div className="right" ></div>*/}
					{smallImgs}
				</div>

			</div>
		)
	}
}

export default Sideshow;