import React, { useState } from "react";

function ProfileCreation() {
  const [form, setForm] = useState({
    name: "",
    age: "",
    gender: "",
    location: "",
    interests: "",
    profilePicture: null,
  });

  const [message, setMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleFileChange = (e) => {
    setForm({ ...form, profilePicture: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !form.name ||
      !form.age ||
      !form.gender ||
      !form.location ||
      !form.interests ||
      !form.profilePicture
    ) {
      setMessage("All fields are required.");
      return;
    }
    setMessage("Profile created successfully!");
  };

  return (
    <div>
      <h1>Create Your Profile</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="age"
          placeholder="Age"
          value={form.age}
          onChange={handleInputChange}
        />
        <select name="gender" value={form.gender} onChange={handleInputChange}>
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={form.location}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="interests"
          placeholder="Interests"
          value={form.interests}
          onChange={handleInputChange}
        />
        <input type="file" name="profilePicture" onChange={handleFileChange} />
        <button type="submit">Submit</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default ProfileCreation;
