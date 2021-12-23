import React, { useState } from 'react'

const defaultFormData ={
    title: "",
    body: "",
}

const Form = () => {
    const [formData, setFormData] = useState( defaultFormData );

    const { title, body } = formData;

    const onChange = (e) => 
        setFormData((prevState) => ({
            ...prevState,
            [e.target.id]: e.target.value,        
    }))

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
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
            
        </div>
    )
}

export default Form
