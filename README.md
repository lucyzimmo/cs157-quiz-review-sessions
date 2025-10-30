# CS157 Computational Logic - Presentation Template

A clean, minimal React-based presentation system for teaching CS157 (Computational Logic). Features a plain, distraction-free design that puts focus on your content.

## Features

### 🎯 Navigation
- **Keyboard Controls:**
  - `→` or `Space` or `PageDown` - Next slide
  - `←` or `PageUp` - Previous slide
  - `Home` - Go to first slide
  - `End` - Go to last slide
  - `F` - Toggle fullscreen mode

- **Mouse Controls:**
  - Navigation buttons at the bottom
  - Click on slide numbers to jump to specific slides
  - Thumbnail navigation bar

### 🎨 Slide Types

The template includes several pre-built slide components:

1. **TitleSlide** - For title pages and section covers
2. **ContentSlide** - General content with title and body
3. **ListSlide** - Bullet points or numbered lists
4. **TwoColumnSlide** - Split content into two columns
5. **CodeSlide** - Display code or formulas with syntax highlighting
6. **SectionSlide** - Section divider slides

### 🎓 Sample Content

The template comes with sample CS157 content covering:
- Introduction to Computational Logic
- Propositional Logic basics
- Truth tables
- De Morgan's Laws
- Logical Equivalence
- CNF (Conjunctive Normal Form)
- Practice problems

## Getting Started

### Prerequisites
- Node.js (v20.19+ or v22.12+)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd cs157-presentation
```

2. Install dependencies (if not already installed):
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser to the URL shown (usually `http://localhost:5173`)

## Customizing Your Presentation

### Adding New Slides

Edit `src/App.jsx` and add new slides to the `slides` array:

```jsx
const slides = [
  <TitleSlide
    title="Your Title"
    subtitle="Your Subtitle"
    instructor="Your Name"
    date="Date"
  />,
  
  <ContentSlide title="Your Topic">
    <p>Your content here...</p>
  </ContentSlide>,
  
  // Add more slides...
];
```

### Available Slide Components

#### TitleSlide
```jsx
<TitleSlide
  title="Main Title"
  subtitle="Subtitle (optional)"
  instructor="Instructor Name (optional)"
  date="Date (optional)"
/>
```

#### ContentSlide
```jsx
<ContentSlide title="Title">
  <p>Your content here...</p>
  <ul>
    <li>Point 1</li>
    <li>Point 2</li>
  </ul>
</ContentSlide>
```

#### ListSlide
```jsx
<ListSlide
  title="Title"
  items={[
    "Item 1",
    "Item 2",
    "Item 3"
  ]}
  ordered={false}  // true for numbered list
/>
```

#### TwoColumnSlide
```jsx
<TwoColumnSlide
  title="Title"
  leftContent={<div>Left content</div>}
  rightContent={<div>Right content</div>}
/>
```

#### CodeSlide
```jsx
<CodeSlide
  title="Code Example"
  language="javascript"
  code={`function example() {
  return "Hello World";
}`}
/>
```

#### SectionSlide
```jsx
<SectionSlide
  title="Section Title"
  subtitle="Section Subtitle (optional)"
/>
```

### Styling

You can customize colors and styles in:
- `src/components/Presentation.css` - Main presentation styling
- `src/components/Slide.css` - Individual slide styling

### Special Content Boxes

Use these CSS classes for highlighted content:

```jsx
<div className="info-box">
  Information box with blue styling
</div>

<div className="highlight-box">
  Highlighted box with yellow styling
</div>

<div className="success-box">
  Success box with green styling
</div>
```

## Building for Production

To create a production build:

```bash
npm run build
```

The build will be created in the `dist` folder. You can deploy this to any static hosting service.

To preview the production build locally:

```bash
npm run preview
```

## Tips for Teaching

1. **Use fullscreen mode** - Press `F` for an immersive presentation experience
2. **Practice navigation** - Get comfortable with keyboard shortcuts
3. **Use section slides** - Break your presentation into logical sections
4. **Mix slide types** - Vary between content, lists, and code to keep students engaged
5. **Add practice problems** - Include interactive problems for students to solve

## Project Structure

```
cs157-presentation/
├── src/
│   ├── components/
│   │   ├── Presentation.jsx      # Main presentation container
│   │   ├── Presentation.css      # Presentation styling
│   │   ├── Slide.jsx             # Slide components
│   │   └── Slide.css             # Slide styling
│   ├── App.jsx                   # Main app with slide content
│   ├── App.css                   # App styling
│   ├── index.css                 # Global styles
│   └── main.jsx                  # Entry point
├── package.json
└── README.md
```

## Browser Support

Works on all modern browsers:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)

## License

Free to use for educational purposes.

## Support

For issues or questions, contact your TA or refer to the CS157 course materials.

---

**Happy Teaching! 🎓**
