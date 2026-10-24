# About section

A responsive React About section designed to match the existing portfolio's cream paper, black typography, and orange accent language.

## Files

- `About.jsx`
- `About.css`

## Install

1. Put both files in `src/components/`.
2. Make sure the existing portrait asset exists at `src/assets/profile.png`. If your asset has a different filename/path, update the import at the top of `About.jsx`.
3. Add the component after the Hero section in `App.jsx`:

```jsx
import About from "./components/About";

// inside the existing page:
<Hero />
<Work />
<About />
```

Keep your existing navbar and other sections; only add `<About />` where it belongs.

## Content notes

The copy is a starter draft based on a developer portfolio. Edit the paragraphs to reflect your actual experience and strengths. No years of experience, client numbers, or unsupported credentials are claimed.

The “A few things I've built” link points to `#work`, so make sure your Work section uses `id="work"`.
