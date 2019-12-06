import React, { Component } from 'react';
import {Button, Row, Col, FormGroup, Label, Input, Form} from 'reactstrap';


class Login extends Component {
  state = {
    loginUsername: "",
    loginPassword: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  render() {
    return (
      <div>
      <h1>Login</h1>
      <Form className="login" onSubmit={e => this.props.loginSubmitHandler(e, this.state)}>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="Login Username">Username</Label>
              <Input type="text" name="loginUsername" id="loginUsername" placeholder="Enter Username" value={this.state.loginUsername}
            onChange={this.handleChange} />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="Login Password">Password</Label>
              <Input type="text" name="loginPassword" id="loginPassword" placeholder="Enter Password" value={this.state.loginPassword}
            onChange={this.handleChange}/>
            </FormGroup>
          </Col>
        </Row>
        <Button>Submit</Button>
        </Form>
      </div>
    )
  }
}

export default Login;
