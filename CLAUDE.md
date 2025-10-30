# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React-based presentation system built with Vite for teaching CS157 (Computational Logic). The presentation system includes keyboard navigation, fullscreen mode, PDF export functionality, and various slide component types.

## Development Commands

### Running the Development Server
```bash
npm run dev
```
Opens at http://localhost:5173 with hot module reloading enabled.

### Building for Production
```bash
npm run build
```
Creates optimized production build in `dist/` folder.

### Preview Production Build
```bash
npm run preview
```

### Linting
```bash
npm run lint
```

## Architecture & Code Structure

### Component Hierarchy

The application has a simple three-level architecture:

1. **App.jsx** (2600+ lines) - The main application file that contains:
   - All slide content defined as JSX elements
   - A `slides` array that holds all slide components in presentation order
   - Content ranges from CS157 logic topics to other presentation content

2. **Presentation.jsx** - The presentation container that provides:
   - Slide navigation state management (`currentSlide`)
   - Keyboard event handlers (arrow keys, space, home/end, F for fullscreen)
   - PDF export functionality using html2canvas and jsPDF
   - Navigation controls UI (prev/next buttons, slide counter)
   - Fullscreen mode toggle

3. **Slide.jsx** - Six reusable slide component types:
   - `TitleSlide` - Title pages with optional subtitle, instructor, date
   - `ContentSlide` - General content with title and children
   - `ListSlide` - Ordered or unordered lists
   - `TwoColumnSlide` - Two-column layout
   - `CodeSlide` - Code display with language specification
   - `SectionSlide` - Section divider pages

### Key Technical Details

**State Management**: Uses React useState for slide index and fullscreen state. Navigation callbacks are memoized with useCallback to prevent unnecessary re-renders.

**Keyboard Navigation**: Implemented via useEffect with a keydown listener. Supports: Arrow keys, Space, PageUp/Down, Home/End, and F for fullscreen.

**PDF Export**: Iterates through all slides, renders each one, captures with html2canvas, and adds to jsPDF document. Shows progress indicator during generation.

**Styling**: CSS modules are used for component styles:
- `Presentation.css` - Main container, controls, slide view
- `Slide.css` - Individual slide type styles
- `App.css` - App-level styles
- `index.css` - Global styles

### Adding New Slides

All slides are defined in `src/App.jsx` within the `slides` array. To add a new slide:

1. Import the desired slide component from `./components/Slide`
2. Add a new element to the `slides` array using JSX syntax
3. The slide will automatically appear in the presentation sequence

Example:
```jsx
<ContentSlide title="New Topic">
  <p>Content here...</p>
</ContentSlide>
```

### Dependencies

- **React 19.1.1** - UI framework
- **Vite 7.1.7** - Build tool and dev server
- **html2canvas** - Capture slide screenshots for PDF
- **jsPDF** - Generate PDF documents
- **ESLint** - Linting with React-specific rules

## Important Notes

- The `App.jsx` file is extremely large (2600+ lines) because all presentation content is embedded directly. When editing slides, use line numbers or search to navigate efficiently.
- The presentation system assumes a 16:9 aspect ratio optimized for A4 landscape when exporting to PDF.
- Keyboard shortcuts are case-insensitive except for fullscreen toggle (both 'f' and 'F' work).
