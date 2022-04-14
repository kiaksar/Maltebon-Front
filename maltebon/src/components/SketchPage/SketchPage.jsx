import { Grid, Paper, ThemeProvider } from "@material-ui/core";
import React, {  useState ,Component } from "react";
import Button from "@material-ui/core/Button";
import { Typography } from "@material-ui/core";
import { theme } from "../Theme/theme";
import Graph from "react-graph-vis";
import { v4 as uuidv4 } from "uuid";

import {AddNodeContainer} from './AddNode/AddNodeContainer'


class SketchPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      graphKey: 0 ,
      counter: 5,
      graph: {
        nodes: [
          { id: 1, label: "Node 1", color: "#e04141" ,x:0,y:0, typ: "def" },
          { id: 2, label: "Node 2", color: "#e09c41" ,x:0,y:0, typ: "def" },
          { id: 3, label: "Node 3", color: "#e0df41" ,x:0,y:0, typ: "def" },
          { id: 4, label: "Node 4", color: "#7be041" ,x:0,y:0, typ: "def" },
          { id: 5, label: "Node 5", color: "#41e0c9" ,x:0,y:0, typ: "def" }
        ],
        edges: [
          { from: 1, to: 2 },
          { from: 1, to: 3 },
          { from: 2, to: 4 },
          { from: 2, to: 5 }
        ]
      }, 
      events: {
        select: ({ nodes, edges }) => {
          console.log("Selected nodes:");
          console.log(nodes);
          console.log("Selected edges:");
          console.log(edges);
          alert("Selected node: " + nodes);
        },
        doubleClick: ({ pointer: { canvas } }) => {
          this.createNode(canvas.x, canvas.y );
        }
      }
    }
  }
   options = {
    layout: {
      hierarchical: false
    },
    edges: {
      color: "#000000"
    }
  };
  randomColor() {
    const red = Math.floor(Math.random() * 256).toString(16).padStart(2, '0');
    const green = Math.floor(Math.random() * 256).toString(16).padStart(2, '0');
    const blue = Math.floor(Math.random() * 256).toString(16).padStart(2, '0');
    return `#${red}${green}${blue}`;
  }
  createNode = (x, y , name , typ) => {
    const color = this.randomColor();
    const id = this.state.counter + 1;
    console.log("()()()()" , this.state)

    this.setState(({ graph: { nodes, edges }, counter , graphKey, ...rest }) => {
      //const id = this.state.counter + 1;
      return {
        graph: {
          nodes: [
            { id, label: `${name}`, color, x, y , typ },
            ...nodes
            
          ],
          edges: [
            ...edges
          ]
        },
        counter: id,
        graphKey:uuidv4,
        ...rest
      }
    });
  }
  triggerText = '+';
  onSubmit = (event) => {
    event.preventDefault(event);
    const plugin = event.target[0].value
    const target = event.target[1].value
    this.createNode(0, 0 , target , plugin );

    
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
                    
                  <Graph key={this.state.counter}  graph={this.state.graph} events={this.state.events} options={this.state.options} style={{ height: "640px" }} />
                    
                  </Grid>
                 
                  <Grid
                    item
                    lg={12}
                    xs={12}
                    md={12}
                    style={{
                      margin: "auto",
                      textAlign: "center"
                     
                    }}
                  >

                    <AddNodeContainer triggerText={this.triggerText} onSubmit={this.onSubmit} />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </ThemeProvider>
      </form>
    );
  }
}

export default SketchPage;
