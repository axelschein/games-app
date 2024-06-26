import { createTheme } from '@mui/material/styles';
import { green, blue } from '@mui/material/colors';

export const newTheme = createTheme({
  palette: {
    primary: {
      main: blue[500],
    },
    secondary: {
      main: green[500],
    },
  },
});
