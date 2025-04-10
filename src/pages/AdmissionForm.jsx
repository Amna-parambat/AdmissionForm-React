import React, { useState } from "react";
import './style.css';


const AdmissionForm = () => {
  const [formData, setFormData] = useState({
    Student_Name: "",
    Date_of_Birth: "",
    Admission_Number: "",
    Place: "",
    District: "",
    State: "",
    Pincode: "",
    Mobile: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    setSubmitted(true);
  
    if (
      formData.Student_Name === "" ||
      formData.Date_of_Birth === "" ||
      formData.Admission_Number === "" ||
      formData.Place === "" ||
      formData.District === "" ||
      formData.State === "" ||
      formData.Pincode === "" ||
      formData.Mobile === ""
    ) {
      alert("Fill all fields compulsorily.");
    } else {
      alert("Your Data Stored...");
      
      setFormData({
        Student_Name: "",
        Date_of_Birth: "",
        Admission_Number: "",
        Place: "",
        District: "",
        State: "",
        Pincode: "",
        Mobile: "",
      });
    }
  };
  

  return (
    <div className="form-container"> 
      <h2>Student Admission Form</h2>
        <form onSubmit={handleSubmit}>
        <input type="text" name="Student_Name" placeholder="Full Name" value={formData.Student_Name} onChange={handleChange} required />
        <input type="date" name="Date_of_Birth" value={formData.Date_of_Birth} onChange={handleChange} required />
        <input type="text" name="Admission_Number" placeholder="Admission Number" value={formData.Admission_Number} onChange={handleChange} required />
        <input type="text" name="Place" placeholder="Place" value={formData.Place} onChange={handleChange} required />
        <input type="text" name="District" placeholder="District" value={formData.District} onChange={handleChange} required />
        <input type="text" name="State" placeholder="State" value={formData.State} onChange={handleChange} required />
        <input type="number" name="Pincode" placeholder="Pincode" value={formData.Pincode} onChange={handleChange} required />
        <input type="tel" name="Mobile" placeholder="Mobile Number" value={formData.Mobile} onChange={handleChange} required />
        <button type="submit">Submit</button>
        < a href="/Success">Click Here to AdmissionForm Updation</a>
      </form>
    </div>
  );
};

export default AdmissionForm;