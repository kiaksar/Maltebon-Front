import React from "react";
// import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import { theme } from "../Theme/theme";
import { ThemeProvider } from "@material-ui/core";

function Copyright() {
  return (
    <Typography variant="body2" color={theme.palette.secondary.light}>
      {"Copyright © "}
      <Link color="inherit" href="https://maltebon.com/">
        Maltebon
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    // display: "flex",
    flexDirection: "column",
    // minHeight: "90vh",
    // position: "initial",
    // bottom: "0",
    // width: "100%",
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: "auto",
    // backgroundColor: theme.palette.secondary.light,
    //   theme.palette.type === "light"
    //     ? theme.palette.grey[200]
    //     : theme.palette.grey[800],
  },
}));

export default function Footer2() {
  const classes = useStyles(theme);

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <footer
          className={classes.footer}
          style={{
            backgroundColor: theme.palette.primary.dark,
            color: theme.palette.primary.contrastText,
          }}
        >
          <Container maxWidth="sm">
            <Typography variant="body1">Here we admire DATA !</Typography>
            <Copyright />
          </Container>
        </footer>
      </div>
    </ThemeProvider>
  );
}
