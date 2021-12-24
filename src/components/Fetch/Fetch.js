import React, { useState, useEffect } from 'react';
import axios from 'axios'

const url = "https://jsonplaceholder.typicode.com/posts"

const Fetch = () => {
    const [data, setData] = useState(null);
    // Loading state
    const [loading, setLoading] = useState(false);
    // Error state
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                setLoading(true);

                const res = await axios.get(url);

                setData(res.data);

                setLoading(false);  
                
                setError(false);  
            } catch (error) {
                setError(true); 
                setLoading(false);  
            }            
        }
        fetchPosts();
    }, [])


    return (
        <>
            {loading && 'loading ... '}

            {error && 'Error! Could not fetch data.'}

            {data && data.map(post=>{
                const { id, title, body } = post;
                return <article key={id}>
                    <p>{title}</p>
                    <p>{id}</p>
                    <p>{body}</p>
                </article>
            })}   
        </>
    )
}

export default Fetch
