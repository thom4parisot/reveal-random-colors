# reveal-random-colors

> Pimp your Reveal.js presentations by randomising the colours and fonts of the current slide.

Simply add a `data-state="random-color"` in a `.slide` metadata section to randomise the colors of this slide when it becomes active.

# Install

```bash
$ npm install reveal-random-colors
```

# Use

## Reveal Configuration

```js
import Reveal from 'reveal.js';
import RandomColors from 'reveal-random-colors';

Reveal.addEventListener('slidechanged', RandomColors());
```

In a Reveal.js slide:

```html
<!-- .slide: data-state="random-color" -->

# My Slide Title
```

## CSS Styles

The following rules will help cascade the random font to headlines and paragraphs.

```css
.reveal [data-state="random-color"] h1,
.reveal [data-state="random-color"] h2,
.reveal [data-state="random-color"] h3,
.reveal [data-state="random-color"] h4,
.reveal [data-state="random-color"] h5,
.reveal [data-state="random-color"] p {
  font-family: inherit;
}
```

# License

[MIT License](LICENSE).
