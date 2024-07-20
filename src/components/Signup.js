import React from 'react'
import {  useState } from 'react'
import {useNavigate} from "react-router-dom";
export default function Signup() {
    const navigate = useNavigate();

    const [credentials, setcredentials] = useState({name:"",email:"",password:""});
    const host = "https://mernbackend-i4d8.onrender.com"

    const handlesubmit=async(event)=>{

        event.preventDefault();

        const name = credentials.name;
        const email = credentials.email;
        const password= credentials.password;

        
        const resposne = await fetch(`${host}/auth/createuser`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({name,email,password })

        });
        const json = await resposne.json()
        if((!json.error) && (json.authtoken)){
            console.log("success")
            //save authtoken
            localStorage.setItem('token',json.authtoken);
            navigate("/");

        }
        else{
            alert(json.error)
        }
    }

    const onchange=(e)=>{
        setcredentials({...credentials,[e.target.name]:e.target.value})
    }




    return (
        <div className="container my-5">
            <h1>iNotebook</h1>
            <h5>your notes a signup away, create your account now</h5>
            <form onSubmit={handlesubmit}>
            <div className="mb-3 my-5">
                    <label  className="form-label"><>Name</></label>
                    <input type="text" className="form-control"  placeholder="enter your name" value={credentials.name} onChange={onchange} name="name"/>
                </div>
                <div className="mb-3">
                    <label  className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" onChange={onchange} placeholder="name@example.com" value={credentials.email} name="email" />
                </div>
                <label  className="form-label">Create your password</label>
                <input type="password" id="inputPassword5" className="form-control" value={credentials.password} onChange={onchange} name="password"/>
                <div id="passwordHelpBlock" className="form-text">
                    Your password must be 8-20 characters long
                </div>
                <div className="col-auto my-3">
                    <button type="submit" className="btn btn-primary mb-3" on >Signup</button>
                </div>
            </form>

        </div>
    )
}
