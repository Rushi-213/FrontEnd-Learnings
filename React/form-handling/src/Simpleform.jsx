import { useState } from 'react'

export default function Simpleform() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Name:", name);
        console.log("Email:", email);
    }

  return (
    <div>
    <form onSubmit={handleSubmit}>  
        <h1>Simple Form</h1>

        <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your name" />

        <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" />
        
        <button type="submit">Submit</button>
    </form>
    </div>
  )
}
