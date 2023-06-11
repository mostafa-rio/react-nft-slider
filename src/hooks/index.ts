import { RefObject, useEffect, useState } from "react";

/**
 *? make a scroll act on the ref.current target based on dragging event
 */
export const useMouseDragToScroll = (
  ref: RefObject<HTMLElement>,
): { isDragging: boolean } => {
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragStartScrollLeft, setDragStartScrollLeft] = useState(0);

  const handleMouseDown = (event: globalThis.MouseEvent) => {
    setIsDragging(true);
    setDragStartX(event.clientX);
    setDragStartScrollLeft(ref.current?.scrollLeft || 0);
  };
  const handleMouseMove = (event: globalThis.MouseEvent) => {
    if (isDragging && ref.current) {
      const dragOffsetX = event.clientX - dragStartX;
      ref.current.scrollLeft = dragStartScrollLeft - dragOffsetX;
    }
  };
  const handleMouseUp = (event: globalThis.MouseEvent) => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (ref.current) {
      ref.current.addEventListener("mousedown", handleMouseDown);
      ref.current.addEventListener("mousemove", handleMouseMove);
      ref.current.addEventListener("mouseup", handleMouseUp);
    }
    return () => {
      if (ref.current) {
        ref.current.removeEventListener("mousedown", handleMouseDown);
        ref.current.removeEventListener("mousemove", handleMouseMove);
        ref.current.removeEventListener("mouseup", handleMouseUp);
      }
    };
  }, [ref, isDragging]);
  return { isDragging };
};

/**
 *? returns a method to call that makes a scroll act on ref
 */
export const useScrollLeft = () => {
  return (ref: RefObject<HTMLElement>) => {
    const { current } = ref;
    if (current && typeof current.scrollTo === "function") {
      const scrollLeft = current.scrollLeft;
      let width = current.offsetWidth;
      const newPosition = scrollLeft - width;
      current.scrollTo({
        left: newPosition,
      });
    }
  };
};

/**
 *? returns a method to call that makes a scroll act on ref
 */
export const useScrollRight = () => {
  return (ref: RefObject<HTMLElement>) => {
    const { current } = ref;
    if (current && typeof current.scrollTo === "function") {
      let width = current.offsetWidth;
      let scrollLeft = current.scrollLeft;
      let newPosition = scrollLeft + width;
      current.scrollTo({
        left: newPosition,
      });
    }
  };
};

/**
 *? Returns true when scrolling reaches the end
 *? based on scroll, touchend and mouseup events
 */
export const useScrollEnded = (ref: RefObject<HTMLElement>): boolean => {
  const { current } = ref;
  const [isEnded, setIsEnded] = useState(false);
  useEffect(() => {
    if (current) {
      const checkScroll = () => {
        const { offsetWidth, scrollLeft, scrollWidth } = current;
        let newPosition = scrollLeft + offsetWidth;
        setIsEnded(Math.round(newPosition) >= scrollWidth);
      };
      current.addEventListener("scroll", checkScroll);
      current.addEventListener("touchend", checkScroll);
      current.addEventListener("mouseup", checkScroll);

      return () => {
        current.removeEventListener("scroll", checkScroll);
        current.removeEventListener("touchend", checkScroll);
        current.removeEventListener("mouseup", checkScroll);
      };
    }
  }, [current]);

  return isEnded;
};

//? Enables touch-based scrolling for a DOM element
export const useTouchToScroll = (ref: RefObject<HTMLElement>): void => {
  const [touchStartX, setTouchStartX] = useState(0);

  useEffect(() => {
    const { current } = ref;
    if (current) {
      current.addEventListener("touchstart", handleTouchStart);
      current.addEventListener("touchmove", handleTouchMove);
      return () => {
        current.removeEventListener("touchstart", handleTouchStart);
        current.removeEventListener("touchmove", handleTouchMove);
      };
    }
  }, [ref, ref.current]);
  const handleTouchStart = (event: globalThis.TouchEvent) => {
    setTouchStartX(event.touches[0].clientX);
  };

  const handleTouchMove = (event: globalThis.TouchEvent): void => {
    if (ref.current) {
      const touchCurrentX = event.touches[0].clientX;
      const touchDiffX = touchCurrentX - touchStartX;
      ref.current.scrollLeft -= touchDiffX;
      setTouchStartX(touchCurrentX);
    }
  };
};
