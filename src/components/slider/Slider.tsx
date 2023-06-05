import React, { FC, ReactNode, useEffect, useRef, useState } from "react";
import "./Slider.css";
import ChevronRight from "../icons/ChevronRight";
import ChevronLeft from "../icons/ChevronLeft";
import { loadingDataStatus } from "../../types";

interface SliderProps {
  children: ReactNode;
  loadingStatus: loadingDataStatus;
  onScrollEnd: () => {};
  loadingElement?: JSX.Element | undefined;
}

const Slider: FC<SliderProps> = ({
  children,
  loadingStatus,
  loadingElement,
  onScrollEnd,
}) => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [touchStartX, setTouchStartX] = useState(0);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragStartScrollLeft, setDragStartScrollLeft] = useState(0);

  useEffect(() => {
    if (loadingStatus == "loaded") {
      handleScrollRight();
    }
  }, [loadingStatus]);

  const handleScrollLeft = (): void => {
    if (sliderRef.current) {
      const scrollLeft = sliderRef.current.scrollLeft;
      let sliderWidth = sliderRef.current.offsetWidth;
      const newPosition = scrollLeft - sliderWidth;
      sliderRef.current.scrollTo({
        left: newPosition,
        behavior: "smooth",
      });
    }
  };

  const handleScrollRight = () => {
    if (sliderRef.current) {
      let sliderWidth = sliderRef.current.offsetWidth;
      let scrollLeft = sliderRef.current.scrollLeft;
      let newPosition = scrollLeft + sliderWidth;

      if (newPosition >= sliderRef.current.scrollWidth) {
        onScrollEnd();
      }

      sliderRef.current.scrollTo({
        left: newPosition,
        behavior: "smooth",
      });
      //   // If reached the end, scroll to the beginning
      //   sliderRef.current.scrollTo({
      //     left: 0,
      //     behavior: 'smooth',
      //   });
      // } else {
      // }
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

  const checkForScrollEnd = async () => {
    if (sliderRef.current) {
      let sliderWidth = sliderRef.current.offsetWidth;
      let scrollLeft = sliderRef.current.scrollLeft;
      let newPosition = scrollLeft + sliderWidth;

      if (newPosition >= sliderRef.current.scrollWidth) onScrollEnd();
    }
  };

  const handleMouseUp = (): void => {
    setIsDragging(false);
    checkForScrollEnd();
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
    checkForScrollEnd();
  };

  return (
    <div className="slider-wrapper">
      {/* slider */}
      <div
        className="slider"
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
      </div>
      {/* endof slider */}

      {/* slider controls  */}
      <div
        className="slider__control slider__control-left"
        onClick={handleScrollLeft}
      >
        <ChevronLeft />
      </div>
      <div
        className="slider__control slider__control-right"
        onClick={handleScrollRight}
      >
        <ChevronRight />
      </div>
      {/* end of slider controls */}

      {loadingStatus === "loading" && (
        <div className="loading">
          <div className="loading-content">
            {loadingElement || loadingStatus}
          </div>
        </div>
      )}
    </div>
  );
};

export default Slider;
