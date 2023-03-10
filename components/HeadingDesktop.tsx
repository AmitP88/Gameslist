import React from "react";
import { useMediaQuery, useTheme } from "@mui/material";

export default function HeadingDesktop() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("sm")); // above 600px

  return (
    <React.Fragment>
      {isDesktop && 
        <div className="HeadingDesktop">
          <h1>Desktop</h1>
        </div>
      }
    </React.Fragment>
  );
}