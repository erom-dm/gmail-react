import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import EmailForm from "./EmailForm";
import { addMailToMailList } from "../../actions/mailList";
import { setActiveFolder } from "../../actions/appState";
import "./newemail.scss";

class NewEmail extends Component {

  getInitialValues = () => {
    return {
        id: this.generateId(),
        readStatus: true,
        from: "test@test.ua",
        to: "",
        subject: "",
        text: "",
        important: false,
        selected: false
    }
  };

  generateId = (subj = "ph") => {
     return `${subj}_${new Date().getTime()}`;
  };

  // handleChange = event => {
  //   const value = event.target.value;
  //   let field = "";
  //
  //   switch (event.target.id) {
  //     case "toField":
  //       field = "to";
  //       break;
  //     case "subjectField":
  //       field = "subject";
  //       break;
  //     case "textField":
  //       field = "text";
  //       break;
  //     default:
  //       field = "";
  //   }
  //   this.setState(() => ({ [field]: value }));
  // };

  // newSubmit =  this.props.dispatch((dispatch) => {
  //     dispatch(addMailToMailList(this.state));
  //     dispatch(setNewMailMsgState({showMsg:true}));
  //     setTimeout(() => {
  //         dispatch(setNewMailMsgState({showMsg:false}));
  //     }, 3000)
  // });

  handleSubmit = (event) => {
      event.preventDefault();
      this.props.addNewMail(this.props.newMail);
      this.props.setActiveFolder({active: 'sent'});
  };

  render() {

    return (
      <Fragment>
        <div className="new-mail-cont">
          <div className="header">
            <p>New Email</p>
            {/* Add on click to button! */}
            <button>Close</button>
          </div>
          <div className="input-fields">
            <EmailForm handleSubmit={this.handleSubmit} initialValues={this.getInitialValues()}/>
          </div>
        </div>
      </Fragment>
    );
  }
}

function mapStateToProps(state) {
  let activeFolder = state.appState.activeFolder.active;

  return {
    showMsg: state.appState.showNewMsgNotif.showMsg,
    mailsToShow: state.mailList[activeFolder],
    newMail: state.form,
  };
}

const mapDispatchToProps = {
    addNewMail: addMailToMailList,
    setActiveFolder: setActiveFolder,
};

export default connect(mapStateToProps, mapDispatchToProps)(NewEmail);
