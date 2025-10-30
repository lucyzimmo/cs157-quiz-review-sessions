# Quick Start Guide

## Running the Presentation

```bash
cd cs157-presentation
npm run dev
```

Then open your browser to the displayed URL (usually http://localhost:5173)

## Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `→` or `Space` | Next slide |
| `←` | Previous slide |
| `Home` | First slide |
| `End` | Last slide |
| `F` | Fullscreen toggle |

## Editing Your Slides

1. Open `src/App.jsx`
2. Find the `slides` array
3. Add/edit/remove slides using the provided components
4. Save and see changes instantly!

## Example: Adding a New Slide

```jsx
// In src/App.jsx, add to the slides array:
<ContentSlide title="My New Topic">
  <p>This is my content about computational logic!</p>
  <ul>
    <li>Point 1</li>
    <li>Point 2</li>
  </ul>
</ContentSlide>
```

## Components Available

- `<TitleSlide>` - Title pages
- `<ContentSlide>` - General content
- `<ListSlide>` - Bullet/numbered lists
- `<TwoColumnSlide>` - Split layout
- `<CodeSlide>` - Code/formulas
- `<SectionSlide>` - Section dividers

See README.md for detailed documentation!

