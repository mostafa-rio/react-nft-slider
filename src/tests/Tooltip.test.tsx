import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Tooltip from "../components/tooltip";

describe("Tooltip", () => {
  test("renders tooltip when hovering over the content", () => {
    const tooltipText = "This is a tooltip";
    const contentText = "Hover over me!";

    const { getByText, queryByText } = render(
      <Tooltip text={tooltipText}>
        <div>{contentText}</div>
      </Tooltip>,
    );

    const contentElement = getByText(contentText);
    expect(queryByText(tooltipText)).toBeNull();

    fireEvent.mouseEnter(contentElement);
    screen.getByText(tooltipText);

    fireEvent.mouseLeave(contentElement);
    expect(queryByText(tooltipText)).toBeNull();
  });
});
