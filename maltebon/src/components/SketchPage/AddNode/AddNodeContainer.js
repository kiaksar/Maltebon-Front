import React, { Component } from "react";
import { AddNodeModal } from "./AddNodeModal";
import AddNodeTrigger from "./AddNodeButton";
import "./AddNodeStyle.css";
import { Grid, Paper, ThemeProvider } from "@material-ui/core";

import { theme } from "../../Theme/theme";

export class AddNodeContainer extends Component {
  state = { isShown: false };
  showModal = () => {
    this.setState({ isShown: true }, () => {
      this.closeButton.focus();
    });
    this.toggleScrollLock();
  };
  closeModal = () => {
    this.setState({ isShown: false });
    this.AddNodeTrigger.focus();
    this.toggleScrollLock();
  };
  onKeyDown = (event) => {
    if (event.keyCode === 27) {
      this.closeModal();
    }
  };
  onClickOutside = (event) => {
    if (this.modal && this.modal.contains(event.target)) return;
    this.closeModal();
  };

  toggleScrollLock = () => {
    document.querySelector("html").classList.toggle("scroll-lock");
  };
  render() {
    return (
      <ThemeProvider theme={theme}>
        <AddNodeTrigger
          showModal={this.showModal}
          buttonRef={(n) => (this.AddNodeTrigger = n)}
          triggerText={this.props.triggerText}
        />
        {this.state.isShown ? (
          <AddNodeModal
            onSubmit={this.props.onSubmit}
            modalRef={(n) => (this.modal = n)}
            buttonRef={(n) => (this.closeButton = n)}
            closeModal={this.closeModal}
            onKeyDown={this.onKeyDown}
            onClickOutside={this.onClickOutside}
          />
        ) : null}
      </ThemeProvider>
    );
  }
}

export default AddNodeContainer;
