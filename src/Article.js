import React from 'react';
import './css/Article.css'
import Sideshow from './Sideshow.js';
import Img from './img/logo.jpg';

class Article extends React.Component{
	render(){
		return(
			<article>
				<Sideshow />
				<div className="content" >
					<div className="content_left" >
						<div className="left_model" >
							<p className="left_model_title" ><span>About </span> Me</p>
							<p className="left_model_content" >大学之道，在明明德，在亲民，在止于至善。知止而后有定，
							定而后能静，静而后能安，安而后能虑，虑而后能得。物有本末，
							有终始。知所先后，则近道矣。古之欲明明德于天下者，
							先治其国；欲治其国者，先齐其家；欲齐其家者，先修其身；
							欲修其身者，先正其心；欲正其心者，先诚其意；欲诚其意者，
							先致其知。致知在格物。物格而后知至，知至而后意诚，
							意诚而后心正，心正而后身修，身修而后家齐，家齐而后国治，
							国治而后天下平。自天子以至于庶人，壹是皆以修身为本。
							其本乱，而末治者否矣。其所厚者薄，而其所薄者厚，未之有也。</p>
							<div className="left_model_more" >Read More</div>	
						</div>
						<div className="left_model" >
							<p className="left_model_title" ><span>About </span> Me</p>
							<p className="left_model_content" >大学之道，在明明德，在亲民，在止于至善。知止而后有定，
							定而后能静，静而后能安，安而后能虑，虑而后能得。物有本末，
							有终始。知所先后，则近道矣。古之欲明明德于天下者，
							先治其国；欲治其国者，先齐其家；欲齐其家者，先修其身；
							欲修其身者，先正其心；欲正其心者，先诚其意；欲诚其意者，
							先致其知。致知在格物。物格而后知至，知至而后意诚，
							意诚而后心正，心正而后身修，身修而后家齐，家齐而后国治，
							国治而后天下平。自天子以至于庶人，壹是皆以修身为本。
							其本乱，而末治者否矣。其所厚者薄，而其所薄者厚，未之有也。</p>
							<div className="left_model_more" >Read More</div>	
						</div>
					</div>
					<div className="content_right" >
						<div className="right_model" >
							<img src={Img} alt="文章图片" className="right_model_img" />
							<div className="right_model_text" >
								<p className="right_model_title" ><span>Example </span>Announcement</p>
								<p className="right_model_time" >October 16,2018</p>
								<p className="right_model_content">大学之道，在明明德，在亲民，在止于至善。知止而后有定，
								定而后能静，静而后能安，安而后能虑，虑而后能得。物有本末，
								有终始。知所先后，则近道矣。古之欲明明德于天下者，
								先治其国；欲治其国者，先齐其家；欲齐其家者，先修其身；
								欲修其身者，先正其心；欲正其心者，先诚其意；欲诚其意者，
								先致其知。致知在格物。物格而后知至，知至而后意诚，
								意诚而后心正，心正而后身修，身修而后家齐，家齐而后国治，
								国治而后天下平。自天子以至于庶人，壹是皆以修身为本。
								其本乱，而末治者否矣。其所厚者薄，而其所薄者厚，未之有也。</p>
							</div>
						</div>
						<div className="right_model" >
							<img src={Img} alt="文章图片" className="right_model_img" />
							<div className="right_model_text" >
								<p className="right_model_title" ><span>Example </span>Announcement</p>
								<p className="right_model_time" >October 16,2018</p>
								<p className="right_model_content">大学之道，在明明德，在亲民，在止于至善。知止而后有定，
								定而后能静，静而后能安，安而后能虑，虑而后能得。物有本末，
								有终始。知所先后，则近道矣。古之欲明明德于天下者，
								先治其国；欲治其国者，先齐其家；欲齐其家者，先修其身；
								欲修其身者，先正其心；欲正其心者，先诚其意；欲诚其意者，
								先致其知。致知在格物。物格而后知至，知至而后意诚，
								意诚而后心正，心正而后身修，身修而后家齐，家齐而后国治，
								国治而后天下平。自天子以至于庶人，壹是皆以修身为本。
								其本乱，而末治者否矣。其所厚者薄，而其所薄者厚，未之有也。</p>
							</div>
						</div>
						<div className="right_model" >
							<img src={Img} alt="文章图片" className="right_model_img" />
							<div className="right_model_text" >
								<p className="right_model_title" ><span>Example </span>Announcement</p>
								<p className="right_model_time" >October 16,2018</p>
								<p className="right_model_content">大学之道，在明明德，在亲民，在止于至善。知止而后有定，
								定而后能静，静而后能安，安而后能虑，虑而后能得。物有本末，
								有终始。知所先后，则近道矣。古之欲明明德于天下者，
								先治其国；欲治其国者，先齐其家；欲齐其家者，先修其身；
								欲修其身者，先正其心；欲正其心者，先诚其意；欲诚其意者，
								先致其知。致知在格物。物格而后知至，知至而后意诚，
								意诚而后心正，心正而后身修，身修而后家齐，家齐而后国治，
								国治而后天下平。自天子以至于庶人，壹是皆以修身为本。
								其本乱，而末治者否矣。其所厚者薄，而其所薄者厚，未之有也。</p>
							</div>
						</div>
					</div>
				</div>
			</article>
		)
	}
}

export default Article;