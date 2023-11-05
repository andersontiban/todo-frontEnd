import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DataFetchComponent() {
    const [data, setData] = useState(null);

    useEffect(() => {
        axios.get('https://todo-list-springboot.onrender.com/api/v1/testHello', {
            headers: {
                'Authorization': `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhbmR5dGliYW40QGdtYWlsLmNvbSIsImlhdCI6MTY5ODkzMzc4OCwiZXhwIjoxNjk4OTM1MjI4fQ.Tekx1sj34dcLwBItEDx0T8RMVRdfxiQUe2Txj0YQf1s`
            }
        })
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching data:", error);
            });
    }, []);

    return (
        <div>
            {/* Render your data here */}
            {data && <div>{data}</div>}
            <h1>You come here often</h1>
        </div>
    );

}
export default DataFetchComponent;