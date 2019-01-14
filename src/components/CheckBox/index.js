import React, { Component, Fragment } from "react";

class CheckBox extends Component {
  render() {
    return (
      <Fragment>
        <div className="form-check">
          <label>
            <input
              type="checkbox"
              name={this.props.name}
              checked={this.props.isSelected}
              onChange={this.props.onCheckboxChange}
              className="form-check-input"
            />
            {this.props.label}
          </label>
        </div>
      </Fragment>
    );
  }
}

export default CheckBox;
