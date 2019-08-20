import React from 'react';
import './css/Footer.css'
import QQ from './img/qq.svg';
import WeChat from './img/wechat.svg';
import WeiBo from './img/weibo.svg';
import Er from './img/er.svg';

class Footer extends React.Component{
	constructor(props){
		super(props);
		this.showQQ = this.showQQ.bind(this);
		this.state = {
			qq:false,
			wechat:false,
			weibo:false
		};
	}
	showQQ(){
		this.setState({
			qq:true
		})
	}
	render(){
		return(
			<footer>
				<div className="connect" >
					<img onMouseOver={this.showQQ}  alt="qq" src={QQ} />
					{this.state.qq?(<img src={Er} alt="qq二维码"/>):null}
					<img onMouseOver={this.showWeChat}  alt="wechat" src={WeChat} />
					<img onMouseOver={this.showWeibo}  alt="weibo" src={WeiBo}/>
				</div>
			</footer>
		)
	}
}

export default Footer;