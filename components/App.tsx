import React from "react";
import { useMediaQuery, useTheme } from "@mui/material";
import HeadingMobile from "./HeadingMobile";
import HeadingDesktop from "./HeadingDesktop";

export default function App() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.only("xs")); // between 0 and 600px
  const isDesktop = useMediaQuery(theme.breakpoints.up("sm")); // above 900px

  return (
    <React.Fragment>
      {isMobile && <HeadingMobile />}
      {isDesktop && <HeadingDesktop />}
    </React.Fragment>
  );
}