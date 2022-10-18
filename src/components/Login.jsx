import '../App.css';
import profile from  "../images/usericon.jpeg";
import email from "../images/mail.jpg";
import pwd from "../images/pwd.png";
import axios from 'axios';
import { NavLink, useNavigate } from "react-router-dom";
import React, { useState } from "react";
//import ForgotPasswordComponent from './forgotPassword';

function Login() {

    let navigate = useNavigate();

    const[login, setLogin]=useState({
        email:"",
        password:"",
        role:"",
    });

    const handleChange = (event) =>{
        console.log(event.target.name);
        console.log(event.target.value);

        const newLogin={ ...login };

        newLogin[event.target.name]=event.target.value;

        setLogin(newLogin);
    };

    const handleSubmit = (event) =>{
        event.preventDefault();

        console.log("handleSubmit");

        const newLogin={
            loginEmail:login.loginEmail,
            loginPassword:login.loginPassword,
            role:login.role,
        };


        console.log(newLogin);

        axios.post("http://localhost:9090/login/dto",newLogin)
             .then((res) => {
                console.log(res);
                alert("User loggedin successfully");
                if(login.role==="Admin"){
                navigate("/adminDashboard");
                }
                if(login.role==="Patient"){
                    navigate("/patient");
                }
                if(login.role==="Reporter"){
                    navigate("/reporter")
                }
             })
         }


    return(

        <div className="main">
            <form onSubmit={handleSubmit}>
            <div className="sub-main">
                
                <div>
                <div className="imgs">
                    <div className="container-image">
                        <img src={profile} alt="profile" className="profile"/>
                        
                    </div>
                </div>
                <div>
                    <h1>User Login</h1>
                    <div>
                        <img src={email} alt="email" className="email"/>
                        <input type= "text" value={login.loginEmail}
                        onChange={handleChange} placeholder="Email Id" name="loginEmail" className="name"/>

                    </div>
                    <div className="second-input">
                        <img src={pwd} alt="pwd" className="email"/>
                        <input type= "password" value={login.loginPassword}
                        onChange={handleChange}placeholder="Password" name="loginPassword" className="name"/>
                    </div>
                    <div className="dropdown">
                    <select value={login.role}
                        onChange={handleChange} name="role">
                        <option selected>Role</option>
                        <option value="Admin">Admin</option>
                        <option value="Reporter">Reporter</option>
                        <option value="Patient">Patient</option>
                    </select>
                    </div>
                    <div className="login-button">
                    <button type="submit">Submit</button>
                    </div>
                    <p className="link">
                        <NavLink to="/forgotPassword" >
                        <h4>Forgot password ?</h4>
                        </NavLink>
                        Or <h4>Register</h4>
                    </p>
                </div>
            </div>
        </div>
        </form>
        </div>
    )

}

export default Login;