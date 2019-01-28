import React, { Fragment } from "react";

const customInput = props => {
  const { input, type, placeholder, classN } = props;
  //const errorClass = meta.error ? 'error' : null
  return (
    <Fragment>
      <input
        {...input}
        className={classN}
        type={type}
        placeholder={placeholder}
      />
      {/* {meta.error && meta.touched && <div>{meta.error}</div>}*/}
    </Fragment>
  );
};

export default customInput;
