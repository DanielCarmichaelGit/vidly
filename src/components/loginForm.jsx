import React, { useState, useEffect} from "react";
import Form from "./common/form";

import { validate } from "../utils/validations";
import { loginForm } from "../utils/Forms/loginForm";

const LoginForm = () => {
    const [values, setValues] = useState({
        username: '',
        password: ''
    });
    const [errors, setErrors] = useState({});

    function handleSubmit(e) {
        e.preventDefault();
        setErrors({...validate()});
    }

    function handleChange(e) {
        setValues({ ...values, [e.target.name]: e.target.value })
    }

    useEffect(() => {
        setErrors({...validate(values)});
    }, [values]);

    return (
        <div>
            <Form
                handleSubmit={handleSubmit}
                formLabel={'Login'}
                importedForm={loginForm}
                btnText={'Login'}
                disabled={values.username && values.password && Object.keys(errors).length === 0 ? false : true}
                errors={errors}
                handleChange={handleChange}
            />
        </div>
    );
}


export default LoginForm;
