import React, { Component, Fragment } from "react";
import { connect } from 'react-redux';
import {handleInitialData} from "../../actions/shared";
import Header from "../Header";
import Menu from "../Menu";
import MailList from "../MailList";
import NewEmail from "../NewEmail";
import { mailList } from "../../utils/fakeState";
import { active } from "../../utils/fakeState";
import { showMsg } from "../../utils/fakeState";


class Dashboard extends Component {

    componentDidMount(){
        this.props.dispatch(handleInitialData(
            mailList, active, showMsg
        ))
    }

    changeFolder = folderId => {
        this.setState({
            active: folderId
        });
    };

    markAsRead = (ids) => {
        let newMailList = this.props.mailList[this.state.active].map(item => {
            return { ...item };
        });
        let listToUpdate = [];

        for (const key of Object.keys(ids)) {
            for (let obj of newMailList) {
                if (obj.id === key && ids[key] === true) {
                    listToUpdate.push(obj);
                }
            }
        }

        let allRead = true;
        for (let el of listToUpdate) {
            if (el.status === false) {
                allRead = false;
            }
        }
        let markingMode = allRead === true ? "mark as unread" : "mark as read";

        if (markingMode === "mark as read") {
            listToUpdate = listToUpdate.map(item => {
                let newObj = { ...item };
                newObj.status = true;
                return newObj;
            });
        } else {
            listToUpdate = listToUpdate.map(item => {
                let newObj = { ...item };
                newObj.status = false;
                return newObj;
            });
        }

        for (const obj of newMailList) {
            for (const el of listToUpdate) {
                if (el.id === obj.id) {
                    newMailList.splice(newMailList.indexOf(obj), 1, el);
                }
            }
        }

        this.setState({
            mailList: {
                ...this.state.mailList,
                [this.state.active]: newMailList
            }
        });

    };

    markAsImportant = id => {
        let mailListUpd = this.state.mailList[this.state.active].map(item => {
            let newObj = { ...item };
            if (newObj.id === id) {
                newObj.important = !newObj.important;
            }
            return newObj;
        });

        this.setState({
            mailList: {
                ...this.state.mailList,
                [this.state.active]: mailListUpd
            }
        });

    };

    readMail = id => {
        let mailListUpd = this.props.mailList[this.state.active].map(item => {
            let newObj = { ...item };
            if (newObj.id === id) {
                newObj.status = true;
            }
            return newObj;
        });

        this.setState({
            mailList: {
                ...this.state.mailList,
                [this.state.active]: mailListUpd
            }
        });
    };

    /*handleNewEmailSubmit = newEmail => {
        let newSentFolder = this.props.mailList["sent"].map(item => {
            return { ...item };
        });

        newSentFolder.push(newEmail);

        this.setState(
            () => ({
                mailList: {
                    ...this.state.mailList,
                    sent: newSentFolder  //['sent']
                },
                showMsg: true,
            }),
            () => {setTimeout(
                () => {
                    this.setState({
                            showMsg: false,
                })}, 3000
            )}
        );
    };*/

    render() {
        console.log('Dashboard props: ');
        console.log(this.props);

        let activeCategory = this.props.active;
        let mailToDisplay = this.props.mailList[activeCategory];
        let mainArea;
        if (activeCategory === "new email") {
            mainArea = (
                <NewEmail
                    onSubmit={this.handleNewEmailSubmit}
                    changeFolder={this.changeFolder}
                    showMsg={this.state.showMsg}
                />
            );
        } else if (activeCategory === "received" || activeCategory === "sent") {
            mainArea = (
                <MailList
                    mails={mailToDisplay}
                    readMail={this.readMail}
                    markAsRead={this.markAsRead}
                    markAsImportant={this.markAsImportant}
                />
            );
        }

        return (
            // <Route path='/' component={Header} />
            // <Route path='/dashboard' component={Dashboard} />
            <Fragment>
                <Header />
                <div className="main-region">
                    <Menu
                        className="main-menu"
                        changeFolder={this.changeFolder}
                        active={activeCategory}
                    />
                    {mainArea}
                </div>
            </Fragment>
        );
    }
}

function mapStateToProps({mailList, active, showMsg}) {
    return{
        mailList: {
            received: mailList.received,
            sent: mailList.sent,
        },
        active,
        showMsg,
    }
}


export default connect(mapStateToProps)(Dashboard);
