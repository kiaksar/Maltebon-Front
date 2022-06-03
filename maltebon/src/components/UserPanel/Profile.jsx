import React from "react";
import { Component } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import UserMiniBox from "./UserMiniBox";
import CloseIcon from "@material-ui/icons/Close";
import { Alert, AlertTitle } from "@material-ui/lab";
import EditProfile from "./EditProfile";
import NoteIcon from "@material-ui/icons/Note";
// import { Tab } from "semantic-ui-react";
import {
  Avatar,
  Card,
  Collapse,
  Grid,
  Hidden,
  IconButton,
  Paper,
  ThemeProvider,
} from "@material-ui/core";
import { AppBar } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import FaceIcon from "@material-ui/icons/Face";
import ExtensionIcon from "@material-ui/icons/Extension";
import { theme } from "../Theme/theme";
import EditTokens from "./EditTokens";
import ChangePassword from "./ChangePassword";
import profileBG from "../pics/profileB.jpg";
import SavedSketchpads from "./SavedSketchpads";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

//
const styles = {
  heroContainer: {
    height: "100vh",
    backgroundImage: `url(${profileBG})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%",
    opacity: "0.75",
    padding: "5vw",
    minHeight: "80vh",
  },
};
class Profile extends Component {
  state = {
    value: 0,
    classes: null,
    open: false,
    alertMessage: "",
    severity: "",
  };
  componentDidMount = () => {
    // const classes = useStyles();

    this.setState();
    this.setState({ classes: this.props.classes });
  };

  setAlert = (b, msg, sev) => {
    this.setState({ open: b });
    this.setState({ alertMessage: msg });
    this.setState({ severity: sev });
  };

  handleChange = (event, newValue) => {
    this.setState({ value: newValue });
  };

  render() {
    return (
      <ThemeProvider theme={theme}>
        <div
          direction="column-reverse"
          justify="flex-end"
          alignItems="right"
          style={styles.heroContainer}
        >
          {/* <AppBar position="static"> */}
          {/* </AppBar> */}
          <Grid container style={{ margin: "auto" }}>
            <Grid item lg={1} xs={1} md={1}></Grid>
            <Grid item lg={10} xs={10} md={10}>
              <Paper>
                <Grid container>
                  <Grid item lg={2} xs={12} md={2}>
                    <Hidden only={["xs", "sm", "md"]}>
                      <div
                        style={{
                          padding: "0vw 1vw",
                          // borderRight: "1px solid",
                          backgroundColor: theme.palette.primary.black,
                          color: theme.palette.primary.contrastText,
                          height: "100%",
                        }}
                      >
                        {this.state.classes !== null && (
                          <Tabs
                            selectionFollowsFocus
                            orientation="vertical"
                            value={this.state.value}
                            variant="fullWidth"
                            onChange={this.handleChange}
                            aria-label="Vertical tabs example"
                            indicatorColor={theme.palette.secondary.textColor}
                            // className={this.state.classes.tabs}
                            style={{
                              margin: "auto",
                              alignItems: "center",
                            }}
                            centered
                          >
                            {/* <Divider></Divider> */}
                            <Tab
                              style={{
                                marginTop: "1vw",
                                marginBottom: "1vw",
                                borderBottom: "1px solid",
                                borderTop: "1px solid",
                                // padding: "1vw",
                                alignItems: "center",
                                // textAlign: "left",
                              }}
                              label={<span>Edit Profile</span>}
                              icon={<FaceIcon />}
                              onClick={() => {
                                this.setState({ value: 0 });
                              }}
                              //   style={{ width: "2vw" }}
                            />
                            {/* <Divider></Divider> */}

                            <Tab
                              style={{
                                marginTop: "1vw",
                                marginBottom: "1vw",
                                borderBottom: "1px solid",
                                borderTop: "1px solid",
                                // padding: "1vw",
                                textAlign: "center",
                              }}
                              label="Tokens"
                              icon={<ExtensionIcon />}
                              onClick={() => {
                                this.setState({ value: 1 });
                              }}
                            >
                              {/* <Divider></Divider> */}
                            </Tab>

                            <Tab
                              style={{
                                marginTop: "1vw",
                                marginBottom: "1vw",
                                borderBottom: "1px solid",
                                borderTop: "1px solid",
                                // padding: "1vw",
                                textAlign: "center",
                              }}
                              label="Saved"
                              icon={<NoteIcon />}
                              onClick={() => {
                                this.setState({ value: 3 });
                              }}
                            >
                              {/* <Divider></Divider> */}
                            </Tab>

                            {/* <Tab
                            style={{
                              marginTop: "1vw",
                              marginBottom: "1vw",
                              borderBottom: "1px solid",
                              borderTop: "1px solid",
                              // padding: "1vw",
                            }}
                            label="Item Three"
                            onClick={() => {
                              this.setState({ value: 2 });
                            }}
                          /> */}
                            {/* <Divider></Divider> */}
                          </Tabs>
                        )}
                      </div>
                    </Hidden>
                    <Hidden only={["lg", "xl"]}>
                      <div
                        style={{
                          padding: "0vw 1vw",
                          backgroundColor: theme.palette.primary.black,
                          color: theme.palette.primary.contrastText,
                          height: "100%",
                        }}
                      >
                        {this.state.classes !== null && (
                          <Tabs
                            selectionFollowsFocus
                            value={this.state.value}
                            variant="fullWidth"
                            onChange={this.handleChange}
                            aria-label="Vertical tabs example"
                            indicatorColor={theme.palette.secondary.textColor}
                            style={{
                              margin: "auto",
                              alignItems: "center",
                            }}
                          >
                            <Grid container>
                              <Grid
                                item
                                xs={6}
                                sm={6}
                                md={12}
                                style={{ textAlign: "center" }}
                              >
                                <Tab
                                  style={{
                                    marginTop: "1vw",
                                    marginBottom: "1vw",
                                    borderBottom: "1px solid",
                                    borderTop: "1px solid",
                                    borderRight: "1px solid",
                                    borderLeft: "1px solid",
                                    alignItems: "center",
                                    width: "100%",
                                  }}
                                  label={<span>Edit Profile</span>}
                                  icon={<FaceIcon />}
                                  onClick={() => {
                                    this.setState({ value: 0 });
                                  }}
                                />
                              </Grid>
                              <Grid
                                item
                                xs={6}
                                sm={6}
                                md={12}
                                style={{ textAlign: "center" }}
                              >
                                <Tab
                                  style={{
                                    marginTop: "1vw",
                                    marginBottom: "1vw",
                                    borderBottom: "1px solid",
                                    borderTop: "1px solid",
                                    borderLeft: "1px solid",
                                    borderRight: "1px solid",
                                    textAlign: "center",
                                    width: "100%",
                                  }}
                                  label="Tokens"
                                  icon={<ExtensionIcon />}
                                  onClick={() => {
                                    this.setState({ value: 1 });
                                  }}
                                ></Tab>
                              </Grid>
                              <Grid
                                item
                                xs={6}
                                sm={6}
                                md={12}
                                style={{ textAlign: "center" }}
                              >
                                <Tab
                                  style={{
                                    marginTop: "1vw",
                                    marginBottom: "1vw",
                                    borderBottom: "1px solid",
                                    borderTop: "1px solid",
                                    borderLeft: "1px solid",
                                    borderRight: "1px solid",
                                    textAlign: "center",
                                    width: "100%",
                                  }}
                                  label="Saved"
                                  icon={<NoteIcon />}
                                  onClick={() => {
                                    this.setState({ value: 3 });
                                  }}
                                ></Tab>
                              </Grid>
                            </Grid>
                          </Tabs>
                        )}
                      </div>
                    </Hidden>
                  </Grid>

                  <Grid item lg={10} xs={12} md={10}>
                    <div>
                      <TabPanel value={this.state.value} index={0}>
                        <EditProfile
                          classes={this.props.theme}
                          change={this.handleChange}
                          changePass={() => {
                            this.setState({ value: 2 });
                          }}
                          openAlert={this.setAlert}
                        />
                      </TabPanel>
                      <TabPanel value={this.state.value} index={1}>
                        <EditTokens />
                      </TabPanel>
                      <TabPanel value={this.state.value} index={2}>
                        <ChangePassword
                          changeProf={() => {
                            this.setState({ value: 0 });
                          }}
                          openAlert={this.setAlert}
                        />
                      </TabPanel>
                      <TabPanel value={this.state.value} index={3}>
                        <SavedSketchpads />
                      </TabPanel>
                    </div>
                    {/* <Tab
              menu={{ fluid: true, vertical: true }}
              menuPosition="left"
              panes={panes}
            /> */}
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            <Grid item lg={1} xs={1} md={1}></Grid>
            <Grid item lg={3} xs={12} md={6}>
              <Collapse in={this.state.open}>
                <Alert
                  // variant="filled"
                  style={{ marginTop: "1vh", top: "50%" }}
                  severity={this.state.severity}
                  action={
                    <IconButton
                      aria-label="close"
                      color="inherit"
                      size="small"
                      onClick={() => {
                        this.setAlert(false, "", "success");
                      }}
                    >
                      <CloseIcon fontSize="inherit" />
                    </IconButton>
                  }
                >
                  {this.state.alertMessage}
                </Alert>
              </Collapse>
            </Grid>
          </Grid>
        </div>
      </ThemeProvider>
    );
  }
}

export default Profile;
