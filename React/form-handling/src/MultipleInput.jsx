import { useState } from 'react'

function MultipleInput() {
    const [FormData, setFormData] = useState({
        name: "",
        email: "",
        city: "",
        age: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data:", FormData);
    }

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    }

  return (
    <div>
        <h2>Multiple Input Form</h2>
        <form onSubmit={handleSubmit}>
            <label>Enter name:</label>
            <input type="text" name="name" value={FormData.name} onChange={handleChange} /><br />
            <label>Enter email:</label>
            <input type="email" name="email" value={FormData.email} onChange={handleChange} /><br /> 
            <label>Enter city:</label>
            <input type="text" name="city" value={FormData.city} onChange={handleChange} /><br />    
            <label>Enter age:</label>
            <input type="number" name="age" value={FormData.age} onChange={handleChange} /><br /><br/>

            <input type="submit" value="Submit" />
        </form>
    </div>
  )
}

export default MultipleInput