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
import { Card, Grid } from "@material-ui/core";
import { AppBar } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";

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
    this.setState({ classes: this.props.theme });
  };

  handleChange = (event, newValue) => {
    this.setState({ value: newValue });
  };

  render() {
    return (
      <div style={{ padding: "5vw" }}>
        {/* <AppBar position="static"> */}

        {/* </AppBar> */}
        <Grid container>
          <Grid item lg={1}></Grid>
          <Grid item lg={2}>
            <div>
              {this.state.classes !== null && (
                <Tabs
                  orientation="vertical"
                  variant="scrollable"
                  value={this.state.value}
                  onChange={this.handleChange}
                  aria-label="Vertical tabs example"
                  className={this.state.classes.tabs}
                  style={{
                    width: "60%",
                    margin: "auto",
                    alignItems: "center",
                  }}
                >
                  <Card style={{ marginTop: "1vh" }}>
                    <Tab
                      label="Item One"
                      onClick={() => {
                        this.setState({ value: 0 });
                      }}
                      //   style={{ width: "2vw" }}
                    />
                  </Card>
                  <Card style={{ marginTop: "1vh" }}>
                    <Tab
                      label="Item Two"
                      onClick={() => {
                        this.setState({ value: 1 });
                      }}
                    />
                  </Card>
                  <Card style={{ marginTop: "1vh" }}>
                    <Tab
                      label="Item Three"
                      onClick={() => {
                        this.setState({ value: 2 });
                      }}
                    />
                  </Card>
                </Tabs>
              )}
            </div>
          </Grid>
          <Grid item lg={8}>
            <Card>
              <TabPanel value={this.state.value} index={0}>
                <EditProfile />
              </TabPanel>
              <TabPanel value={this.state.value} index={1}>
                Item Two
              </TabPanel>
              <TabPanel value={this.state.value} index={2}>
                Item Three
              </TabPanel>
              {/* <Tab
              menu={{ fluid: true, vertical: true }}
              menuPosition="left"
              panes={panes}
            /> */}
            </Card>
          </Grid>
          <Grid item lg={2}></Grid>
        </Grid>
      </div>
    );
  }
}

export default Profile;
