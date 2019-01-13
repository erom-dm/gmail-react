import React, { Component } from 'react';
import './maillist.scss'

class MailList extends Component {
    state = {
        openedMsg: [],
    };

    toggleMsg = (item) => {
        let temp = this.state.openedMsg;

        if(temp.includes(item.id)){
            temp.splice(temp.indexOf(item.id), 1);
        } else {
            if(!item.status){
                this.props.readMail(item.id);
            }
            temp.push(item.id);
        }

        this.setState({
            openedMsg: temp,
        })
    };

    getStatus = (item) => {
        let openedMsg = this.state.openedMsg;

        return openedMsg.includes(item) ? null : 'hidden';
    };

    render() {

        let mailList = this.props.mails.map((item) => {
            return (
                <li
                key = {item.id}
                onClick = {() => this.toggleMsg(item)}
                className = {item.status ? 'let' : 'let active-letter'}
                >
                    {item.from} - {item.subject}
                    <p className={this.getStatus(item.id)}>{item.text}</p>
                </li>
            )
        });

        return (
            <div className="mail-list-container">
                <ul mail-list>
                    {mailList}
                </ul>
            </div>
        );
    }
}

export default MailList;