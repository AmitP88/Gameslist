import { render, screen } from "@testing-library/react";
import Logo from "../../components/Logo";

describe("HeadingMobile component", () => {
  it("renders Logo", () => {
    render(<Logo />);

    const heading = screen.getByText("Gameslist");
    expect(heading).toBeInTheDocument();
  });
});