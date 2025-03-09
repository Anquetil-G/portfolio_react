import React, { useEffect, useRef } from 'react'

const CallToScroll = () => {
	const callToScrollSpan = useRef(null);

	const transitionText = (targetString, element, time) => {
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
		setInterval(() => {
			if (callToScrollSpan.current) transitionText(callToScrollSpan.current.getAttribute('hover-text'), callToScrollSpan.current, 780);
			setTimeout(() => {
				if (callToScrollSpan.current) transitionText(callToScrollSpan.current.getAttribute('default-text'), callToScrollSpan.current, 780);
			}, 1500);
		}, 5000);
	}, []);

	return (
		<div className='CallToScroll'>
			<div className="call-to-scroll">
				<p>(<span ref={callToScrollSpan} hover-text="scr/ll" default-text="scroll">scroll</span>)</p>
			</div>
		</div>
	)
}

export default CallToScroll