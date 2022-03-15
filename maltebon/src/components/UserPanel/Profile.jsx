import React from "react";
import { Component } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import UserMiniBox from "./UserMiniBox";
import EditProfile from "./EditProfile";
// import { Tab } from "semantic-ui-react";
import { Avatar, Card, Grid, Paper, ThemeProvider } from "@material-ui/core";
import { AppBar } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import FaceIcon from "@material-ui/icons/Face";
import ExtensionIcon from "@material-ui/icons/Extension";
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

class Profile extends Component {
  state = { value: 0, classes: null };
  componentDidMount = () => {
    // const classes = useStyles();
    console.log(this.props);
    this.setState();
    this.setState({ classes: this.props.classes });
  };

  handleChange = (event, newValue) => {
    this.setState({ value: newValue });
  };

  render() {
    return (
      <ThemeProvider theme={this.props.theme}>
        <div style={{ padding: "5vw" }}>
          {/* <AppBar position="static"> */}

          {/* </AppBar> */}
          <Grid container>
            <Grid item lg={1} xs={1} md={1}></Grid>
            <Grid item lg={10} xs={10} md={10}>
              <Paper>
                <Grid container>
                  <Grid item lg={2} xs={2} md={2}>
                    <div
                      style={{
                        padding: "1vw 1vw",
                        // borderRight: "1px solid",
                        backgroundColor: "#1a4922",
                        color: "#cbf3dafd",
                      }}
                    >
                      <div>
                        <Avatar
                          style={{
                            margin: "auto",
                            marginTop: "1vw",
                            marginBottom: "2vw",
                            width: "4vw",
                            height: "4vw",
                          }}
                        ></Avatar>
                      </div>

                      {this.state.classes !== null && (
                        <Tabs
                          selectionFollowsFocus
                          orientation="vertical"
                          value={this.state.value}
                          variant="fullWidth"
                          onChange={this.handleChange}
                          aria-label="Vertical tabs example"
                          // className={this.state.classes.tabs}
                          style={{
                            margin: "auto",
                            alignItems: "center",
                          }}
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
                            }}
                            label="Edit Profile"
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
                            }}
                            label="Item Three"
                            onClick={() => {
                              this.setState({ value: 2 });
                            }}
                          />
                          {/* <Divider></Divider> */}
                        </Tabs>
                      )}
                    </div>
                  </Grid>

                  <Grid item lg={8} xs={8} md={8}>
                    <div>
                      <TabPanel value={this.state.value} index={0}>
                        <EditProfile />
                      </TabPanel>
                      <TabPanel value={this.state.value} index={1}>
                        Item Two
                      </TabPanel>
                      <TabPanel value={this.state.value} index={2}>
                        Item Three
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
            <Grid item lg={2} xs={2} md={2}></Grid>
          </Grid>
        </div>
      </ThemeProvider>
    );
  }
}

export default Profile;
