import React from "react";
import { useMediaQuery, useTheme } from "@mui/material";

export default function App() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.only("xs")); // between 0 and 600px
  const isDesktop = useMediaQuery(theme.breakpoints.up("sm")); // above 900px

  return (
    <React.Fragment>
      {isMobile && <span>Hello Mobile</span>}
      {isDesktop && <span>Hello Desktop</span>}
    </React.Fragment>
  );
}