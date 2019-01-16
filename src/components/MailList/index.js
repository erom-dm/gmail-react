import React, { Component } from "react";
import {NavLink} from 'react-router-dom';
import CheckBox from "../CheckBox";
import Mail from '../Mail';
import "./maillist.scss";

class MailList extends Component {
  state = {
    openedMsg: [],
    selectedMsg: {},
    starMsg: []
  };

  componentDidMount() {
    const { mails } = this.props;
    let checkboxInitialState = {};

    mails.forEach((mail) => (checkboxInitialState[mail.id] = false));

    this.setState({ selectedMsg: checkboxInitialState });
  }

  toggleMsg = item => {
    let temp = this.state.openedMsg;

    if (temp.includes(item.id)) {
      temp.splice(temp.indexOf(item.id), 1);
    } else {
      if (!item.status) {
        this.props.readMail(item.id);
      }
      temp.push(item.id);
    }

    this.setState({
      openedMsg: temp
    });
  };

  getStatus = item => {
    let openedMsg = this.state.openedMsg;

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
    this.props.markAsRead(this.state.selectedMsg);
  };

  render() {
    const checkboxForm = 'checkbox-form';
    const importantFrom = 'important-form';
    let mailList = this.props.mails.map(item => {
      let importantStatus = item.important === true ? 'star' : 'no-star';
      return (
        <li key={item.id} className={item.status ? "let" : "let active-letter"}>
          <CheckBox
            label=""
            name={item.id}
            isSelected={this.state.selectedMsg[item.id]}
            onCheckboxChange={this.handleCheckboxChange}
            id={item.id}
          />

          <button className={importantStatus} id={item.id} onClick={() => this.props.markAsImportant(item.id)} form={importantFrom}  />
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
            <button type="submit" form={checkboxForm} className="cb__mark-read-btn">
              Mark
            </button>
          </div>
          <form id={checkboxForm} className="mail-list-form" onSubmit={this.handleSubmit}>
            <ul className="mail-list">{mailList}</ul>
          </form>
      </div>
    );
  }
}

export default MailList;
