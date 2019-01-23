import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { setActiveFolder } from "../../actions/appState";
import { addMailToMailList } from "../../actions/mailList";
import { setNewMailMsgState } from "../../actions/appState";
import './newemail.scss'

class NewEmail extends Component {
    state = {
            id: '',
            status: true,
            from: 'test@test.ua',
            to: '',
            subject: '',
            text: '',
            important: false,
    };

    generateId = (subj='ph') => {
        return `${subj}_${new Date().getTime()}`
    };

    handleChange = (event) => {
        const value = event.target.value;
        let field = '';

        switch (event.target.id){
            case 'toField':
                field = 'to';
                break;
            case 'subjectField':
                field = 'subject';
                break;
            case 'textField':
                field = 'text';
                break;
            default:
                field = '';
        }
        this.setState(() => ({[field]: value}))
    };

    newSubmit =  this.props.dispatch((dispatch) => {
        dispatch(addMailToMailList(this.state));
        dispatch(setNewMailMsgState({showMsg:true}));
        setTimeout(() => {
            dispatch(setNewMailMsgState({showMsg:false}));
        }, 3000)
    });

    handleSubmit = (event) => {
        event.preventDefault();
        let id = this.generateId(this.state.subject);

        this.setState(
            () => ({id: id}),
            () => this.newSubmit,
        );
    };

    render() {
        let to = this.state.to;
        let subject = this.state.subject;
        let text = this.state.text;

        return (
            <Fragment>
                <div className='new-mail-cont'>
                    <div className='header'>
                        <p>New Email</p>
                        <button onClick={() => this.props.dispatch(setActiveFolder({active:'received'}))}>
                            Close
                        </button>
                    </div>
                    <div className='input-fields'>
                        <form className='new-letter-form' onSubmit={() => this.handleSubmit}>
                            <input
                                id='toField'
                                type="text"
                                autoComplete='off'
                                value={to}
                                placeholder="To"
                                onChange={() => this.handleChange}
                            />
                            <input
                                id='subjectField'
                                type="text"
                                autoComplete='off'
                                value={subject}
                                placeholder="Subject"
                                onChange={() => this.handleChange}
                            />
                            <textarea
                                id='textField'
                                autoComplete='off'
                                value={text}
                                placeholder=""
                                onChange={() => this.handleChange}
                            />
                            <div className='bottom-bar'>
                                <button
                                    className='send-button'
                                    type='submit'
                                >
                                    Send
                                </button>
                                <div className='message-field' >
                                    <p className={this.props.showMsg ? 'new-mail-show-msg' : 'new-mail-hide-msg'}>
                                        Your mail has been sent!
                                    </p>
                                </div>
                            </div>
                        </form>
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
        mailsToShow: state.mailList[activeFolder]
    };
}

export default connect(mapStateToProps)(NewEmail);
