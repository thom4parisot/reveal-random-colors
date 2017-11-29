# reveal-random-colors

> Pimp your Reveal.js presentations by randomising slide colours and typeface.

Add `data-state="random-color"` in [slide attributes][]. This slide `font-family`, `color` and `background-color` will be randomised when it becomes active.

The **default colors list** is based on [tachyons accessible combinations][] (contrast ratio > 7). Feel free to expand it 👍.

The **default fonts list** is based on [macOS_ typefaces][]. Not because I hate other OSes but because it was my use case for a live presentations. Ides are welcome 😊.

# Install

```bash
$ npm install reveal-random-colors
```

# Use

## Reveal.js Configuration

```js
import Reveal from 'reveal.js';
import RandomColors from 'reveal-random-colors';


Reveal.initialize({
  // ... cf. https://npmjs.com/reveal.js#configuration
});

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

## Using different fonts

Specify an _array of typefaces_ to the plugin via the `fonts` option:

```js
const myFonts = [
  'Comic Sans',
  'Ubuntu, sans-serif',
  'Open Sans, sans-serif',
];

Reveal.addEventListener('slidechanged', RandomColors({
  fonts: myFonts
}));
```

# License

[MIT License](LICENSE).

[slide attributes]: https://github.com/hakimel/reveal.js/#slide-attributes
[tachyons accessible combinations]: http://tachyons.io/docs/themes/skins/
[macOS_ typefaces]: https://en.wikipedia.org/wiki/List_of_typefaces_included_with_macOS
