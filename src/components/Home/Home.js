import React, { Component,useState } from "react";
import { Button } from "reactstrap";
import { Redirect } from "react-router-dom";
import "./Home.css";
import axios from "axios";
import { Books } from "../Books/Books";

export default class Home extends Component {

 

  state = {
    navigate: false,
  };

  


  onLogoutHandler = () => {
    localStorage.clear();
    this.setState({
      navigate: true,
    });
  };
  render() {
    const user = JSON.parse(localStorage.getItem("userData"));
    const { navigate } = this.state;
    if (navigate) {
      return <Redirect to="/" push={true} />;
    }
    return (
      <div className="container  border">
        <h3> HomePage</h3>
        <div className="row">
          <div className="col-xl-9 col-sm-12 col-md-9 text-dark">
            <h5> Welcome, to Your Dashboard </h5> You have Logged in
            successfully.
            <Books></Books>
          </div>
          <div className="col-xl-3 col-sm-12 col-md-3">
            <Button
              className="btn btn-primary text-right"
              onClick={this.onLogoutHandler}
            >
              Logout
            </Button>
          </div>
        </div>
      </div>
    );
  }
}
