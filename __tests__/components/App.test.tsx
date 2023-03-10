import { render, screen } from "@testing-library/react";
import App from "../../components/App";
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

describe("App Component", () => {
  it("renders correctly on mobiles screens", () => {
    // Set the screen size to a mobile-sized value
    resizeScreenSize(400);

    // Render the component
    const {container} = render(<App />);

    // Check to see if child component has the correct class
    expect(container.firstChild).toHaveClass("HeadingMobile");
  });

  it("renders correctly on tablet screens", () => {
    // Set the screen size to a tablet-sized value
    resizeScreenSize(600);

    // Render the component
    const {container} = render(<App />);

    // Check to see if child component has the correct class
    expect(container.firstChild).toHaveClass("HeadingTablet");
  });

  it("renders correctly on desktop screens", () => {
    // Set the screen size to a desktop-sized value
    resizeScreenSize(900);

    // Render the component
    const {container} = render(<App />);

    // Check to see if child component has the correct class
    expect(container.firstChild).toHaveClass("HeadingDesktop");
  });
});