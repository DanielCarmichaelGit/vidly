import React from 'react';
import Input from './input';

const Form = (props) => {
    const {
        handleSubmit,
        formStyle = 'rounded bg-light p-5',
        headerStyle = 'display-4 font-weight-bold mb-5 text-lg-center',
        importedForm, //look at loginForm in utils
        formLabel, //header (h1) of form
        buttonStyle = 'btn btn-primary w-100 mt-4',
        btnText = formLabel,
        btnType = 'submit',
        disabled,
        errors,
        handleChange
    } = props;

    return (
        <form className={formStyle} onSubmit={handleSubmit}>
            <h1 className={headerStyle}>{formLabel}</h1>
            {   
                importedForm.map(obj => (
                    <Input
                        key={obj.name}
                        name={obj.name}
                        label={obj.label}
                        placeholder={obj.placeholder}
                        type={obj.type}
                        errorMessage={errors[obj.name]}
                        onChange={handleChange}
                    />
                )
                )
            }
            <button type={btnType} disabled={disabled} className={buttonStyle}>
                {
                    btnText
                }
            </button>
        </form>
    );
}
 
export default Form;