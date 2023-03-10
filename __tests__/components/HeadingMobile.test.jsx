import { render, screen } from "@testing-library/react";
import HeadingMobile from "../../components/HeadingMobile";
import mediaQuery from "css-mediaquery";

function createMatchMedia(width) {
  return (query) => {
    return {
      matches: mediaQuery.match(query, { width }),
      media: "",
      addListener: () => {},
      removeListener: () => {},
      onchange: () => {},
      addEventListener: () => {},
      removeEventListener: () => {},
      dispatchEvent: () => true,
    };
  };
}

function resizeScreenSize(width) {
  window.matchMedia = createMatchMedia(width);
}

describe("HeadingMobile Component", () => {
  it("renders correctly on mobiles screens", () => {
    // Set the screen size to a smaller value
    resizeScreenSize(400);

    // Render the component
    render(<HeadingMobile />);

    // Verify that the component styles are correct for the default screen size
    const pElement = screen.getByText("Mobile");
    expect(pElement).toBeInTheDocument();
  });
});