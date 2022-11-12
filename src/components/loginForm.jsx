import React, { Component } from "react";
import Input from "./common/input";

class LoginForm extends Component {
  state = {
    account: { username: "", password: "" },
  };

  username = React.createRef();
  password = React.createRef();

  handleSubmit = (e) => {
    e.preventDefault();

    console.log("Submitted");
    const username = this.username.current.value;
  };

  handleChange = ({ currentTarget: input}) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;
    console.log("change");
    this.setState({ account });
  };

  render() {
    const { account } = this.state;
    const { username, password } = React.createRef();

    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
            <Input
                name="username"
                value={account.username}
                ref={username}
                label="Username"
                autoFocus={true}
                onChange={this.handleChange}
            />
            <Input
                name="password"
                value={account.password}
                ref={password}
                label="Password"
                autoFocus={false}
                onChange={this.handleChange}
            />
            <button type="submit" className="btn btn-primary">
                Login
            </button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
