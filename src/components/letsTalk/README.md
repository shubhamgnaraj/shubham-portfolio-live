# Let's Talk / Human API section

A responsive React contact section using the portfolio's cream + black + orange palette. It uses CSS and SVG rather than Three.js, so it remains lightweight while responding to visitor input.

## Files
- `Contact.jsx`: interactive intent selector, animated network, response copy, prefilled email draft, copy-email button and back-to-top link.
- `Contact.css`: responsive styles, small animations and reduced-motion support.

## Install
1. Place both files in `src/components/`.
2. In `Contact.jsx`, replace `your-email@example.com` with the email address you actually use.
3. Add `import Contact from "./components/Contact";` to your page component.
4. Render `<Contact />` as the last section in your page.

## Notes
- If your top/hero section uses a different ID, add `id="home"` to its wrapper or change the back-to-top link.
- This section does not require React Three Fiber or Three.js.
- The `GET ... 200` panel is a visual metaphor, not an actual network request. Choosing an intent updates local React state.
- The email action opens a prefilled draft in the visitor's default mail app. It does not send automatically.
