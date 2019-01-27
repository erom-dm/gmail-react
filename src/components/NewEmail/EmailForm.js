import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form';
import customInput from './customInput';
import customTextArea from './customTextArea';

class EmailForm extends Component{
    render(){
        const { handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit}>
                <div>
                    <Field name="to" component={customInput} type="email" placeholder="To..."/>
                </div>
                <div>
                    <Field name="subject" component={customInput} type="text" placeholder="Subject"/>
                </div>
                <div>
                    <Field name="text" component={customTextArea} type="textarea" placeholder=""/>
                </div>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default reduxForm({ form: 'newEmail' })(EmailForm);