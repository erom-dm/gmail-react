import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import Header from "../Header";
import Menu from "../Menu";
import MailList from "../MailList";
import NewEmail from "../NewEmail";

class Dashboard extends Component {
  render() {
    let activeCategory = this.props.active;
    let mainArea;
    if (activeCategory === "new email") {
      mainArea = <NewEmail />;
    } else if (activeCategory === "received" || activeCategory === "sent") {
      mainArea = <MailList />;
    }

    return (
      // <Route path='/' component={Header} />
      // <Route path='/dashboard' component={Dashboard} />
      <Fragment>
        <Header />
        <div className="main-region">
          <Menu className="main-menu" />
          {mainArea}
        </div>
      </Fragment>
    );
  }
}

function mapStateToProps({ mailList, active, showMsg }) {
  return {
    mailList: {
      received: mailList,
      sent: mailList
    },
    active,
    showMsg
  };
}

export default connect(mapStateToProps)(Dashboard);
