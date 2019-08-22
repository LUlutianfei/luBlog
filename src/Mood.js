import React from 'react';
import './css/Footer.css'
import QQ from './img/qq.svg';
import WeChat from './img/wechat.svg';
import WeiBo from './img/weibo.svg';
import QQImg from './img/QQ.jpg';
import WeChatImg from './img/WeChat.png';
import WeiBoImg from './img/WeiBo.png';


class Mood extends React.Component{
	constructor(props){
		super(props);
		this.showQQ = this.showQQ.bind(this);
		this.showWeChat = this.showWeChat.bind(this);
		this.showWeiBo = this.showWeiBo.bind(this);
		this.hideQQ = this.hideQQ.bind(this);
		this.hideWeChat = this.hideWeChat.bind(this);
		this.hideWeiBo = this.hideWeiBo.bind(this);
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
	showWeChat(){
		this.setState({
			wechat:true
		})
	}
	showWeiBo(){
		this.setState({
			weibo:true
		})
	}
	hideQQ(){
		this.setState({
			qq:false
		})
	}
	hideWeChat(){
		this.setState({
			wechat:false
		})
	}
	hideWeiBo(){
		this.setState({
			weibo:false
		})
	}
	render(){
		return(
			<footer>
				<div className="code" >
					{this.state.qq?(<img className="qr QQ_QR" src={QQImg} alt="qq二维码"/>):null}
					{this.state.wechat?(<img className="qr WeChat_QR" src={WeChatImg} alt="微信二维码"/>):null}
					{this.state.weibo?(<img className="qr WeiBo_QR" src={WeiBoImg} alt="微博二维码"/>):null}
				</div>
				<div className="connect" >
					<img className="icon"  onMouseOver={this.showQQ} onMouseOut={this.hideQQ}  alt="qq" src={QQ} />
					<img className="icon"  onMouseOver={this.showWeChat} onMouseOut={this.hideWeChat}  alt="wechat" src={WeChat} />
					<img className="icon"  onMouseOver={this.showWeiBo} onMouseOut={this.hideWeiBo}  alt="weibo" src={WeiBo}/>
				</div>
			</footer>
		)
	}
}

export default Mood;