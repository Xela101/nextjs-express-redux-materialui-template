import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#a970ff',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#18181b',
    },
  },
  typography: {
    h1: {
      fontFamily: 'Roboto',
      fontSize: '3rem',
      letterSpacing: '0em',
      fontWeight: '400',
      lineHeight: '1.167',
    },
  },
});

export default theme;
