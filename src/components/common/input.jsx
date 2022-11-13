import React from 'react';


const Input = ({ name, label, value, autoFocus, error, type, onChange }) => {
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <input
                onChange={onChange}
                value={value}
                autoFocus={autoFocus}
                id={name}
                type={type}
                className="form-control"
                name={name}
            />
            {error && <div className="alert alert-danger">{error}</div>}
        </div>
    );
}
 
export default Input;