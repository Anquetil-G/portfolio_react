import React from "react";

const Contact = () => {
  return (
    <div id="Contact">
      <div className="contacts">
        <h3 className="reveal-text reveal-text-contact email">
          1anquetil.gabin@gmail.com
        </h3>
        <h3 className="reveal-text reveal-text-contact num">07 49 55 08 13</h3>
        <h3 className="reveal-text reveal-text-adress adress">
          St-Etienne du Vauvray, 5 allés des écureuils
        </h3>
      </div>
      <div id="contactCubeContainer" className="Cube2">
				<div className="cube">
					<div className="face front"></div>
					<div className="face back"></div>
					<div className="face right"></div>
					<div className="face left"></div>
					<div className="face top"></div>
					<div className="face bottom"></div>
				</div>
      </div>
    </div>
  );
};

export default Contact;
