import React, { Component } from "react";
import Type from "./type";

class Types extends Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <table className="table table-responsive table-dark table-striped">
            <tr>
              <td>Action Btn</td>
              <td>Image</td>
              <td>Type Id</td>
            </tr>
            {this.props.types.map(t => (
              <Type key={t.id} type={t} />
            ))}
          </table>
        </div>
      </React.Fragment>
    );
  }
}

export default Types;
