import './Slide.css';

// Title Slide Component
export const TitleSlide = ({ title, subtitle, instructor, date }) => (
  <div className="slide title-slide">
    <div className="title-content">
      <h1 className="main-title">{title}</h1>
      {subtitle && <h2 className="subtitle">{subtitle}</h2>}
      {instructor && <p className="instructor">{instructor}</p>}
      {date && <p className="date">{date}</p>}
    </div>
  </div>
);

// Content Slide Component
export const ContentSlide = ({ title, children }) => (
  <div className="slide content-slide">
    {title && <h2 className="slide-title">{title}</h2>}
    <div className="slide-body">
      {children}
    </div>
  </div>
);

// List Slide Component
export const ListSlide = ({ title, items, ordered = false }) => (
  <div className="slide content-slide">
    <h2 className="slide-title">{title}</h2>
    <div className="slide-body">
      {ordered ? (
        <ol className="slide-list">
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ol>
      ) : (
        <ul className="slide-list">
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  </div>
);

// Two Column Slide Component
export const TwoColumnSlide = ({ title, leftContent, rightContent }) => (
  <div className="slide content-slide">
    <h2 className="slide-title">{title}</h2>
    <div className="slide-body two-column">
      <div className="column">
        {leftContent}
      </div>
      <div className="column">
        {rightContent}
      </div>
    </div>
  </div>
);

// Code Slide Component
export const CodeSlide = ({ title, code, language = "javascript" }) => (
  <div className="slide content-slide">
    <h2 className="slide-title">{title}</h2>
    <div className="slide-body">
      <pre className="code-block">
        <code className={`language-${language}`}>{code}</code>
      </pre>
    </div>
  </div>
);

// Section Divider Slide
export const SectionSlide = ({ title, subtitle }) => (
  <div className="slide section-slide">
    <div className="section-content">
      <h1 className="section-title">{title}</h1>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  </div>
);

export default {
  TitleSlide,
  ContentSlide,
  ListSlide,
  TwoColumnSlide,
  CodeSlide,
  SectionSlide,
};

