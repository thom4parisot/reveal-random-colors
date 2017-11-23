'use strict';

import colors from './colors.js';
import fonts from './fonts.js';

const random = (arr) => {
  const length = arr.length;

  return arr[Math.floor(Math.random() * length)];
};

export default RandomColors (options = {}) => {
  const App = document.querySelector('[role="application"]');

  return ({currentSlide}) => {
    let color = null;
    let backgroundColor = null;
    let fontFamily = null;

    if (currentSlide.dataset.state === 'random') {
      [color, backgroundColor] = random(colors);
      fontFamily = random(fonts);
    }

    App.style.color = color;
    App.style.backgroundColor = backgroundColor;
    App.style.fontFamily = fontFamily;
  });
};
