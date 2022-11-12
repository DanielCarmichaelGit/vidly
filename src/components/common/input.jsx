import React from 'react';


const Input = ({ name, label, value, onChange, ref, autoFocus }) => {
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <input
                onChange={onChange}
                value={value}
                autoFocus={autoFocus}
                ref={ref}
                id={name}
                type="text"
                className="form-control"
                name={name}
            />
        </div>
    );
}
 
export default Input;