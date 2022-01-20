import React,{useState} from 'react';
import UserPool from '../UserPool';

function Signup() {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("")
    const onSubmit = (e)=>{
        e.preventDefault();
        UserPool.signUp(email,password,[],null ,(err,data)=>{
            if(err){
                console.error(err)
            }
            console.log(data)
        })
    }
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}></input>
                <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}></input>
<button type='submit'>Signup</button>
            </form>
        </div>
    )
}

export default Signup;
