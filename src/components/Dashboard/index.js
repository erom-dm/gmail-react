import React, { Component, Fragment } from "react";
import Header from "../Header";
import Menu from "../Menu";
import MailList from "../MailList";
import NewEmail from "../NewEmail";

class Dashboard extends Component {
    state = {
        active: "received",
        mailList: {
            received: [
                {
                    id: "suchUniqueMuchWow",
                    status: false,
                    from: "test@test.ua",
                    to: "test@test.ua",
                    subject: "Some test subject",
                    text:
                        "Сервис онлайн проверки текста на уникальность Text.ru покажет процент уникальности текста. Глубокая и качественная проверка найдет дубликаты и",
                    important: false,
                },
                {
                    id: "someId2",
                    status: true,
                    from: "test@ukr.net",
                    to: "test@test.ua",
                    subject: "Ukr.net hello!",
                    text:
                        "Проверьте грамотность текста онлайн, чтобы исправить все орфографические ошибки. Сервис проверки правописания Адвего работает на 20 языках",
                    important: true,
                }
            ],
            sent: []
        },
        showMsg: false,
    };

    changeFolder = folderId => {
        this.setState({
            active: folderId
        });
    };

    markAsRead = ids => {
        let mailList = this.state.mailList[this.state.active].map(item => {
            let newObj = { ...item };
            return newObj;
        });
        let listToUpdate = [];

        for (const key of Object.keys(ids)) {
            for (let obj of mailList) {
                if (obj.id === key && ids[key] === true) {
                    listToUpdate.push(obj);
                }
            }
        }

        let markingMode = "mark as read";
        let allRead = true;
        for (let el of listToUpdate) {
            if (el.status === false) {
                allRead = false;
            }
        }
        markingMode = allRead === true ? "mark as unread" : "mark as read";

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

        for (const obj of mailList) {
            for (const el of listToUpdate) {
                if (el.id === obj.id) {
                    mailList.splice(mailList.indexOf(obj), 1, el);
                }
            }
        }

        this.setState({
            mailList: {
                ...this.state.mailList,
                [this.state.active]: mailList
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
        let mailListUpd = this.state.mailList[this.state.active].map(item => {
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

    handleNewEmailSubmit = newEmail => {
        let newSentFolder = this.state.mailList["sent"].map(item => {
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
    };

    render() {
        let activeCategory = this.state.active;
        let mailToDisplay = this.state.mailList[activeCategory];
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

export default Dashboard;
