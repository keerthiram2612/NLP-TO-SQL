import "./Loginstyle.css"

import React from 'react'

export default function Login() {
  return (
    <div className="login">
      <div className="container text-center">
        <div className="row">
            <h1>Login</h1>
            <div className="col-md-12">
                <input type="text" /><br />
                <input type="text" />
                <ul className="loginpage">
                    <li>Remember</li><li>Forgot</li>
                </ul>
            </div>
        </div>
      </div>
    </div>
  )
}
