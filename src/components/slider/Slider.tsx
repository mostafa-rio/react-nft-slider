import React, { FC, useRef, useState } from 'react';
import './Slider.css';
import ChevronRight from '../icons/ChevronRight';
import ChevronLeft from '../icons/ChevronLeft';

interface SliderProps {
  children: React.ReactNode;
}

const Slider: FC<SliderProps> = ({ children}) => {

    const sliderRef = useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [touchStartX, setTouchStartX] = useState(0);
    const [dragStartX, setDragStartX] = useState(0);
    const [dragStartScrollLeft, setDragStartScrollLeft] = useState(0);
  
  
    const handleScrollLeft = (): void => {
      if (sliderRef.current) {
        const sliderWidth = sliderRef.current.offsetWidth;
        const scrollLeft = sliderRef.current.scrollLeft;
        const newPosition = scrollLeft - sliderWidth;
  
        if (newPosition < 0) {
          // If reached the beginning, scroll to the end
          sliderRef.current.scrollTo({
            left: sliderRef.current.scrollWidth,
            behavior: 'smooth',
          });
        } else {
          sliderRef.current.scrollTo({
            left: newPosition,
            behavior: 'smooth',
          });
        }
      }
    };
  
    const handleScrollRight = (): void => {
      if (sliderRef.current) {
        const sliderWidth = sliderRef.current.offsetWidth;
        const scrollLeft = sliderRef.current.scrollLeft;
        const newPosition = scrollLeft + sliderWidth;
  
        if (newPosition >= sliderRef.current.scrollWidth) {
          // If reached the end, scroll to the beginning
          sliderRef.current.scrollTo({
            left: 0,
            behavior: 'smooth',
          });
        } else {
          sliderRef.current.scrollTo({
            left: newPosition,
            behavior: 'smooth',
          });
        }
      }
    };
  
    
  const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>): void => {
    setIsDragging(true);
    setDragStartX(event.clientX);
    setDragStartScrollLeft(sliderRef.current?.scrollLeft || 0);
  };

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>): void => {
    if (isDragging && sliderRef.current) {
      const dragOffsetX = event.clientX - dragStartX;
      sliderRef.current.scrollLeft = dragStartScrollLeft - dragOffsetX;
    }
  };

  const handleMouseUp = (): void => {
    setIsDragging(false);
  };

    const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>): void => {
      setTouchStartX(event.touches[0].clientX);
    };
  
    const handleTouchMove = (event: React.TouchEvent<HTMLDivElement>): void => {
      if (sliderRef.current) {
        const touchCurrentX = event.touches[0].clientX;
        const touchDiffX = touchCurrentX - touchStartX;
        sliderRef.current.scrollLeft -= touchDiffX;
        setTouchStartX(touchCurrentX);
      }
    };

    return (
      <div className="slider"  
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove} 
        onMouseMove={handleMouseMove}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      >
        <div className="slider__cards" ref={sliderRef}>
          {React.Children.map(children, (child, index) => (
            <div key={index} className="slider__card">
              {child}
            </div>
          ))}
        </div>
        {/* //TODO make props for chevron icons */}
          <div className="slider__control slider__control-left" onClick={handleScrollLeft}>
            <ChevronLeft /> 
          </div>
          <div className="slider__control slider__control-right" onClick={handleScrollRight}>
            <ChevronRight />
          </div>
      </div>
    );
};
 
export default Slider;