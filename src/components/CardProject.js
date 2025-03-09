import React from "react";

const CardProject = ({ title, url1, url2, text }) => {

  const transitionText = (targetString, element, time) => {
    const alphabet =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ(())@@##&&++";
    const originalText = element.textContent;
    const maxLength = Math.max(originalText.length, targetString.length);
    const targetText = targetString.padEnd(maxLength, " ");
    const intervalTime = 85;
    const totalSteps = time / intervalTime;
    const stepsRemaining = Array.from({ length: maxLength }, () =>
      Math.floor(Math.random() * totalSteps)
    );
    const interval = setInterval(() => {
      let newText = "";
      for (let i = 0; i < maxLength; i++) {
        if (stepsRemaining[i] > 0) {
          newText += alphabet[Math.floor(Math.random() * alphabet.length)];
          stepsRemaining[i]--;
        } else {
          newText += targetText[i];
        }
      }
      element.textContent = newText;
      if (stepsRemaining.every((steps) => steps <= 0)) {
        clearInterval(interval);
        element.textContent = targetString;
      }
    }, intervalTime);
  };

  const hoverElementsEnter = (e) => {
    transitionText(e.target.getAttribute("hover-text"), e.target, 680);
  };
  const hoverElementsLeave = (e) => {
    transitionText(e.target.getAttribute("default-text"), e.target, 680);
  };

  return (
    <div id="Project">
      <div className="cube-part"></div>
      <div className="text-part">
        <div className="frame">
          <h2 className="reveal-text reveal-text-project1">{title}</h2>
          <p className="reveal-text reveal-text-project1">
            {text}
          </p>
          <div className="links reveal-text">
            <p className="link-to-project reveal-text-project1">
              <a
                href={url1}
                target="_blank"
                className="default-hover"
                hover-text="Sea th3 pr)ject"
                default-text="See the project"
                onMouseEnter={(e) => hoverElementsEnter(e)}
                onMouseLeave={(e) => hoverElementsLeave(e)}
              >
                See the project
              </a>
            </p>
            <p className="link-to-project reveal-text-project1">
              <a
                href={url2}
                target="_blank"
                className="default-hover"
                hover-text="G1thub"
                default-text="Github"
                onMouseEnter={(e) => hoverElementsEnter(e)}
                onMouseLeave={(e) => hoverElementsLeave(e)}
              >
                Github
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProject;
