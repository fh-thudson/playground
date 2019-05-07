import React, { Component } from "react";
import Type from "./type";

class Types extends Component {
  render() {
    return (
      <div>
        {this.props.types.map(t => (
          <Type key={t.id} type={t} />
        ))}
      </div>
    );
  }
}

export default Types;
