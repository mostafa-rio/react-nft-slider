import React, { useState, ReactNode } from "react";

interface TooltipProps {
  text: string;
  children: ReactNode;
}

const Tooltip: React.FC<TooltipProps> = ({ children, text }) => {
  const [isTooltipVisible, setTooltipVisible] = useState(false);

  const showTooltip = () => {
    setTooltipVisible(true);
  };

  const hideTooltip = () => {
    setTooltipVisible(false);
  };

  return (
    <div
      style={{ position: "relative" }}
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
    >
      {children}
      {isTooltipVisible && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            zIndex: "9",
            left: "50%",
            transform: "translateX(-50%)",
            backgroundColor: "rgba(0, 0, 0, 0.85)",
            color: "#fff",
            padding: "0.5rem",
            borderRadius: "4px",
            whiteSpace: "nowrap",
          }}
        >
          {text}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
