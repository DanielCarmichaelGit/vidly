import React, { useState, useEffect } from "react";
import Input from "./common/input";
import { validate } from "../utils/validate";

const LoginForm = () => {
    const [account, setAccount] = useState({username:'',password:''});
    const [errors, setErrors] = useState({});

    function handleChange(e) {
        const currentAccount = account;
        const accountState = {...currentAccount};
        accountState[e.target.name] = e.target.value;
        setAccount(accountState);
    }

    function handleSubmit(e) {
        e.preventDefault();
        const { validatedErrors } = validate(account);
        setErrors({...validatedErrors});
    }

    useEffect(() => {
        console.log(errors)
    }, [errors]);

    return (
        <form className="form" onSubmit={handleSubmit}>
            <Input
                name={'username'}
                label={'username'}
                value={account.username}
                autoFocus={true}
                type={'text'}
                onChange={handleChange}
            />
            <Input
                name={'password'}
                label={'password'}
                value={account.password}
                autoFocus={false}
                type={'password'}
                onChange={handleChange}
            />
            <button type='submit' className="btn btn-primary">Login</button>
        </form>
    );
}

export default LoginForm;
