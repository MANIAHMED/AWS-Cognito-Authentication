import React,{useState} from 'react';
import UserPool from '../UserPool';
import {CognitoUser, AuthenticationDetails} from "amazon-cognito-identity-js";

function Login() {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("")
    const onSubmit = (e)=>{
        e.preventDefault();
        const user = new CognitoUser({
            Username: email,
            Pool: UserPool
        });
        const authDetails = new AuthenticationDetails({
            Username:email,
            Password:password
        });
        user.authenticateUser(authDetails,{
            onSuccess: (data)=>{console.log("OnSuccess",data)},
            onFailure: (err) =>{
                console.error("Onfailure",err)
            },
            newPasswordRequired: (data)=>{
                console.log("New Password Required",data);
            }
        })
     
    }
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}></input>
                <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}></input>
<button type='submit' >Login</button>
            </form>
        </div>
    )
}

export default Login;
