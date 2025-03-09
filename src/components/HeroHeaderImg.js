import React from 'react'

const HeroHeaderImg = ({image1}) => {

	const activeBlock = (e) => {
		let timeoutId;
		clearTimeout(timeoutId);
		e.target.className += " active";
		timeoutId = setTimeout(() => e.target.classList.remove("active"), 375);
	};
	
	return (
		<div id='HeroHeaderImg'>
			<div className="img">
				<div className={image1 ? "imgBal imgBal1" : "imgBal imgBal2"}></div>
			</div>
			<div className={image1 ? "img-overlay img-overlay1" : "img-overlay img-overlay2"}></div>
			<div className={image1 ? "img-blocks img-blocks1" : "img-blocks img-blocks2"}>
				{Array.from({ length: 475 }).map((_, index) => (
          <div key={index} className={`block`}
						onMouseOver={(e) => activeBlock(e)}
          />
        ))}
			</div>
		</div>
	)
}

export default HeroHeaderImg