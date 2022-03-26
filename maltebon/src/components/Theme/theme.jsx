import { alpha, createTheme, makeStyles } from "@material-ui/core";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#008000",
      textColor: "#daf2da",
      dark: "#004b23",
      light: "#9ef01a",
      black: "#222",
    },
    secondary: {
      main: "#ed9121",
      light: "#ffbf00",
      dark: "#cc0000",
      textColor: "#28190e",
    },
  },
  direction: "ltr",
  fontFamily: [
    "-apple-system",
    "BlinkMacSystemFont",
    '"Segoe UI"',
    "Roboto",
    '"Helvetica Neue"',
    "Arial",
    "sans-serif",
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
    "Fredoka",
  ].join(","),
});

export const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  buttonSuccess: {
    backgroundColor: theme.palette.primary.main,
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
    },
  },

  buttonProgress: {
    color: theme.palette.primary.main,
    position: "absolute",
    top: "50%",
    left: "50%",
    marginTop: -12,
    marginLeft: -12,
  },
  tabs: {},
  typography: {
    fontFamily: "BYekan",
    textDecoration: "none",
    boxShadow: "none",
  },
  headerText: {
    fontSize: ["80px", "!important"],
    fontFamily: ["BYekan", "!important"],
    fontWeight: ["bold", "!important"],
  },
  bodyText: {
    fontSize: ["40px", "!important"],
    fontFamily: ["BYekan", "!important"],
  },
  typographyBold: {
    fontFamily: '"BYekan"',
    fontWeight: "bold",
  },
  cardNotHovered: {
    transition: "transform 0.3s ease-in-out,background-color 0.5s",
  },
  cardHovered: {
    transform: "scale3d(1.05, 1.05, 1)",
    backgroundColor: "#8ECAE6",
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(1),
  },
  link: {
    "&:hover": {
      color: "#DDA15E",
      textDecoration: "underline #DDA15E",
    },
  },
  extendedIcon: {
    margin: 0,
    marginRight: theme.spacing(1),
    top: "auto",
    right: "5vw",
    bottom: "5vh",
    left: "auto",
    position: "fixed",
    zIndex: 10000,
  },
  searchBar: {
    width: "32%",
    [theme.breakpoints.down("sm")]: {
      width: "44%",
    },
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    alignItems: "center",
    display: "inline-block",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 10,
    width: "auto",
    [theme.breakpoints.up("sm")]: {
      marginRight: theme.spacing(10),
      marginLeft: theme.spacing(0),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0.9, 1),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    justifyContent: "center",
  },
  inputRoot: {
    fontFamily: '"BYekan"',
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 5, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(0)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "40ch",
      paddingRight: theme.spacing(5),
    },
  },
  icons: {
    padding: theme.spacing(0, 0, 0, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(em + ${theme.spacing(0)}px)`,
    transition: theme.transitions.create("width"),
    width: "auto",
    [theme.breakpoints.up("md")]: {
      width: "auto",
    },
    display: "flex",
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  paperDark: {
    backgroundColor: "#023047",
  },
  paperLight: {
    backgroundColor: "#8ECAE6",
  },
  paragraphDiv: {
    padding: "10vh 0vw",
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "80%",
    },
    margin: "auto",
  },
  // labelRoot: {
  //   right: 0,
  //   fontFamily: "BYekan",
  // },
  // shrink: {
  //   transformOrigin: "top right",
  // },
}));
