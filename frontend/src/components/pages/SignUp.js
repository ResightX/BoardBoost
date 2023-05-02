import React, { Component } from 'react'
import './SignUp.css';

export default class SignUp extends Component {
  render() {
    return (
      <form className="signupForm">
        <h2>Sign Up</h2>
        <div className="mb-3">
          <label>First name</label>
          <input
            type="text"
            className="form-control"
            placeholder="First name"
          />
        </div>
        <div className="mb-3">
          <label>Last name</label>
          <input type="text" className="form-control" placeholder="Last name" />
        </div>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>
        <div className="mb-3">
          <label>Re-enter password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Re-enter password"
          />
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>
		<a href="/signin"  className="forgot-password text-center">Already registered?</a>
      </form>
    )
  }
}

