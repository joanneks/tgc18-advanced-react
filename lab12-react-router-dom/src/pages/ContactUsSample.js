import React from 'react';
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
// a hook is a function provided by React or third party package
// userNavigate creates a function which we can use to change'pages
// creates a navigation function returned from useNavigate();
// when you call hook function, you get a callback function
// using hooks allows us to add state variables to a functional based component

export default function ContactUsSample(){
    const navigate = useNavigate();
    const [formState,setFormState]= useState({
        fullname:'',
        email:''
    })
    const updateFormField = (e) =>{
        setFormState({
            ...formState,[e.target.name]:e.target.value
        })
    }


    function submitForm(){
        // use the returned navigate function to change pages
        navigate('/form-submitted');
    }
    return(
        <React.Fragment>
            <h1>Contact Us</h1>
            <div>
                <label>Full Name:</label>
                <input type="text" name="fullname" value={formState.fullname} onChange={updateFormField}/>
            </div>
            <div>
                <label>Email:</label>
                <input type="text" name="email" value={formState.email} onChange={updateFormField}/>
            </div>
            <h3>{formState.fullname}</h3>
            <h3>{formState.email}</h3>
            
            <button onClick={submitForm}>Submit</button>
        </React.Fragment>
    )
}