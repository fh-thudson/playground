import React, { Component } from "react";

class Type extends Component {
  state = {};
  render() {
    return (
      <tr>
        <td>
          <button className="btn btn-sm btn-primary">View Orders</button>
        </td>
        <td>
          <img src={this.props.type.imgUrl} />
        </td>
        <td>{this.props.type.id}</td>
      </tr>
    );
  }
}

export default Type;
