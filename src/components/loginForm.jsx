import React, { useState } from "react";
import Input from "./common/input";
import { validate } from '../utils/validate';

const LoginForm = () => {
    const [values, setValues] = useState({
        username: '',
        password: ''
    });
    const [errors, setErrors] = useState({});

    const loginForm = [
        {
            name: 'username',
            type: 'text',
            placeholder: 'Username',
            label: 'Username',
            errorMessage: 'Username is required',
            required: true
        },
        {
            name: 'password',
            type: 'password',
            placeholder: 'password',
            label: 'Password',
            errorMessage: 'Password is required',
            required: true
        }
    ]

    function handleSubmit(e) {
        e.preventDefault();
    }

    function handleChange(e) {
        setValues({ ...values, [e.target.name]: e.target.value })

        setErrors({...validate(values).validatedErrors})
        console.log(errors)
    }

    return (
        <form className="rounded bg-light p-5" onSubmit={handleSubmit}>
            <h1 className="display-4 font-weight-bold mb-5 text-lg-center">Login</h1>
            {   
                loginForm.map(obj => (
                    <Input
                        key={obj.name}
                        name={obj.name}
                        label={obj.label}
                        placeholder={obj.placeholder}
                        type={obj.type}
                        value={values[obj.name]}
                        errorMessage={obj.errorMessage}
                        onChange={handleChange}
                    />
                )
                )
            }
            <button type='submit' className="btn btn-primary w-100 mt-4">Login</button>
        </form>
    );
}


export default LoginForm;
