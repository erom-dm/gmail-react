import React, { Component } from "react";
import { connect } from "react-redux";
import {
  markAsRead,
  markAsImportant,
  deleteEmail
} from "../../actions/mailList";
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

  selectMarkMode = () => {
    let selectedMails = this.props.selectedMails;
    // Array filled with ID's of mails that are currently selected
    let selectedIDs = [];
    for (let property in selectedMails) {
      if (selectedMails.hasOwnProperty(property)) {
        if (selectedMails[property]) {
          selectedIDs.push(property);
        }
      }
    }

    let allRead = true;
    let mails = this.props.mailsToShow;

    for (let mail in mails) {
      if (mails.hasOwnProperty(mail)) {
        if (!mails[mail].readStatus && selectedIDs.includes(mails[mail].id)) {
          allRead = false;
        }
      }
    }

    let markingMode = allRead ? "mark as unread" : "mark as read";
    return {
      markingMode: markingMode,
      selectedIDs: selectedIDs
    };
  };

  deleteBtn = event => {
    event.preventDefault();
    let selectedMails = this.props.selectedMails;
    let selectedIDs = [];
    for (let property in selectedMails) {
      if (selectedMails.hasOwnProperty(property)) {
        if (selectedMails[property]) {
          selectedIDs.push(property);
        }
      }
    }

    this.props.deleteEmail(selectedIDs, this.props.activeFolder);
  };

  markBtn = event => {
    event.preventDefault();

    let data = this.selectMarkMode();
    this.props.markAsRead(data);
  };

  starBtn = event => {
    event.preventDefault();

    this.props.markAsImportant(event.target.id, this.props.activeFolder);
  };

  render() {
    const checkboxForm = "checkbox-form";
    let mailList = this.props.mailsToShow.map(item => {
      let importantStatus = item.important === true ? "star" : "no-star";
      return (
        <li
          key={item.id}
          className={item.readStatus ? "let" : "let active-letter"}
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
    selectedMails: state.input["selected"],
    activeFolder: state.appState.activeFolder.active
  };
}

const mapDispatchToProps = {
  markAsRead: markAsRead,
  markAsImportant: markAsImportant,
  deleteEmail: deleteEmail
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
