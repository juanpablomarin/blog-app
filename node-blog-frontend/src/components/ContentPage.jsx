import React, { Component } from "react";
import { PropTypes } from "prop-types";

class ContentPage extends Component {
  static propTypes = {
    content: PropTypes.string.isRequired
  };

  render() {
    return <div />;
  }
}
