import React from "react";
import HeadingMobile from "../../components/HeadingMobile";
import HeadingDesktop from "../../components/HeadingDesktop";

export default function App() {
  return (
    <React.Fragment>
      <HeadingMobile />
      <HeadingDesktop />
    </React.Fragment>
  );
}