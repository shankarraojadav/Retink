import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      ms: 500,    //defined by me
      ms2: 400,   //defined by me
      ms3: 350,   //defined by me
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});
