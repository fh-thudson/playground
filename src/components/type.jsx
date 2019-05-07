import React, { Component } from "react";

class Type extends Component {
  state = {};
  render() {
    return (
      <div>
        <img src={this.props.type.imgUrl} />
        {this.props.type.id}
      </div>
    );
  }
}

export default Type;
