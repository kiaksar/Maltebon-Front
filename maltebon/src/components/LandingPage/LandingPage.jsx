import React, { Component } from "react";
import {
  Box,
  Grid,
  Hidden,
  Paper,
  Typography,
  Toolbar,
  AppBar,
  TextField,
  Avatar,
} from "@material-ui/core";
import Navbar from "../Navbar/Navbar";
import Typed from "react-typed";
import Button from "@material-ui/core/Button";
import Footer from "../Footer/Footer";
import landingBG from "../pics/landingbg.jpg";
import { theme } from "../Theme/theme";

const styles = {
  heroContainer: {
    height: "100vh",
    backgroundImage: `url(${landingBG})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%",
  },
};
class LandingPage extends Component {
  state = {};
  render() {
    return (
      <div>
        {/* <Navbar /> */}
        <Grid
          container
          direction="column-reverse"
          justify="flex-end"
          alignItems="right"
          style={styles.heroContainer}
        >
          <Grid item>
            <Hidden mdDown>
              <Typography variant="h4" style={{ margin: "10% 10hw" }}>
                <br />
                <Typed
                  style={{
                    color: theme.palette.primary.contrastText,
                    position: "absolute",
                    left: "82%",
                    top: "48%",
                    transform: "translate(-50%, -50%)",
                  }}
                  strings={[
                    "Amateurs hack SYSTEMS, Professionals hack YOOOOUUU :)",
                    "Amateurs hack SYSTEMS, Professionals hack PEOPLE !!!",
                    "Amateurs hack SYSTEMS, Professionals hack PEOPLE !!!",
                  ]}
                  typeSpeed={50}
                  backSpeed={100}
                />
                <br />
                <br />
                <Typed
                  style={{
                    color: theme.palette.primary.contrastText,
                    position: "absolute",
                    left: "48%",
                    top: "55%",
                    transform: "translate(-50%, -50%)",
                    fontWeight: "bold",
                  }}
                  strings={[
                    "WHERE ???",
                    "WHEN ???",
                    "WHAT ???",
                    "HOW ???",
                    "WHO ???",
                  ]}
                  typeSpeed={100}
                  backSpeed={120}
                  loop
                />
                <Typed
                  style={{
                    color: theme.palette.primary.main,
                    fontSize: "10vh",
                    position: "absolute",
                    left: "65%",
                    top: "45%",
                    transform: "translate(-50%, -50%)",
                    fontWeight: "bold",
                  }}
                  strings={["?"]}
                />
              </Typography>
            </Hidden>
            <Hidden mdUp>
              <Typography variant="h4" style={{ margin: "10% 10hw" }}>
                <Typed
                  style={{
                    color: theme.palette.primary.contrastText,
                    position: "absolute",
                    left: "50%",
                    top: "40%",
                    transform: "translate(-50%, -50%)",
                  }}
                  strings={[
                    "Amateurs hack SYSTEMS, Professionals hack YOOOOUUU :)",
                    "Amateurs hack SYSTEMS, Professionals hack PEOPLE !!!",
                    "Amateurs hack SYSTEMS, Professionals hack PEOPLE !!!",
                  ]}
                  typeSpeed={50}
                  backSpeed={100}
                />
              </Typography>
            </Hidden>
          </Grid>
          <Grid item>
            <Button
              type="button"
              variant="contained"
              onClick={() => window.location.replace("/sketch")}
              style={{
                borderRadius: "20px",
                color: theme.palette.primary.contrastText,
                background: theme.palette.primary.main,
                position: "absolute",
                left: "25%",
                top: "80%",
                transform: "translate(-50%, -50%)",
                padding: "3vh 5vw",
                fontSize: "2vh",
              }}
              data-testid="landing-getStartedButton"
            >
              GET STARTED
            </Button>
            <Button
              type="button"
              variant="contained"
              style={{
                borderRadius: "20px",
                color: theme.palette.primary.contrastText,
                background: theme.palette.primary.main,
                position: "absolute",
                left: "25%",
                top: "91%",
                transform: "translate(-50%, -50%)",
                padding: "3vh 5vw",
                fontSize: "2vh",
              }}
              data-testid="landing-maltebon"
            >
              Maltebon ??
            </Button>
          </Grid>
        </Grid>
        <Footer />
      </div>
    );
  }
}

export default LandingPage;
