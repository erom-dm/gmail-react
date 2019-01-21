import React, { Component } from "react";
import { connect } from "react-redux";
import { markAsRead } from "../../actions/mailList";
import { markAsImportant } from "../../actions/mailList";
//import {NavLink} from 'react-router-dom';
import CheckBox from "../CheckBox";
//import Mail from '../Mail';
import "./maillist.scss";

class MailList extends Component {
  state = {
    selectedMsg: {},
    starMsg: []
  };

  componentDidMount() {
    const mails = this.props.mailsToShow;
    let checkboxInitialState = {};

    mails.forEach(mail => (checkboxInitialState[mail.id] = false));

    this.setState({ selectedMsg: checkboxInitialState });
  }

  getStatus = item => {
    let openedMsg = this.props.mailsToShow;

    return openedMsg.includes(item) ? null : "hidden";
  };

  handleCheckboxChange = event => {
    const { name } = event.target;

    this.setState(prevState => ({
      selectedMsg: {
        ...prevState.selectedMsg,
        [name]: !prevState.selectedMsg[name]
      }
    }));
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.dispatch(markAsRead(this.state.selectedMsg));
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
            isSelected={this.state.selectedMsg[item.id]}
            onCheckboxChange={this.handleCheckboxChange}
            id={item.id}
          />

          <button
            className={importantStatus}
            id={item.id}
            onClick={() => this.props.dispatch(markAsImportant(item.id))}
            form={importantFrom}
          />
          <div className="li-content" onClick={() => this.toggleMsg(item)}>
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
  return {
    mailsToShow: state.mailList[state.active.active]
  };
}

export default connect(mapStateToProps)(MailList);
