import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { addSelected } from "../../actions/input";

class CheckBox extends Component {
  state = {
    id: this.props.name,
    checked: false
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.checked !== this.state.checked) {
      this.props.updSelected(this.state);
    }
  }

  componentWillUnmount() {
    this.props.updSelected({ id: this.props.name, checked: false });
  }

  handleInputChange = event => {
    let value = event.target.checked;

    this.setState({
      checked: value
    });
  };

  render() {
    return (
      <Fragment>
        <div className="form-check">
          <label>
            <input
              type="checkbox"
              name={this.props.name}
              checked={this.state.checked}
              onChange={this.handleInputChange}
              className="form-check-input"
            />
            {this.props.label}
          </label>
        </div>
      </Fragment>
    );
  }
}

const mapDispatchToProps = {
  updSelected: addSelected
};

export default connect(
  null,
  mapDispatchToProps
)(CheckBox);
