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
    opacity: "0.75",
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
    firstNodeConnect: null,
  };

  deleteNode = () => {
    this.setState({ vis: "hidden" });
    var sth = this.state.graph.edges.filter(
      (x) =>
        x.from === this.state.selectedNode.id ||
        x.to === this.state.selectedNode.id
    );
    let difference = this.state.graph.edges.filter((x) => !sth.includes(x));
    // var sthh = [];
    // sth.forEach((element) => {
    //   sthh.push(
    //     this.state.graph.edges.filter(
    //       (x) =>
    //         x.from === element.from ||
    //         x.to === element.to ||
    //         x.from === element.to ||
    //         x.to === element.from
    //     )
    //   );
    //   console.log(sthh);
    // });

    // var minSize = 1000;
    // var index = 0;
    // for (var i = 0; i < sthh.length; i++) {
    //   if (sthh[i].length <= minSize) {
    //     minSize = sthh[i].length;
    //     index = i;
    //   }
    // }
    // console.log(sthh[index]);

    // var newList = this.state.graph.edges.filter(
    //   (x) =>
    //     sthh[index].find((y) => x.from === y.from && x.to === y.to) ===
    //     undefined
    // );
    var newList = difference;
    console.log(newList);
    var nodeList = this.state.graph.nodes.filter(
      (x) => x.id !== this.state.selectedNode.id
    );
    console.log(nodeList);
    var graph = { nodes: nodeList, edges: newList };
    this.setState({ graph: graph });
    // this.state.graph.nodes.filter((x) => x.id === this.state.selectedNode.id);
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
  deleteEdge = () => {
    var newList = this.state.graph.edges.filter(
      (x) => x !== this.state.selectedEdge
    );
    var nodes = this.state.graph.nodes;
    var graph = { nodes: nodes, edges: newList };
    this.setState({ graph: graph });
    this.setState({ vis: "hidden" });
  };
  handleConnect = async () => {
    console.log(this.state.firstNodeConnect);
    console.log(this.state.selectedNode);
    console.log(this.state.graph);
    if (
      this.state.firstNodeConnect === undefined ||
      this.state.firstNodeConnect === null
    ) {
      await this.setState({
        firstNodeConnect: this.state.selectedNode,
      });
      console.log(this.state.firstNodeConnect);
    } else {
      // var newGraph = this.state.graph;
      // newGraph.edges = [
      //   {
      //     from: this.state.firstNodeConnect.id,
      //     to: this.state.selectedNode.id,
      //   },
      //   ...newGraph.edges,
      // ];
      // newGraph.graphKey = uuidv4;
      // this.setState({ graph: newGraph });
      // console.log(newGraph);
      const id = this.state.counter + 1;
      this.setState(
        ({ graph: { nodes, edges }, counter, graphKey, ...rest }) => {
          //const id = this.state.counter + 1;
          return {
            graph: {
              nodes: [...nodes],
              edges: [
                {
                  from: this.state.firstNodeConnect.id,
                  to: this.state.selectedNode.id,
                },
                ...edges,
              ],
            },
            counter: id,
            graphKey: uuidv4,
            ...rest,
          };
        }
      );
      this.setState({ firstNodeConnect: null });
    }
    this.setState({ vis: "hidden" });
  };
  componentDidMount() {
    var canvas = document.getElementById("myGraph").children[0].children[0];
    // console.log(canvas);
    // var canvas = network.canvas.frame.canvas;
    // var ctx = canvas.getContext("2d");
  }
  constructor(props) {
    super(props);

    // ctx.drawImage(document.getElementById("scream"), -100, -100);
    this.state = {
      posX: 0,
      posY: 0,
      vis: "hidden",
      selectedNode: "",
      selectedEdge: "",
      menu: "",
      rendered: 0,
      options: {
        layout: {
          // hierarchical: true,
        },
        edges: {
          color: "#000000",
          smooth: {
            enabled: false,
            type: "continuous",
          },
        },
        autoResize: true,
        interaction: {
          // navigationButtons: true,
          dragView: false,
          // zoomView: false,
        },

        physics: {
          // enabled: false,
          // stabilization: true,
          // solver: "forceAtlas2Based",
          timestep: 0.2,
          // wind: {
          //   x: 10,
          // },
        },
        // physics: false,
      },

      graphKey: 1,
      counter: 1,
      graph: {
        nodes: [new Node(1, getUser(), "user", "")],
        edges: [],
      },
      physics: { enabled: false },
      events: {
        select: ({ nodes, edges }) => {
          if (nodes.length !== 0) {
            console.log("Selected nodes:");
            console.log(nodes);
            var selectedNode = this.state.graph.nodes.find(
              (x) => x.id == nodes
            );
            selectedNode.chosen = false;
            console.log(this.state.graph.nodes.find((x) => x.id == nodes));
            var paper = document.getElementById("paperr");

            paper.style.position = "absolute";
            paper.style.visibility = "visible";
            var e = window.event;
            console.log(this.state.graph);
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
                      <Typography style={{ color: "#fff" }}>
                        {this.state.selectedNode.data}
                      </Typography>
                    </Link>
                    <Button
                      fullWidth
                      variant="contained"
                      style={{
                        backgroundColor: theme.palette.secondary.light,
                      }}
                      onClick={this.deleteNode}
                    >
                      <Avatar
                        src="https://icon-library.com/images/delete-icon-png/delete-icon-png-16.jpg"
                        style={{
                          height: theme.spacing(3),
                          width: theme.spacing(3),
                          marginRight: theme.spacing(1),
                        }}
                        // variant="square"
                      />
                      Delete
                    </Button>
                    <Button
                      fullWidth
                      variant="contained"
                      style={{
                        backgroundColor: theme.palette.secondary.light,
                      }}
                      onClick={this.handleConnect}
                    >
                      <Avatar
                        src="https://www.nicepng.com/png/detail/202-2026385_people-connection-png-for-kids-connect-icon-png.png"
                        style={{
                          height: theme.spacing(3),
                          width: theme.spacing(3),
                          marginRight: theme.spacing(1),
                        }}
                        // variant="square"
                      />
                      Connect
                    </Button>
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
                      <Typography style={{ color: "#fff" }}>
                        {this.state.selectedNode.data}
                      </Typography>
                    </Link>
                    <Button
                      fullWidth
                      variant="contained"
                      style={{
                        backgroundColor: theme.palette.secondary.light,
                      }}
                      onClick={this.deleteNode}
                    >
                      <Avatar
                        src="https://icon-library.com/images/delete-icon-png/delete-icon-png-16.jpg"
                        style={{
                          height: theme.spacing(3),
                          width: theme.spacing(3),
                          marginRight: theme.spacing(1),
                        }}
                        // variant="square"
                      />
                      Delete
                    </Button>
                    <Button
                      fullWidth
                      variant="contained"
                      style={{
                        backgroundColor: theme.palette.secondary.light,
                      }}
                      onClick={this.handleConnect}
                    >
                      <Avatar
                        src="https://www.nicepng.com/png/detail/202-2026385_people-connection-png-for-kids-connect-icon-png.png"
                        style={{
                          height: theme.spacing(3),
                          width: theme.spacing(3),
                          marginRight: theme.spacing(1),
                        }}
                        // variant="square"
                      />
                      Connect
                    </Button>
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
                      <Typography style={{ color: "#fff" }}>
                        {this.state.selectedNode.data}
                      </Typography>
                    </Link>
                    <Button
                      fullWidth
                      variant="contained"
                      style={{
                        backgroundColor: theme.palette.secondary.light,
                      }}
                      onClick={this.deleteNode}
                    >
                      <Avatar
                        src="https://icon-library.com/images/delete-icon-png/delete-icon-png-16.jpg"
                        style={{
                          height: theme.spacing(3),
                          width: theme.spacing(3),
                          marginRight: theme.spacing(1),
                        }}
                        // variant="square"
                      />
                      Delete
                    </Button>
                    <Button
                      fullWidth
                      variant="contained"
                      style={{
                        backgroundColor: theme.palette.secondary.light,
                      }}
                      onClick={this.handleConnect}
                    >
                      <Avatar
                        src="https://www.nicepng.com/png/detail/202-2026385_people-connection-png-for-kids-connect-icon-png.png"
                        style={{
                          height: theme.spacing(3),
                          width: theme.spacing(3),
                          marginRight: theme.spacing(1),
                        }}
                        // variant="square"
                      />
                      Connect
                    </Button>
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
                        onClick={this.deleteNode}
                      >
                        <Avatar
                          src="https://icon-library.com/images/delete-icon-png/delete-icon-png-16.jpg"
                          style={{
                            height: theme.spacing(3),
                            width: theme.spacing(3),
                            marginRight: theme.spacing(1),
                          }}
                          // variant="square"
                        />
                        Delete
                      </Button>
                    </Grid>
                    <Grid item xs={12} lg={12} md={12}>
                      <Button
                        fullWidth
                        variant="contained"
                        style={{
                          backgroundColor: theme.palette.secondary.light,
                        }}
                        onClick={this.handleConnect}
                      >
                        <Avatar
                          src="https://www.nicepng.com/png/detail/202-2026385_people-connection-png-for-kids-connect-icon-png.png"
                          style={{
                            height: theme.spacing(3),
                            width: theme.spacing(3),
                            marginRight: theme.spacing(1),
                          }}
                          // variant="square"
                        />
                        Connect
                      </Button>
                    </Grid>
                  </Grid>
                ),
              });
            }
          } else if (edges.length !== 0) {
            var selectedEdge = this.state.graph.edges.find(
              (x) => x.id === edges[0]
            );
            console.log(selectedEdge);
            console.log(this.state.graph);
            var paper = document.getElementById("paperr");

            paper.style.position = "absolute";
            paper.style.visibility = "visible";
            var e = window.event;
            console.log(this.state.graph);
            // paper.style.backgroundColor = green;
            this.setState({ posX: e.clientX });
            this.setState({ posY: e.clientY });
            this.setState({ selectedNode: selectedNode });
            // console.log(this.state.selectedType);
            paper.style.top = this.state.posY + "px";
            // paper.setAttribute("top", this.state.posY);
            paper.style.left = this.state.posX + "px";
            this.setState({ vis: true });
            console.log(this.state.menu);
            this.setState({ selectedEdge: selectedEdge });
            this.setState({
              menu: (
                <Grid container spacing={1} style={{ padding: "0.5vh" }}>
                  <Grid item xs={12} lg={12} md={12}>
                    <Button color="secondary" onClick={this.deleteEdge}>
                      Delete edge
                    </Button>
                  </Grid>
                </Grid>
              ),
            });
          }

          // console.log("Selected edges:");
          // console.log(edges);
          // alert("Selected node: " + nodes);
        },
        click: ({ nodes, edges }) => {
          console.log(nodes);
          console.log(edges);
          if (nodes.length === 0) {
            if (edges.length === 0) {
              this.setState({ vis: false });
              var paper = document.getElementById("paperr");
              // paper.style.position = "fixed";
              paper.style.visibility = "hidden";
            }
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
        beforeDrawing: ({ canvas }) => {
          var ctx = canvas.getContext("2d");
          var w = ctx.canvas.width;
          var h = ctx.canvas.height;
          var x, y;
          var data =
            '<svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"> \
        <defs> \
            <pattern id="smallGrid" width="8" height="8" patternUnits="userSpaceOnUse"> \
                <path d="M 8 0 L 0 0 0 8" fill="none" stroke="gray" stroke-width="0.5" /> \
            </pattern> \
            <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse"> \
                <rect width="80" height="80" fill="url(#smallGrid)" /> \
                <path d="M 80 0 L 0 0 0 80" fill="none" stroke="gray" stroke-width="1" /> \
            </pattern> \
        </defs> \
        <rect width="100%" height="100%" fill="url(#smallGrid)" /> \
    </svg>';

          var DOMURL = window.URL || window.webkitURL || window;

          var img = new Image();
          var svg = new Blob([data], { type: "image/svg+xml;charset=utf-8" });
          var url = DOMURL.createObjectURL(svg);

          img.onload = function () {
            ctx.drawImage(img, 0, 0);
            DOMURL.revokeObjectURL(url);
          };
          img.src = url;
          //   console.log(canvas);
          //   var image = document.createElement("IMG");
          //   image.onload = function () {
          //     console.log("image loaded");
          //     var ctx = canvas.getContext("2d");
          //     ctx.drawImage(image, 100, 0);
          //   };
          //   image.src =
          //     "https://www.freeiconspng.com/uploads/white-grid-png-29.png";
        },
      },
    };
  }
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
  triggerText = "+";
  onSubmit = (event) => {
    event.preventDefault(event);
    const plugin = event.target[0].value;
    const target = event.target[1].value;
    this.createNodeGroup(target);
  };

  render() {
    return (
      <form style={{ minHeight: "80vh", alignItems: "center" }}>
        <ThemeProvider theme={theme}>
          <Grid
            container
            direction="column-reverse"
            justify="flex-end"
            alignItems="right"
            style={styles.heroContainer}
          >
            <Paper
              elevation={10}
              style={{
                // display: "inline-flex",
                // position: "absolute",
                left: "30%",
                top: "50%",
                width: "80%",
                // transform: "translate(-50%, -50%)",
                padding: "1vw",
                margin: "auto",
                marginTop: "5vh",
                marginBottom: "5vh",
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
                        style={{
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
                            {this.state.firstNodeConnect.label}{" "}
                            {this.state.firstNodeConnect.nodeType}
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
                      }}
                    >
                      <AddNodeContainer
                        triggerText={this.triggerText}
                        onSubmit={this.onSubmit}
                        // disabled
                      />
                    </Grid>
                    <Grid item xs={12} lg={12} md={12}>
                      <Button
                        onClick={() => {
                          var canvas =
                            document.getElementById("myGraph").children[0]
                              .children[0];
                          console.log(canvas);
                          var image = canvas.toDataURL("image/png");
                          // window.location.href = image;
                        }}
                      >
                        Save
                      </Button>
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
          </Grid>
        </ThemeProvider>
      </form>
    );
  }
}

export default SketchPage;
