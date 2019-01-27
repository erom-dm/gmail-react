import React, { Fragment } from 'react';

const customInput = (props) => {
    const {input, type, placeholder} = props;
    //const errorClass = meta.error ? 'error' : null
    return (
        <Fragment>
            <input {...input} type={type} placeholder={placeholder}/>
           {/* {meta.error && meta.touched && <div>{meta.error}</div>}*/}
        </Fragment>
    )
};

export default customInput;