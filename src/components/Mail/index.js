import React, { Component, Fragment } from 'react';
import './Mail.scss'

class Mail extends Component {

    state = {
        mailList: {

        }
    };

    // componentDidMount () {
    //     let mailInfo = this.state.mailList.getted.map( (value)=>{
    //         if ( value.id == Number(this.props.match.params.id) ) {
    //             this.setState({mailInfo: value})
    //         }
    //     })
    // }


    render(){
        return (
            <Fragment>
                <div className='mail-container'>
                    something
                </div>
            </Fragment>
        )
    }
}

export default Mail;