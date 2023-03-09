import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Heading from '@/components/Heading';

describe('Heading component', () => {
  it('Should render properly', () => {
    render(<Heading />);

    const header = screen.getByRole('heading');
    const headerText = 'This is the Heading component';

    expect(header).toHaveTextContent(headerText);

  });
});