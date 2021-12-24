import React, { useState } from 'react'
import axios from 'axios';

const defaultFormData ={
    title: "",
    body: "",
    userId: 1,
}
const url = "https://jsonplaceholder.typicode.com/posts"

const SetData = () => {
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    const [formData, setFormData] = useState( defaultFormData );

    const { title, body } = formData;

    const onChange = (e) => 
        setFormData((prevState) => ({
            ...prevState,
            [e.target.id]: e.target.value,        
    }))

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(url, formData);
            setSuccess(true); 
        } catch (error) {
            setError(true);
        }

        setFormData(defaultFormData);
    }



    return (
        <div>
            <h1>Form</h1>
            <form onSubmit={onSubmit}>
                <label htmlFor="title">Title</label>
                <input type="text" id="title" value={title} onChange={onChange}/>

                <label htmlFor="body">Body</label>
                <input type="text" id="body" value={body} onChange={onChange}/>

                <button type="submit" >Submit</button>
            </form>
            {error && <p>Oops, counld not update post...</p>}

            {success && <p>Post upload succeeded</p>}
            
        </div>
    )
}

export default SetData
