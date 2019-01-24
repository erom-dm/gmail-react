import React, { Component, Fragment } from "react";
import { connect } from 'react-redux';
import { selectMail } from "../../actions/mailList";

class CheckBox extends Component {

  render() {
    return (
      <Fragment>
        <div className="form-check">
          <label>
            <input
              type="checkbox"
              name={this.props.name}
              onClick={this.props.check(this.props.id, this.props.activeFolder)}
              className="form-check-input"
            />
            {this.props.label}
          </label>
        </div>
      </Fragment>
    );
  }
}


function mapStateToProps(state) {
    return{
        activeFolder: state.appState.activeFolder['active'],
    }
}

function mapDispatchToProps(dispatch) {
   return({
       check: (id, activeFolder) => {dispatch(selectMail(id, activeFolder))}
   })
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckBox);
