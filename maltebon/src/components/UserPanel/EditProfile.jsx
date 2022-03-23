import React, { Component } from "react";
import { Avatar, Button, Grid, TextField, Typography } from "@material-ui/core";
import { theme } from "../Theme/theme";
import { GetProfile } from "../../Connections/Connection";
import axios from "axios";
import { makeURL } from "../../Connections/Common";
import references from "../../assets/References.json";
// import { type } from "@testing-library/user-event/dist/type";
class EditProfile extends Component {
  state = {
    selectedFile: null,
    imageURL: null,
    isEditting: true,
    EditText: "Edit",
    email: "",
    name: "",
    username: "",
  };
  async componentDidMount() {
    await axios
      .get(makeURL("/account/myprofile"))
      .then((response) => {
        console.log("This is profile", response);
        this.setState({
          name: response.data[0].profile_name,
          username: response.data[0].username,
          email: response.data[0].email,
          imageURL: references.url_address + response.data[0].avatar,
        });
      })
      .catch((error) => {
        console.log("Error in getting profile info", error);
      });
  }
  PhotoChanged = async (event) => {
    await this.setState({ selectedFile: event.target.files[0] });
    // console.log(this.state.selectedFile);
    var binaryData = [];
    await binaryData.push(this.state.selectedFile);
    await this.makeURL(binaryData).then((link) => {
      if (link !== null) this.setState({ imageURL: link });
    });
    // console.log(this.state.link);
  };
  makeURL = async (file) => {
    return await URL.createObjectURL(new File(file, "ProfilePic"));
  };
  makeEditable = async () => {
    // this.props.change(2, 2);
    this.setState({ isEditting: !this.state.isEditting });
    if (this.state.EditText === "Edit") this.setState({ EditText: "Submit" });
    else {
      // edit profile functions
      await axios
        .post(makeURL("/account/changefname"), {
          profile_name: this.state.name,
        })
        .then((response) => {
          console.log("profile edited successfully", response);
          this.setState({ EditText: "Edit" });
        })
        .catch((error) => {
          console.log("error in editing profile information", error);
        });

      const data = new FormData();
      data.append("file", this.state.selectedFile);
      await axios.post(makeURL("/account/upload/pp"), data).then((response) => {
        console.log("image uploaded successfully", response);
      });
    }
  };
  render() {
    return (
      <div style={{ padding: "0.5vh" }}>
        <Typography
          variant="h3"
          style={{
            textAlign: "left",
            fontFamily: "Fredoka",
            fontWeight: "bold",
            paddingBottom: "5vh",
          }}
        >
          Account Information
        </Typography>
        <form noValidate autoComplete="off">
          <Grid container spacing={2}>
            <Grid item lg={4} xs={12} md={4}>
              <Grid container style={{ height: "100%" }}>
                <Grid
                  item
                  lg={12}
                  xs={12}
                  md={12}
                  style={{ textAlign: "center", alignItems: "center" }}
                >
                  <Avatar
                    variant="square"
                    style={{ width: "20vh", height: "20vh", margin: "auto" }}
                    src={this.state.imageURL}
                  />
                </Grid>
                <Grid item lg={12} xs={12} md={12}>
                  <Button
                    variant="contained"
                    component="label"
                    style={{
                      marginTop: "2vh",
                      fontFamily: "Fredoka",
                      fontWeight: "bold",
                    }}
                  >
                    Change Picture
                    <input
                      type="file"
                      accept="image/*"
                      onChange={this.PhotoChanged}
                      hidden
                    />
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid item lg={8} xs={12} md={8}>
              <Grid container spacing={2} style={{ textAlign: "left" }}>
                <Grid item xs={12}>
                  <TextField
                    variant="filled"
                    label="Email"
                    style={{ width: "100%", fontFamily: "Fredoka" }}
                    disabled
                    value={this.state.email}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="filled"
                    label="Name"
                    style={{ width: "100%", fontFamily: "Fredoka" }}
                    disabled={this.state.isEditting}
                    value={this.state.name}
                    onChange={(e) => {
                      this.setState({ name: e.target.value });
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="filled"
                    label="Username"
                    style={{ width: "100%" }}
                    disabled={this.state.isEditting}
                    value={this.state.username}
                    onChange={(e) => {
                      this.setState({ username: e.target.value });
                    }}
                  />
                </Grid>
              </Grid>
              <Grid item xs={12} lg={12}>
                <Grid container>
                  <Grid item lg={6} md={12} xs={12}>
                    <Button
                      variant="contained"
                      style={{
                        backgroundColor: theme.palette.primary.light,
                        marginTop: "2vh",
                        width: "80%",
                      }}
                      onClick={this.makeEditable}
                    >
                      {this.state.EditText}
                    </Button>
                  </Grid>
                  <Grid item lg={6} md={12} xs={12}>
                    <Button
                      variant="contained"
                      style={{
                        backgroundColor: theme.palette.primary.light,
                        marginTop: "2vh",
                        width: "80%",
                      }}
                      onClick={this.props.changePass}
                    >
                      Change password
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </div>
    );
  }
}

export default EditProfile;
