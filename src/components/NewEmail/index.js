import React, { Component, Fragment } from 'react';
import './newemail.scss'

class NewEmail extends Component {
    state = {
    };

    render() {

        return (
            <Fragment>
                <div className='new-mail-cont'>
                    <div className='header'>
                        <p>New Email</p>
                        <button>Close</button>
                    </div>
                    <div className='input-fields'>
                        <input className='toField'  type="text" value="" placeholder="To" />
                        <input className='subjectField' type="text" value="" placeholder="Subject" />
                        <input className='textField' type="text" value="" placeholder="Text" />
                    </div>
                    <div className='bottom-bar'>
                        <button className='send-button'>Send</button>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default NewEmail;
