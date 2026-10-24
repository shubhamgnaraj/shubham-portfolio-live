# Skills section

A responsive interactive React skills section with category tabs and subtle animations, matching the portfolio's cream / ink / orange visual system.

## Files
- `Skills.jsx`
- `Skills.css`

## Integration
1. Put both files in `src/components/`.
2. Add the component after About in your existing `App.jsx`:

```jsx
import Skills from "./components/Skills";

// inside the existing page layout:
<Hero />
<Work />
<About />
<Skills />
```

Preserve your existing navbar and page structure.

## Important content note
Skill names and status labels are editable starter content. Update them so they accurately reflect what you know and have actually built. The labels are intentionally qualitative rather than unsupported percentage bars.
