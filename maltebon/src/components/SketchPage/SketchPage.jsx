import { Grid, Paper, ThemeProvider } from "@material-ui/core";
import React, { useState, Component } from "react";
import Button from "@material-ui/core/Button";
import { Typography } from "@material-ui/core";
import { theme } from "../Theme/theme";
import Graph from "react-graph-vis";
// import Node from "react-graph-vis"
import Node from "./Node";
import { v4 as uuidv4 } from "uuid";

import { AddNodeContainer } from "./AddNode/AddNodeContainer";
import { green } from "@material-ui/core/colors";

class SketchPage extends Component {
  state = {
    posX: 0,
    posY: 0,
    vis: false,
    selectedNode: "",
  };
  constructor(props) {
    super(props);
    var node = [];
    node.push(new Node(1, "instagram id 1", "instagram", "ardasamadi"));
    node.push(new Node(2, "telegram id 1", "telegram", "HolyArda"));
    // node.push(new Node(3, "instagram id 2", "instagram"));
    node.push(new Node(4, "user id 2", "user", "ardasamadi"));
    node.push(new Node(5, "github id 1", "git", "ardasamadi"));
    this.state = {
      graphKey: 1,
      counter: 5,
      graph: {
        nodes: node,
        edges: [
          { from: 4, to: 2, style: "arrow-center" },
          { from: 4, to: 1 },
          { from: 4, to: 5 },
        ],
      },
      events: {
        select: ({ nodes, edges }) => {
          if (nodes.length !== 0) {
            console.log("Selected nodes:");
            var selectedNode = node.find((x) => x.id == nodes);

            console.log(node.find((x) => x.id == nodes));
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
      color: "#000000",
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
  createNode = (x, y, name, typ) => {
    const color = this.randomColor();
    const id = this.state.counter + 1;
    console.log("()()()()", this.state);

    this.setState(({ graph: { nodes, edges }, counter, graphKey, ...rest }) => {
      //const id = this.state.counter + 1;
      return {
        graph: {
          nodes: [{ id, label: `${name}`, color, x, y, typ }, ...nodes],
          edges: [...edges],
        },
        counter: id,
        graphKey: uuidv4,
        ...rest,
      };
    });
  };
  triggerText = "+";
  onSubmit = (event) => {
    event.preventDefault(event);
    const plugin = event.target[0].value;
    const target = event.target[1].value;
    this.createNode(0, 0, target, plugin);
  };

  render() {
    return (
      <form style={{ minHeight: "80vh" }}>
        <ThemeProvider theme={theme}>
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
              height: "10vh",
              width: "10vh",
              backgroundColor: "#bbbbbb",
              top: "100px",
              left: "100px",
              visibility: "hidden",
            }}
          >
            {this.state.selectedNode !== undefined &&
              this.state.selectedNode.nodeType === "instagram" && (
                <div>
                  <a
                    href={
                      "https://www.instagram.com/" +
                      this.state.selectedNode.data
                    }
                  >
                    @{this.state.selectedNode.data}
                  </a>
                  <Typography>
                    type = {this.state.selectedNode.nodeType}
                  </Typography>
                </div>
              )}
          </Paper>
        </ThemeProvider>
      </form>
    );
  }
}

export default SketchPage;
