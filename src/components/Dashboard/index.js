import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import Header from "../Header";
import Menu from "../Menu";
import MailList from "../MailList";
import NewEmail from "../NewEmail";

class Dashboard extends Component {
  render() {
    let activeCategory = this.props.appState.activeFolder.active;
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

function mapStateToProps({ appState, mailList }) {
  return {
    appState,
    mailList
  };
}

export default connect(mapStateToProps)(Dashboard);
