import { useState, useEffect, useCallback } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import './Presentation.css';

const Presentation = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => Math.min(prev + 1, slides.length - 1));
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const downloadAsPDF = async () => {
    try {
      const originalSlide = currentSlide;
      
      // Show a progress indicator
      const progressDiv = document.createElement('div');
      progressDiv.style.position = 'fixed';
      progressDiv.style.top = '50%';
      progressDiv.style.left = '50%';
      progressDiv.style.transform = 'translate(-50%, -50%)';
      progressDiv.style.background = 'white';
      progressDiv.style.padding = '20px 40px';
      progressDiv.style.borderRadius = '8px';
      progressDiv.style.boxShadow = '0 4px 12px rgba(0,0,0,0.3)';
      progressDiv.style.zIndex = '10000';
      progressDiv.style.fontSize = '18px';
      progressDiv.style.fontWeight = 'bold';
      progressDiv.textContent = 'Generating PDF... 0%';
      document.body.appendChild(progressDiv);

      // Create PDF in landscape orientation (16:9 aspect ratio)
      const pdfWidth = 297; // A4 landscape width in mm
      const pdfHeight = 210; // A4 landscape height in mm
      const pdf = new jsPDF({
        orientation: 'landscape',
        unit: 'mm',
        format: 'a4',
      });

      // Get the slide content element
      const slideContentElement = document.querySelector('.slide-content');
      
      if (!slideContentElement) {
        throw new Error('Slide content element not found');
      }

      // Capture each slide
      for (let i = 0; i < slides.length; i++) {
        // Update progress
        progressDiv.textContent = `Generating PDF... ${Math.round(((i + 1) / slides.length) * 100)}%`;
        
        // Change to the slide
        setCurrentSlide(i);
        
        // Wait for slide to render
        await new Promise(resolve => setTimeout(resolve, 300));

        // Capture the slide
        const canvas = await html2canvas(slideContentElement, {
          scale: 2,
          useCORS: true,
          logging: false,
          backgroundColor: '#ffffff',
          windowWidth: slideContentElement.scrollWidth,
          windowHeight: slideContentElement.scrollHeight,
        });

        // Convert canvas to image
        const imgData = canvas.toDataURL('image/png');
        
        // Add new page if not the first slide
        if (i > 0) {
          pdf.addPage();
        }
        
        // Add image to PDF (fit to page)
        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      }

      // Restore original slide
      setCurrentSlide(originalSlide);
      await new Promise(resolve => setTimeout(resolve, 100));

      // Remove progress indicator
      document.body.removeChild(progressDiv);

      // Save the PDF
      pdf.save('presentation-slides.pdf');
      
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Failed to generate PDF. Please try again.');
      
      // Clean up progress indicator if it exists
      const progressDiv = document.querySelector('div[style*="z-index: 10000"]');
      if (progressDiv) {
        document.body.removeChild(progressDiv);
      }
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      switch (e.key) {
        case 'ArrowRight':
        case ' ':
        case 'PageDown':
          e.preventDefault();
          nextSlide();
          break;
        case 'ArrowLeft':
        case 'PageUp':
          e.preventDefault();
          prevSlide();
          break;
        case 'Home':
          e.preventDefault();
          goToSlide(0);
          break;
        case 'End':
          e.preventDefault();
          goToSlide(slides.length - 1);
          break;
        case 'f':
        case 'F':
          toggleFullscreen();
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide, slides.length]);

  // Handle fullscreen change
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  const CurrentSlideComponent = slides[currentSlide];

  return (
    <div className="presentation-container">
      <div className="slide-view">
        <div className="slide-content">
          {CurrentSlideComponent}
        </div>
      </div>

      <div className="controls">
        <button 
          onClick={prevSlide} 
          disabled={currentSlide === 0}
          className="nav-button"
          title="Previous (← or PgUp)"
        >
          ←
        </button>
        
        <div className="slide-indicator">
          <span className="current">{currentSlide + 1}</span>
          <span className="separator">/</span>
          <span className="total">{slides.length}</span>
        </div>
        
        <button 
          onClick={nextSlide} 
          disabled={currentSlide === slides.length - 1}
          className="nav-button"
          title="Next (→ or Space)"
        >
          →
        </button>

        <button 
          onClick={toggleFullscreen}
          className="fullscreen-button"
          title="Toggle Fullscreen (F)"
        >
          {isFullscreen ? '⊗' : '⛶'}
        </button>

        <button 
          onClick={downloadAsPDF}
          className="download-button"
          title="Download as PDF"
        >
          📥
        </button>
      </div>

      <div className="keyboard-hints">
        <span>← → Space: Navigate</span>
        <span>F: Fullscreen</span>
        <span>Home/End: First/Last</span>
      </div>
    </div>
  );
};

export default Presentation;

