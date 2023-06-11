import React from "react";
import { fireEvent, render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Slider, { SliderProps } from "../components/slider/Slider";
import "@testing-library/jest-dom";
import ChevronRight from "../components/icons/ChevronRight";
import { loadingDataStatus } from "../types";

// describe("Slider Component", () => {

const slideData = [
  { title: "slide 1" },
  { title: "slide 2" },
  { title: "slide 3" },
  { title: "slide 4" },
  { title: "slide 5" },
  { title: "slide 6" },
  { title: "slide 7" },
  { title: "slide 8" },
];
const sliderElements = slideData.map((item, index) => (
  <div style={{ width: "50%" }} key={index}>
    {item.title}
  </div>
));
const renderSlider = (props: Omit<SliderProps, "children">) =>
  render(<Slider {...props}>{sliderElements}</Slider>);

describe("Slider Component", () => {
  describe("Rendering", () => {
    test("Should render passed slide items", () => {
      renderSlider({
        loadingStatus: "loaded",
        onScrollEnd: () => "",
      });
      screen.logTestingPlaygroundURL();
      slideData.forEach((item) => {
        screen.getByText(item.title);
      });
    });

    test("Should render 2 controls ", () => {
      const { container } = renderSlider({
        loadingStatus: "loading",
        onScrollEnd: () => "",
      });
      expect(
        container.querySelectorAll("button.slider__control").length,
      ).toEqual(2);
    });

    test('Should render loading element on loadingState of "loading" ', () => {
      const loadingElement = <div>my loading</div>;
      renderSlider({
        loadingStatus: "loading",
        loadingElement,
        onScrollEnd: () => "",
      });
      screen.getByText("my loading");
    });
  });

  describe("User intractions", () => {
    test("Should call handleSlideRight function when user click right control  ", async () => {
      render(
        <div style={{ width: "300px" }}>
          <Slider loadingStatus="loaded" onScrollEnd={() => ""}>
            {sliderElements}
          </Slider>
        </div>,
      );
      const right = screen.getByTestId("control-right");
      const left = screen.getByTestId("control-left");

      userEvent.click(right);
      screen.getByText(slideData[2].title);

      userEvent.click(left);
      screen.getByText(slideData[2].title);
    });
  });
});
