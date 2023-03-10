import React from "react";
import { useMediaQuery, useTheme } from "@mui/material";

export default function HeadingMobile() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.only("xs")); // between 0 and 600px

  return (
    <React.Fragment>
      {isMobile && 
        <div className="HeadingMobile">
          <h1>Mobile</h1>
        </div>
      }
    </React.Fragment>
  );
}