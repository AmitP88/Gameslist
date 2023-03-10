import { render, screen } from "@testing-library/react";
import HeadingDesktop from "../../components/HeadingDesktop";
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

describe("HeadingDesktop Component", () => {
  it("renders correctly on mobiles screens", () => {
    // Set the screen size to a smaller value
    resizeScreenSize(600);

    // Render the component
    render(<HeadingDesktop />);

    // Verify that the component styles are correct for the default screen size
    const pElement = screen.getByText("Desktop");
    expect(pElement).toBeInTheDocument();
  });
});