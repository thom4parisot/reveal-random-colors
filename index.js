const colors = require('./colors.js');
const fonts = require('./fonts.js');

const random = (arr) => {
  const length = arr.length;

  return arr[Math.floor(Math.random() * length)];
};

const extend = (base, ...objects) => {
  return Object.assign(
    {},
    JSON.parse(JSON.stringify(base)),
    ...objects
  );
};

const DEFAULT_OPTIONS = {
  'state-target': 'random-color',
  fonts,
  colors,
};

module.exports = (options = {}) => {
  const App = document.querySelector('.reveal[role="application"]');
  const resolvedOptions = extend(DEFAULT_OPTIONS, options);
  const {colors,fonts} = resolvedOptions;

  return ({currentSlide}) => {
    let color = null;
    let backgroundColor = null;
    let fontFamily = null;

    if (currentSlide.dataset.state === resolvedOptions['state-target']) {
      [color, backgroundColor] = random(colors);
      fontFamily = random(fonts);
    }

    App.style.color = color;
    App.style.backgroundColor = backgroundColor;
    App.style.fontFamily = fontFamily;
  };
};
