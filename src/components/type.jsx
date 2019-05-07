import React, { Component } from "react";

class Type extends Component {
  state = {};
  render() {
    return (
      <div>
        {this.props.id} {this.props.imgUrl}
      </div>
    );
  }
}

export default Type;
