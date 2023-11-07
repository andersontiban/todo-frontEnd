import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


function AddTodo() {
    const [todo, setTodo] = useState("")
    const navigate = useNavigate();

    const handleChange = (e) => {
        setTodo(e.target.value)
        };
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(todo)

        const todoData = {
            content : todo
        }

        try {
            const token = sessionStorage.getItem("token");

            if (!token) {
                console.log('No token found')
                navigate("/login")
                return
            }


            const response = await axios.post("https://todo-list-springboot.onrender.com/api/v1/new", todoData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            navigate("/dashboard")
        } catch (error) {
            console.log(error)
        }
    }

    // const handleButtonClick = () => {
    //     navigate("/dashboard")
    // }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input
                type = "text"
                name = "content"
                value = {todo}
                onChange = {handleChange}
                placeholder='Enter todo'>
                </input>
                <button type = "submit">Add</button>
            </form>
        </div>
    )
}

export default AddTodo;