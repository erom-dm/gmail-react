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
                    <label htmlFor="To">To</label>
                    <Field name="To" component={customInput} type="email" placeholder="To..."/>
                </div>
                <div>
                    <label htmlFor="subject">Subject</label>
                    <Field name="subject" component={customInput} type="text" placeholder="Subject"/>
                </div>
                <div>
                    <label htmlFor="content">Content</label>
                    <Field name="content" component={customTextArea} type="textarea" placeholder=""/>
                </div>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default reduxForm({ form: 'new-email' })(EmailForm);