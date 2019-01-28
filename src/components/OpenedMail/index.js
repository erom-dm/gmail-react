import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

class OpenedMail extends Component {
  render() {
    const mail = this.props.mail;
    return (
      <Fragment>
        <p>{mail.id}</p>
        <p>{mail.to}</p>
        <p>{mail.from}</p>
        <p>{mail.text}</p>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  const activeFolder = state.appState.activeFolder.active;
  const openedId = state.input.opened;

  return {
    mail: state.mailList[activeFolder].filter(item => {
      return item.id === openedId;
    })
  };
};

export default connect(mapStateToProps)(OpenedMail);
