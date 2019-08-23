import React from 'react';
import './css/List.css';
import Six from './img/6.svg';

class List extends React.Component{
	render(){
		return(
			<div className="list_newItem" >
				<img src={Six} alt="图标" className="list_six" />
				<p className="list_title" >内蒙古自治区第十一届大学生运动会在我校开幕</p>
				<p className="list_content" >本站讯（记者于春波）为进一步做好我校研究生
				支教团支教工作，8月15日，校团委在北校区主楼320室举办内蒙古大学第六届
				研支团经验分享会暨第七届研支团出征仪式。校党委副书记李秀良参加了会议。
				会议由校团委书记阿古拉主持。会议现场第六届研支团成员韩习和梁...</p>
				<p className="list_time">2019-08-23</p>
			</div>
		)
	}
}
export default List;