import React from 'react'

const CardAboutMe = () => {
	
	return (
		<div id="AboutMe">
			<div className="frame">
				<p className="reveal-text reveal-text-about">Currently in the first year at (school) high school in (city), I am looking for an internship from (date). This would allow me to have a second professional experience in the world of web development, the first being in my secondary school internship at (entreprise). I could make myself useful within your company, I already have skills in the web creation and I am convinced that this internship will expand my knowledge in many areas. I look forward to meeting you soon to share my motivation with you. In the meantime, best regards.</p>
				<div className="skills">
					<h2 className="reveal-text reveal-text-about">Compétences</h2>
					<ul>
						<li><p className="reveal-text reveal-text-about">HTML/CSS</p></li>
						<li><p className="reveal-text reveal-text-about">Javascript</p></li>
						<li><p className="reveal-text reveal-text-about">React</p></li>
						<li><p className="reveal-text reveal-text-about">NodeJS</p></li>
						<li><p className="reveal-text reveal-text-about">MongoDB</p></li>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default CardAboutMe