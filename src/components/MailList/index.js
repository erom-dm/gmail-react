import React, { Component } from "react";
import { connect } from "react-redux";
import { markAsRead } from "../../actions/mailList";
import { markAsImportant } from "../../actions/mailList";
//import {NavLink} from 'react-router-dom';
//import Mail from '../Mail';
import CheckBox from "../CheckBox";
import "./maillist.scss";

class MailList extends Component {
  state = {
    selectedMsg: {},
    starMsg: []
  };

  getStatus = item => {
    let openedMsg = this.props.mailsToShow;

    return openedMsg.includes(item) ? null : "hidden";
  };

  handleSubmit = event => {
    event.preventDefault();
    alert("form submited!");
    //this.props.dispatch(markAsRead(this.state.selectedMsg));
  };

  toggleMsg = item => {
    alert("implement read mail later" + item);
  };

  render() {
    const checkboxForm = "checkbox-form";
    const importantFrom = "important-form";
    let mailList = this.props.mailsToShow.map(item => {
      let importantStatus = item.important === true ? "star" : "no-star";
      return (
        <li key={item.id} className={item.status ? "let" : "let active-letter"}>
          <CheckBox
            label=""
            name={item.id}
            isSelected={item.selected}
            id={item.id}
          />

          {/*IMPORTANT BUTTON TODO*/}
          <button
            className={importantStatus}
            id={item.id}
            form={importantFrom}
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
          <button className="cb__delete-btn">Delete</button>
          <button
            type="submit"
            form={checkboxForm}
            className="cb__mark-read-btn"
          >
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
    mailsToShow: state.mailList[activeFolder]
  };
}

export default connect(mapStateToProps)(MailList);
