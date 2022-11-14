import React from 'react';


const Input = ({name, value, errorMessage, label, placeholder, type, required, onChange}) => {
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <input
                name={name}
                placeholder={placeholder}
                id={name}
                type={type}
                value={value}
                className="form-control rounded border-0"
                onChange={onChange}
                required={required}
            />
            <div className='p-2 justify-content-center align-content-center'>
                {errorMessage}
            </div>
        </div>
    );
}
 
export default Input;