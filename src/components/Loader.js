import React, { useEffect, useRef, useState } from 'react';

const Loader = ({ onLoaderEnd }) => {
  const loaderPageTitle = useRef(null);
  const loaderPageSubtitle = useRef(null);
  const loaderTitles = useRef(null);
  const loaderPage = useRef(null);
  const [scaledLines, setScaledLines] = useState(Array(20).fill(false));

  const transitionText = (targetString, element, time) => {
    if (!element) return; // Vérifiez si l'élément est null
    const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ(())@@##&&++';
    const originalText = element.textContent;
    const maxLength = Math.max(originalText.length, targetString.length);
    const targetText = targetString.padEnd(maxLength, ' ');
    const intervalTime = 85;
    const totalSteps = time / intervalTime;
    const stepsRemaining = Array.from({ length: maxLength }, () => Math.floor(Math.random() * totalSteps));
    const interval = setInterval(() => {
      let newText = '';
      for (let i = 0; i < maxLength; i++) {
        if (stepsRemaining[i] > 0) {
          newText += alphabet[Math.floor(Math.random() * alphabet.length)];
          stepsRemaining[i]--;
        } else {
          newText += targetText[i];
        };
      };
      element.textContent = newText;
      if (stepsRemaining.every(steps => steps <= 0)) {
        clearInterval(interval);
        element.textContent = targetString;
      };
    }, intervalTime);
  };

  useEffect(() => {
    if (loaderPageTitle.current && loaderPageSubtitle.current) {
      transitionText(loaderPageTitle.current.textContent, loaderPageTitle.current, 3000);
      transitionText(loaderPageSubtitle.current.textContent, loaderPageSubtitle.current, 3000);
      setTimeout(() => {
        if (loaderTitles.current) {
          loaderTitles.current.style.color = "#00000000";
          setTimeout(() => {
            for (let i = 0; i < 20; i++) {
              setTimeout(() => {
                setScaledLines(prevState => {
                  const newState = [...prevState];
                  newState[i] = true;
                  return newState;
                });
              }, i * 25);
            }
            setTimeout(() => {
              if (loaderPage.current) {
                loaderPage.current.style.display = 'none';
                onLoaderEnd();
              }
            }, 20 * 25 + 500);
          }, 450);
        }
      }, 4000);
    }
  }, [onLoaderEnd]);

  return (
    <div id='Loader' ref={loaderPage}>
      <div className="background-lines">
        {Array.from({ length: 20 }).map((_, index) => (
          <div
            key={index}
            className={`line line${index + 1}`}
            style={{ transform: scaledLines[index] ? 'scaleY(0)' : 'scaleY(1)' }}
          />
        ))}
      </div>
      <div className="titles" ref={loaderTitles}>
        <div className="loader-page-title">
          <h2 ref={loaderPageTitle}>Welcome</h2>
        </div>
        <div className="loader-page-subtitle">
          <h3 ref={loaderPageSubtitle}>Anquetil Gabin</h3>
        </div>
      </div>
    </div>
  )
};

export default Loader;