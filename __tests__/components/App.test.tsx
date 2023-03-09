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
    // Set the screen size to a smaller value
    resizeScreenSize(400);

    // Render the component
    render(<App />);

    // Verify that the component styles are correct for the default screen size
    const pElement = screen.getByText("Hello Mobile");
    expect(pElement).toBeInTheDocument();
  });

  it("renders correctly on desktop screens", () => {
    // Set the screen size to a smaller value
    resizeScreenSize(900);

    // Render the component
    render(<App />);

    // Verify that the component styles are correct for the default screen size
    const pElement = screen.getByText("Hello Desktop");
    expect(pElement).toBeInTheDocument();
  });
});