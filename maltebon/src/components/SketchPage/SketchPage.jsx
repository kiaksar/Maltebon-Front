import { Avatar, Grid, Link, Paper, ThemeProvider } from "@material-ui/core";
import React, { useState, Component } from "react";
import Button from "@material-ui/core/Button";
import { Typography } from "@material-ui/core";
import { theme } from "../Theme/theme";
import Graph from "react-graph-vis";
// import Node from "react-graph-vis"
import Node from "./Node";
import { v4 as uuidv4 } from "uuid";
import code1BG from "../pics/code1.jpg";

import { AddNodeContainer } from "./AddNode/AddNodeContainer";
import { green } from "@material-ui/core/colors";
import {
  getGithubInfo,
  getInstagramInfo,
  getTelegramInfo,
} from "../../Connections/Connection";
import { getUser } from "../../Connections/Common";


const styles = {
  heroContainer: {
    height: "100vh",
    backgroundImage: `url(${code1BG})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%",
    opacity:"0.75"
  },
};

class SketchPage extends Component {
  state = {
    posX: 0,
    posY: 0,
    vis: "hidden",
    selectedNode: "",
    menu: "",
    nodeList: [],
  };
  addGithubNode = async () => {
    this.setState({ vis: "hidden" });
    await getGithubInfo(this.state.selectedNode.label).then((e) => {
      if (e !== false) {
        console.log(e);
        this.createNode(
          this.state.selectedNode.label,
          "git",
          e,
          this.state.selectedNode.id
        );
      }
    });
  };
  addInstagramNode = async () => {
    this.setState({ vis: "hidden" });
    await getInstagramInfo(this.state.selectedNode.label).then((e) => {
      if (e !== false) {
        console.log(e);
        this.createNode(
          this.state.selectedNode.label,
          "instagram",
          e,
          this.state.selectedNode.id
        );
      }
    });
  };
  addTelegramNode = async () => {
    this.setState({ vis: "hidden" });
    await getTelegramInfo(this.state.selectedNode.label).then((e) => {
      if (e !== false) {
        console.log(e);
        this.createNode(
          this.state.selectedNode.label,
          "telegram",
          e,
          this.state.selectedNode.id
        );
      }
    });
  };
  constructor(props) {
    super(props);

    this.state = {
      posX: 0,
      posY: 0,
      vis: "hidden",
      selectedNode: "",
      menu: "",
      // nodeList: [new Node(4, "amirsmart", "user", "")],
      graphKey: 1,
      counter: 1,
      graph: {
        nodes: [new Node(1, getUser(), "user", "")],
        edges: [],
      },
      events: {
        select: ({ nodes, edges }) => {
          if (nodes.length !== 0) {
            console.log("Selected nodes:");
            console.log(nodes);
            var selectedNode = this.state.graph.nodes.find(
              (x) => x.id == nodes
            );

            console.log(this.state.graph.nodes.find((x) => x.id == nodes));
            var paper = document.getElementById("paperr");

            paper.style.position = "absolute";
            paper.style.visibility = "visible";
            var e = window.event;

            // paper.style.backgroundColor = green;
            this.setState({ posX: e.clientX });
            this.setState({ posY: e.clientY });
            this.setState({ selectedNode: selectedNode });
            // console.log(this.state.selectedType);
            paper.style.top = this.state.posY + "px";
            // paper.setAttribute("top", this.state.posY);
            paper.style.left = this.state.posX + "px";
            this.setState({ vis: true });
            // console.log(this.state.posX, this.state.posY);
            console.log(paper.style);
            // console.log(posX, posY);
            if (selectedNode.nodeType === "instagram") {
              this.setState({
                menu: (
                  <div
                    style={{
                      padding: theme.spacing(1),
                      fontFamily: "sans-serif",
                      fontWeight: "bold",
                    }}
                  >
                    <Link
                      href={this.state.selectedNode.data}
                      color="textPrimary"
                    >
                      <Typography style={{ color:"#fff"}}>
                      {this.state.selectedNode.data}

                      </Typography>
                    </Link>
                  </div>
                ),
              });
            } else if (selectedNode.nodeType === "telegram") {
              this.setState({
                menu: (
                  <div
                    style={{
                      padding: theme.spacing(1),
                      fontFamily: "sans-serif",
                      fontWeight: "bold",
                    }}
                  >
                    <Link
                      href={this.state.selectedNode.data}
                      color="textPrimary"
                    >
                      <Typography style={{ color:"#fff"}}>
                      {this.state.selectedNode.data}

                      </Typography>
                    </Link>
                  </div>
                ),
              });
            } else if (selectedNode.nodeType === "git") {
              console.log(this.state.selectedNode);
              this.setState({
                menu: (
                  <div
                    style={{
                      padding: theme.spacing(1),
                      fontFamily: "sans-serif",
                      fontWeight: "bold",
                    }}
                  >
                    <Link
                      href={this.state.selectedNode.data}
                      color="textPrimary"
                    >
                      <Typography style={{ color:"#fff"}}>
                      {this.state.selectedNode.data}

                      </Typography>
                    </Link>
                  </div>
                ),
              });
            } else if (selectedNode.nodeType === "user") {
              this.setState({
                menu: (
                  <Grid container spacing={1} style={{ padding: "0.5vh" }}>
                    <Grid item xs={12} lg={12} md={12}>
                      <Button
                        variant="contained"
                        fullWidth
                        color="secondary"
                        onClick={this.addGithubNode}
                      >
                        <Avatar
                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png"
                          style={{
                            height: theme.spacing(3),
                            width: theme.spacing(3),
                            marginRight: theme.spacing(1),
                          }}
                        />
                        Github
                      </Button>
                    </Grid>
                    <Grid item xs={12} lg={12} md={12}>
                      <Button
                        fullWidth
                        variant="contained"
                        style={{
                          backgroundColor: theme.palette.secondary.light,
                        }}
                        onClick={this.addInstagramNode}
                      >
                        <Avatar
                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Instagram-Icon.png/800px-Instagram-Icon.png"
                          style={{
                            height: theme.spacing(3),
                            width: theme.spacing(3),
                            marginRight: theme.spacing(1),
                          }}
                        />
                        Instagram
                      </Button>
                    </Grid>
                    <Grid item xs={12} lg={12} md={12}>
                      <Button
                        fullWidth
                        variant="contained"
                        color="secondary"
                        onClick={this.addTelegramNode}
                      >
                        <Avatar
                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/640px-Telegram_logo.svg.png"
                          style={{
                            height: theme.spacing(3),
                            width: theme.spacing(3),
                            marginRight: theme.spacing(1),
                          }}
                        />
                        Telegram
                      </Button>
                    </Grid>
                    <Grid item xs={12} lg={12} md={12}>
                      <Button
                        fullWidth
                        variant="contained"
                        style={{
                          backgroundColor: theme.palette.secondary.light,
                        }}
                      >
                        <Avatar
                          src="https://static.thenounproject.com/png/1561912-200.png"
                          style={{
                            height: theme.spacing(3),
                            width: theme.spacing(3),
                            marginRight: theme.spacing(1),
                          }}
                        />
                        Rename
                      </Button>
                    </Grid>
                  </Grid>
                ),
              });
            }
          }

          // console.log("Selected edges:");
          // console.log(edges);
          // alert("Selected node: " + nodes);
        },
        click: ({ nodes }) => {
          console.log(nodes);
          if (nodes.length === 0) {
            this.setState({ vis: false });
            var paper = document.getElementById("paperr");

            // paper.style.position = "fixed";
            paper.style.visibility = "hidden";
          }
        },
        zoom: ({}) => {
          this.setState({ vis: false });
          var paper = document.getElementById("paperr");

          // paper.style.position = "fixed";
          paper.style.visibility = "hidden";
        },
        // doubleClick: ({ pointer: { canvas } }) => {
        //   this.createNode(canvas.x, canvas.y);
        // },
      },
    };
  }
  options = {
    layout: {
      hierarchical: true,
    },
    edges: {
      color: "#222",
    },
  };
  randomColor() {
    const red = Math.floor(Math.random() * 256)
      .toString(16)
      .padStart(2, "0");
    const green = Math.floor(Math.random() * 256)
      .toString(16)
      .padStart(2, "0");
    const blue = Math.floor(Math.random() * 256)
      .toString(16)
      .padStart(2, "0");
    return `#${red}${green}${blue}`;
  }
  createNodeGroup = (label) => {
    const color = this.randomColor();
    const id = this.state.counter + 1;

    this.setState(({ graph: { nodes, edges }, counter, graphKey, ...rest }) => {
      //const id = this.state.counter + 1;
      return {
        graph: {
          nodes: [new Node(id, label, "user", ""), ...nodes],
          edges: [...edges],
        },
        counter: id,
        graphKey: uuidv4,
        ...rest,
      };
    });
    console.log(this.state.graph.nodes);
  };
  createNode = (label, type, data, parentID) => {
    const color = this.randomColor();
    const id = this.state.counter + 1;
    console.log("()()()()", this.state);
    console.log(data);

    this.setState(({ graph: { nodes, edges }, counter, graphKey, ...rest }) => {
      //const id = this.state.counter + 1;
      return {
        graph: {
          nodes: [new Node(id, label, type, data), ...nodes],
          edges: [{ from: parentID, to: id }, ...edges],
        },
        counter: id,
        graphKey: uuidv4,
        ...rest,
      };
    });
    console.log(this.state.graph.nodes);
  };
  triggerText = "Add Node ";
  onSubmit = (event) => {
    event.preventDefault(event);
    const plugin = event.target[0].value;
    const target = event.target[1].value;
    this.createNodeGroup(target);
  };

  render() {
    return (
      <form style={{ minHeight: "80vh" }}>
        <ThemeProvider theme={theme}>
        <Grid container
          direction="column-reverse"
          justify="flex-end"
          alignItems="right"
          style={styles.heroContainer}>

          </Grid>
          <Paper
            elevation={10}
            style={{
              display: "inline-flex",
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
              padding: "1vw",
            }}
          >
<<<<<<< Updated upstream
            <Grid container spacing={1} direction={"column"}>
              <Grid
                item
                lg={12}
                xs={12}
                md={12}
                style={{ margin: "auto", textAlign: "center" }}
              >
                <Grid container spacing={1} direction={"column"}>
                  <Grid
                    item
                    lg={12}
                    xs={12}
                    md={12}
                    style={{ margin: "auto", textAlign: "center" }}
                  >
                    <div style={{ fontWeight: "bold", fontSize: "2vh" }}>
                      <Typography
                        variant="h4"
                        style={{ fontFamily: "Fredoka", fontWeight: "bold" }}
                      >
                        Sketch
                      </Typography>
                    </div>
                  </Grid>

                  <Grid
                    item
                    lg={12}
                    xs={12}
                    md={12}
                    style={{ margin: "auto", textAlign: "center" }}
                  >
                    <Graph
                      key={this.state.counter}
                      graph={this.state.graph}
                      events={this.state.events}
                      options={this.state.options}
                      style={{ height: "50vh" }}
                    />
                  </Grid>

                  <Grid
                    item
                    lg={12}
                    xs={12}
                    md={12}
                    style={{
                      margin: "auto",
                      textAlign: "center",
                    }}
                  >
                    <AddNodeContainer
                      triggerText={this.triggerText}
                      onSubmit={this.onSubmit}
                      // disabled
                    />
=======
            <Paper
              elevation={10}
              style={{
                //display: "inline-flex",
                // position: "absolute",
                left: "30%",
                top: "50%",
                width: "80%",
                margin:'auto',
                // transform: "translate(-50%, -50%)",
                padding: "1vw",
                backgroundColor:'#222'
              //  marginTop: "5vh",
               // marginBottom: "5vh",
                //marginLeft:"9vw"
              }}
            >
              <Grid container spacing={1} direction={"column"}>
                <Grid
                  item
                  lg={12}
                  xs={12}
                  md={12}
                  style={{ margin: "auto", textAlign: "center" }}
                >
                  <Grid container spacing={1} direction={"column"} >
                    <Grid
                      item
                      lg={12}
                      xs={12}
                      md={12}
                      style={{ margin: "auto", textAlign: "center"}}
                    >
                      <div style={{ fontWeight: "bold", fontSize: "2vh" }}>
                        <Typography
                          variant="h4"
                          style={{ fontFamily: "Fredoka", fontWeight: "bold" }}
                        >
                          <TextField
                            onChange={(e) => {
                              this.setState({ sketchName: e.target.value });
                            }}
                            id="outlined-basic"
                            label="SketchName"
                            variant="filled"
                            style={{backgroundColor:'#9ef01a', borderRadius: 100 }}
                          />
                          <Button
                            onClick={this.handleSketchSave}
                            type="button"
                            color="primary"
                            style={{background:"#008000", color:"#FFF", width: "100%", borderRadius: 100 }}
                          >
                            <BookmarkBorder />
                            <div>
                              {"SAVE "}
                            </div>
                          </Button>

                          <Button
                            onClick={this.handleSketchExport}
                            type="button"
                            style={{background:"#008000", color:"#FFF", width: "100%", borderRadius: 100 }}
                          >
                            <GetAppIcon />
                            <div>
                              {"Downlod "}
                            </div>
                          </Button>
                        </Typography>
                      </div>
                    </Grid>

                    <Grid
                      item
                      lg={12}
                      xs={12}
                      md={12}
                      style={{ margin: "auto", textAlign: "center",backgroundColor:'#fff',marginBottom:'10px' }}
                    >
                      <Graph
                        key={this.state.counter}
                        graph={this.state.graph}
                        events={this.state.events}
                        options={this.state.options}
                        style={{
                          //PAIN
                          height: "70vh",
                          // backgroundImage:
                          //   "url(https://i.pinimg.com/originals/e7/3e/6d/e73e6dcb23084c4b47e2ec70ebd80438.jpg)",
                        }}
                        identifier="myGraph"
                        // physics={this.state.physics}
                      />
                    </Grid>
                    {this.state.firstNodeConnect !== null &&
                      this.state.firstNodeConnect !== undefined && (
                        <Grid
                          item
                          lg={12}
                          xs={12}
                          md={12}
                          style={{ margin: "auto", textAlign: "center" }}
                        >
                          <Typography>
                            Connecting from :{" "}
                            {this.state.firstNodeConnect.label}
                          </Typography>
                          <Button
                            onClick={() => {
                              this.setState({ firstNodeConnect: null });
                            }}
                          >
                            Cancel connection
                          </Button>
                        </Grid>
                      )}
                    <Grid
                      item
                      lg={12}
                      xs={12}
                      md={12}
                      style={{
                        margin: "auto",
                        textAlign: "center",
                        background:"#9ef01a",
                        borderRadius:'30px',
                      }}
                    >
                      <AddNodeContainer
                        triggerText={this.triggerText}
                        onSubmit={this.onSubmit}
                        // disabled
                      />
                    </Grid>
>>>>>>> Stashed changes
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
          <Paper
            variant="outlined"
            elevation={3}
            id="paperr"
            style={{
              // height: "10vh",
              minWidth: theme.spacing(30),
              backgroundColor: theme.palette.primary.main,
              // color: theme.palette.secondary.main,
              top: "100px",
              left: "100px",
              visibility: this.state.vis,
              borderRadius: "1vh",
            }}
          >
            {this.state.menu}
          </Paper>
        </ThemeProvider>
      </form>
    );
  }
}

export default SketchPage;
