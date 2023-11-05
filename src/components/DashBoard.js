import axios from 'axios';
import React, { useState, useEffect } from 'react';
import '../DashBoard.css'

function DashBoard() {
    const [data, setData] = useState([])

    useEffect(() => {

        const fetchData = async () => {
            try {
                const token = sessionStorage.getItem('token')
                const response = await axios.get('http://localhost:8080/api/v1/todos', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setData(response.data)
            } catch (error) {
                console.log(`There was an error getting the data ${error}`)
            }
        }

        fetchData();
    }, [])

    return(
        <div>
            {data.map(item => (
                <div key = {item.id}>
                    <p>{item.content}</p>
                </div>
            ))}
        </div>
    )

}

export default DashBoard;