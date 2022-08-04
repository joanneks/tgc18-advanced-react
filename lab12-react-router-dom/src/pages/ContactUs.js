import React from 'react';
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
// a hook is a function provided by React or third party package
// userNavigate creates a function which we can use to change'pages
// creates a navigation function returned from useNavigate();
// when you call hook function, you get a callback function
// using hooks allows us to add state variables to a functional based component

export default function ContactUs(){
    const navigate = useNavigate();
    const [fullname,setFullname] = useState("");
    const [email,setEmail] = useState("");



    const updateFullName= (e)=>{
        setFullname(e.target.value)
    }
    const updateEmail= (e)=>{
        setEmail(e.target.value)
    }
    // function changeInput (){
    //     setFullname();
    //     setEmail();
    // }

    function submitForm(){
        // use the returned navigate function to change pages
        navigate('/form-submitted');
    }
    return(
        <React.Fragment>
            <h1>Contact Us</h1>
            <div>
                <label>Full Name:</label>
                <input type="text" name="fullname" value={fullname} onChange={updateFullName}/>
            </div>
            <div>
                <label>Email:</label>
                <input type="text" name="email" value={email} onChange={updateEmail}/>
            </div>
            <h3>{fullname}</h3>
            <h3>{email}</h3>
            
            <button onClick={submitForm}>Submit</button>
        </React.Fragment>
    )
}