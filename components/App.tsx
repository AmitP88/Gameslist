import React from "react";
import { useMediaQuery, useTheme } from "@mui/material";
import HeadingMobile from "./HeadingMobile";
import HeadingTablet from "./HeadingTablet";
import HeadingDesktop from "./HeadingDesktop";
import "../styles/media_queries.scss";

export default function App() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.only("xs")); // between 0 and 600px
  const isTablet = useMediaQuery(theme.breakpoints.only("sm")); // between 600px and 900px
  const isDesktop = useMediaQuery(theme.breakpoints.up("md")); // above 900px

  return (
    <React.Fragment>
      {isMobile && <HeadingMobile />}
      {isTablet && <HeadingTablet />}
      {isDesktop && <HeadingDesktop />}
    </React.Fragment>
  );
}