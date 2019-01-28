import React, { Component } from "react";
import { connect } from "react-redux";
import {
  markAsRead,
  markAsImportant,
  deleteEmail
} from "../../actions/mailList";
import { openMail } from "../../actions/input";
// import { markAsImportant } from "../../actions/mailList";
//import {NavLink} from 'react-router-dom';
//import Mail from '../Mail';
import CheckBox from "../CheckBox";
import "./maillist.scss";

class MailList extends Component {
  getStatus = item => {
    let openedMsg = this.props.mailsToShow;
    return openedMsg.includes(item) ? null : "hidden";
  };

  deleteBtn = event => {
    event.preventDefault();
    this.props.deleteEmail();
  };

  markBtn = event => {
    event.preventDefault();
    this.props.markAsRead();
  };

  starBtn = event => {
    event.preventDefault();
    this.props.markAsImportant(event.target.id, this.props.activeFolder);
  };

  openMail = event => {
    event.preventDefault();
    console.log(event.target.id);
    this.props.openMail(event.target.id);
  };

  render() {
    const checkboxForm = "checkbox-form";
    let mailList = this.props.mailsToShow.map(item => {
      let importantStatus = item.important === true ? "star" : "no-star";
      return (
        <li
          key={item.id}
          className={item.readStatus ? "let" : "let active-letter"}
          onClick={this.OpenMail}
        >
          <CheckBox
            label=""
            name={item.id}
            isSelected={item.selected}
            id={item.id}
          />
          <button
            className={importantStatus}
            id={item.id}
            onClick={this.starBtn}
          />
          <div id={item.id} className="li-content">
            {item.from} - {item.subject}
            <p className={this.getStatus(item.id)}>{item.text}</p>
            {/*<NavLink to='/mail/:id' component={Mail}>
              </NavLink>*/}
          </div>
        </li>
      );
    });
    return (
      <div className="mail-list-container">
        <div className="mail-list__control-bar">
          <button onClick={this.deleteBtn} className="cb__delete-btn">
            Delete
          </button>
          <button onClick={this.markBtn} className="cb__mark-read-btn">
            Mark
          </button>
        </div>
        <form
          id={checkboxForm}
          className="mail-list-form"
          onSubmit={this.handleSubmit}
        >
          <ul className="mail-list">{mailList}</ul>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  let activeFolder = state.appState.activeFolder.active;

  return {
    mailsToShow: state.mailList[activeFolder],
    activeFolder: state.appState.activeFolder.active
  };
}

const mapDispatchToProps = {
  markAsRead: markAsRead,
  markAsImportant: markAsImportant,
  deleteEmail: deleteEmail,
  openMail: openMail
};

// Both this and ^ works
/*const mapDispatchToProps = (dispatch) => {
    return{
        markAsRead: (data) => dispatch(markAsRead(data)),
    }
};*/

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MailList);
