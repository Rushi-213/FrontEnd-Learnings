import React from 'react'

export default function Advanceform() {
  const [formData, setFormData] = React.useState({
    gender: "",
    country: "",
    confirm: false
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form data :", formData);
  }
  return (
    <div>Advanceform
      <form onSubmit={handleSubmit}>
        <label>Enter gender:
          <input type="radio" name="gender" value="male" checked={formData.gender === "male"} onChange={(e) => setFormData({ ...formData, gender: e.target.value })} /> Male
          <input type="radio" name="gender" value="female" checked={formData.gender === "female"} onChange={(e) => setFormData({ ...formData, gender: e.target.value })} /> Female
        </label><br></br>
        <label>Enter your country:
          <select name="country" value={formData.country} onChange={(e) => setFormData({ ...formData, country: e.target.value })}>
            <option value="usa">USA</option>
            <option value="canada">Canada</option>
            <option value="uk">UK</option>
          </select>
        </label><br></br>
        <label>
          <input type="checkbox" name="confirm" checked={formData.confirm}
            onChange={(e) =>
              setFormData({ ...formData, confirm: e.target.checked })
            }
          />
          I confirm the information provided is correct
        </label><br></br>
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}
