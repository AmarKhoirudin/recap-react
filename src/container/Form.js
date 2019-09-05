import React, { Component } from "react";
import { Button, Form, Input } from "../components/Form";
import "./Form.css";

class FormContainer extends Component {
  render() {
    return (
      <div className="login">
        <Form onSubmit={this.props.onSubmit}>
          <span className="loginuser">Username : </span>
          <Input
            type="email"
            name="email"
            onChange={this.props.onChange}
            value={this.props.username}
          />

          <div className="pas">
            <span className="loginuser">Password : </span>

            <Input
              type="password"
              name="password"
              onChange={this.props.onChange}
              value={this.props.password}
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            />
            <Button textButton="Kirim" />
          </div>
        </Form>
      </div>
    );
  }
}

export default FormContainer;
