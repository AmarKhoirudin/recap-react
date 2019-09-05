import React, { Component } from "react";
import List from "./container/List";
import Form from "./container/Form";
import "./App.css"

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        {
          email: "amar@gmail.com",
          password: "123"
        },  
        {
          email: "frontend@gmail.com",
          password: "321"
        },
        {
          email: "react-pondokit@gmail.com",
          password: "123456"

        }
      ]
    };
    this.onChangeText = this.onChangeText.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChangeText(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const { email, data, password } = this.state;
    if (email === undefined || email === "" ) {
      alert("Email kosong");
    } else if(password === undefined || password === ""){ 
      alert("password kosong");
    }else {
      data.push({ email, password });
      this.setState({
        data,
        email: "",
        password: ""
      });
    }
  }

  render() {
    const { email, password } = this.state;
    return (
      <div className="App">
        <div className="app">
        <Form
          onChange={this.onChangeText}
          username={email}
          password={password}
          onSubmit={this.onSubmit}
        />
        <List data={this.state.data} />
      </div>
      </div>
    );
  }
}
