import React, { Component } from 'react';
import './maillist.scss'

class MailList extends Component {
    state = {
        openedMsg: [],
        selectedMsg: [],
        starMsg: [],
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

    handleSubmit = (event) => {
        event.preventDefault();

        console.log(event.target)
    };

    render() {

        let mailList = this.props.mails.map((item) => {
            return (
                <li
                key = {item.id}
                className = {item.status ? 'let' : 'let active-letter'}
                >
                    <input type="checkbox" name={item.id} value={item.id}/>
                    <button className='star' id={item.id}/>
                    <div
                        className='li-content'
                        onClick = {() => this.toggleMsg(item)}
                    >
                        {item.from} - {item.subject}
                        <p className={this.getStatus(item.id)}>{item.text}</p>
                    </div>
                </li>
            )
        });

        return (
            <div className="mail-list-container">
                <form className="mail-list-form" onSubmit={this.handleSubmit}>
                    <div className='mail-list__control-bar'>
                        <button className='cb__delete-btn'>Delete</button>
                        <button type='submit' className='cb__mark-read-btn'>Mark</button>
                    </div>
                    <ul className='mail-list'>
                        {mailList}
                    </ul>
                </form>
            </div>
        );
    }
}

export default MailList;