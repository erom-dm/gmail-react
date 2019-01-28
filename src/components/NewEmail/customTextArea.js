import React, { Fragment } from "react";

const customTextArea = props => {
  const { input, type, placeholder, classN } = props;
  return (
    <Fragment>
      <textarea
        {...input}
        className={classN}
        type={type}
        placeholder={placeholder}
      />
      {/*{meta.error && meta.touched && <div>{meta.error}</div>}*/}
    </Fragment>
  );
};

export default customTextArea;
