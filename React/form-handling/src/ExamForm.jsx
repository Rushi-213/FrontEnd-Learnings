import React from 'react'

export default function ExamForm() {
 const HandleClick =(e)=> {
    e.preventDefault();
    console.log("Name is:"+e.target.name.value);
    console.log("Email is:"+e.target.email.value);
    console.log("Salary is:"+e.target.salary.value);
 }
  return (
    <div>
        <form onSubmit={HandleClick}>
            <label>Enter name:</label>
            <input type="text" name="name"/><br/>
            <label>Enter email:</label>
            <input type="text" name="email"/><br/>
            <label>Enter salary:</label><br/>
            <input type="text" name="salary"/><br/><br/>
            <input type="submit" value="Submit" />

        </form>
    </div>
  )
}
