import React, { Component } from 'react';

const customTextArea = (props) => {
    const {input, type, placeholder} = props;
    return (
        <div>
            <textarea {...input} type={type} placeholder={placeholder}/>
            {/*{meta.error && meta.touched && <div>{meta.error}</div>}*/}
        </div>
    )
};

export default customTextArea;