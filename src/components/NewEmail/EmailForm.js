import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import customInput from "./customInput";
import customTextArea from "./customTextArea";

class EmailForm extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit} className={"new-letter-form"}>
        <Field
          classN={"toField"}
          name="to"
          component={customInput}
          type="email"
          placeholder="To..."
        />
        <Field
          classN={"subjectField"}
          name="subject"
          component={customInput}
          type="text"
          placeholder="Subject"
        />
        <Field
          classN={"textField"}
          name="text"
          component={customTextArea}
          type="textarea"
          placeholder=""
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default reduxForm({ form: "newEmail" })(EmailForm);
