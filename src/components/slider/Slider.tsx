import React, { FC, ReactNode, useEffect, useRef, useState } from "react";
import "./Slider.css";
import ChevronRight from "../icons/ChevronRight";
import ChevronLeft from "../icons/ChevronLeft";
import { loadingDataStatus } from "../../types";
import {
  useMouseDragToScroll,
  useScrollEnded,
  useScrollLeft,
  useScrollRight,
  useTouchToScroll,
} from "../../hooks";

export interface SliderProps {
  children: ReactNode;
  loadingStatus: loadingDataStatus;
  onScrollEnd: () => void;
  loadingElement?: JSX.Element | undefined;
}

const Slider: FC<SliderProps> = ({
  children,
  loadingStatus,
  loadingElement,
  onScrollEnd,
}) => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const { isDragging } = useMouseDragToScroll(sliderRef);
  const handleScrollLeft = useScrollLeft();
  const handleScrollRight = useScrollRight();
  const checkForScrollEnd = useScrollEnded(sliderRef);
  useTouchToScroll(sliderRef);

  useEffect(() => {
    // if (loadingStatus == "loaded") {
    //   handleScrollRight(sliderRef);
    // }
  }, [loadingStatus]);

  useEffect(() => {
    if (checkForScrollEnd) onScrollEnd();
  }, [checkForScrollEnd]);

  return (
    <div className="slider-wrapper">
      {/* slider */}
      <div className="slider">
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
      <button
        aria-label="scroll left"
        data-testid="control-left"
        className="slider__control slider__control-left"
        onClick={() => handleScrollLeft(sliderRef)}
      >
        <ChevronLeft />
      </button>
      <button
        aria-label="scroll right"
        data-testid="control-right"
        className="slider__control slider__control-right"
        onClick={() => handleScrollRight(sliderRef)}
      >
        <ChevronRight />
      </button>
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
