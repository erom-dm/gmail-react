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
                className = {item.status ? null : 'active-letter'}
                >
                    {item.from} - {item.subject}
                    <p className={this.getStatus(item.id)}>{item.text}</p>
                </li>
            )
        });

        return (
            <div className="mail-list">
                <ul>
                    {mailList}
                </ul>
            </div>
        );
    }
}

export default MailList;