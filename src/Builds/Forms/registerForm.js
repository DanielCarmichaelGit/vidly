export const registerForm = [
    {
        name: 'name',
        type: 'text',
        placeholder: 'Elon Musk',
        label: 'Full Name',
        errorMessage: 'Name required is required',
        required: true
    },
    {
        name: 'email',
        type: 'email',
        placeholder: 'elon@tesla.com',
        label: 'Email',
        errorMessage: 'Email is required',
        required: true
    },
    {
        name: 'password',
        type: 'password',
        placeholder: 'password',
        label: 'Password',
        errorMessage: 'Password is required',
        required: true
    },
    {
        name: 'repeat-password',
        type: 'password',
        placeholder: 'repeat password',
        label: 'Repeat Password',
        errorMessage: 'passwords did not match',
        required: true
    }
]