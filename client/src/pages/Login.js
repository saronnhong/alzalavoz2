
import React, { Component } from "react";
import axios from 'axios';
import Admin from "../pages/Admin";
import "./login.css";

class Login extends Component {
    state = {
        user: "ann",
        password: "86",
        id_token: "123456"
    };

    handleInputChange = event => {
        event.preventDefault();
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
        console.log(this.state);
        
      };
    submitLogin = () => {
        axios.post('/logincheck', {user: this.state.user, password: this.state.password})
        .then(res => {
            if(res.data === true){
                localStorage.setItem('id_token', this.state.id_token);
                window.location = '/admin';
            }else{
                alert("Password is incorrect. Please try again.");
            }
        })
    };

    render() {
        return (
            <div className="container loginPage">
                <div className="row">
                    <div className="col-md-6">
                        <h2>Log In</h2>
                        <form>
                            <div class="form-group">
                                <label for="exampleInputUser1">User Name</label>
                                <input  class="form-control" id="exampleInputUser1" name="user" value={this.state.user} onChange={this.handleInputChange} placeholder="Enter username" />
                                
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Password</label>
                                <input type="password" class="form-control" id="exampleInputPassword1" name="password" value={this.state.password} onChange={this.handleInputChange} placeholder=" Enter password" />
                            </div>
                            <button type="submit" class="btn btn-primary" onClick={()=> this.submitLogin()}>Submit</button>
                        </form>
                    </div>
                </div>

            </div>
        )
    }
}

export default Login;
