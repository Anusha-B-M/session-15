import React from "react";

const InputWithlabel = ({id, children, type, value, onInputChange}) => (
    <>
        <label htmlFor={id}>{children}</label>
        <input id = {id}  type={type} value={value} onChange={onInputChange} />
    </>
);

export default InputWithlabel;