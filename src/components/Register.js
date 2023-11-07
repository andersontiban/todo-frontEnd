import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


function Register () {
    const [credentials, setCredentials] = useState({email: '', password: ''});
    const navigate = useNavigate();



    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials(prevState => ({
            ...prevState,
            [name]: value
        }));
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(credentials)

        try {
            const response = await axios.post("http://localhost:8080/api/v1/auth/register", credentials)
            const jwtToken = response.data.token;
            
            if (jwtToken != null) {
                //storing jwtToken in session storage
                sessionStorage.setItem("token", jwtToken)
                navigate('/dashboard')
            }
            
            
            
        } catch (error) {

        }
        
    };


    return (
        <div>
            <form onSubmit = {handleSubmit}>
                <input
                type = "email"
                name = "email"
                value = {credentials.email}
                onChange = {handleChange}
                placeholder = 'Email'
                >
                </input>

                <input
                type = "password"
                name = "password"
                value = {credentials.password}
                onChange = {handleChange}
                placeholder = 'Password'>
                </input>
                <button type = 'submit'>Register</button>
            </form>
        </div>
    )
}

export default Register;