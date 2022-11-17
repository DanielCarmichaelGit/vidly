import React, { useState, useEffect } from "react";
import Form from "./common/form";

import { validate } from "../utils/validations";
import { registerForm } from "../Builds/Forms/registerForm";

const RegisterForm = () => {
    const [values, setValues] = useState({
        username: '',
        password: '',
        repeatPassword: '',
        fullName: ''
    });
    const [errors, setErrors] = useState({});

    function handleSubmit(e) {
        e.preventDefault();
        setErrors({ ...validate() });
    }

    function handleChange(e) {
        setValues({ ...values, [e.target.name]: e.target.value })
        setErrors({ ...validate(values) });
    }

    useEffect(() => {
        setErrors({...validate(values)});
    }, [values]);

    return (
        <div>
            <Form
                handleSubmit={handleSubmit}
                formLabel={'Register'}
                importedForm={registerForm}
                btnText={'Sign Up'}
                disabled={(Object.values(values).length === Object.keys(values).length) && Object.keys(errors).length === 0 ? false : true}
                errors={errors}
                handleChange={handleChange}
            />
        </div>
    );
}


export default RegisterForm;
