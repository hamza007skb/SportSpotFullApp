import React, { useState, useCallback } from "react";
import emailjs from "emailjs-com";
import auth_bg from "../Assets/Owner_Auth_Bg.png";

export default function AuthPage_Owner() {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    password: "",
    stadiumName: "",
    stadiumAddress: "",
    aim: "",
    photo: null,
  });
  const [errors, setErrors] = useState({});

  const handleChange = useCallback(
    (e) => {
      const { name, value, files } = e.target;
      if (name === "photo") {
        setFormData({ ...formData, photo: files[0] });
      } else {
        setFormData({ ...formData, [name]: value });
      }
    },
    [formData]
  );

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.phoneNumber)
      newErrors.phoneNumber = "Phone Number is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.password || formData.password.length < 8)
      newErrors.password = "Password must be at least 8 characters";
    if (!formData.stadiumName)
      newErrors.stadiumName = "Stadium Name is required";
    if (!formData.stadiumAddress)
      newErrors.stadiumAddress = "Stadium Address is required";
    if (!formData.aim) newErrors.aim = "Owner Aim is required";
    if (!formData.photo) newErrors.photo = "Owner Picture is required";
    return newErrors;
  };

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const formErrors = validate();
      if (Object.keys(formErrors).length > 0) {
        setErrors(formErrors);
      } else {
        console.log("Form Submitted", formData);

        setFormData({
          name: "",
          phoneNumber: "",
          email: "",
          password: "",
          stadiumName: "",
          stadiumAddress: "",
          aim: "",
          photo: null,
        });
        setErrors({});
        alert("Your request for joining is under observation.");
      }
    },
    [formData]
  );

  return (
    <div className="auth-page" style={{ backgroundImage: `url(${auth_bg})` }}>
      <div className="container mt-0 mb-0 pt-3 pb-3">
        <form onSubmit={handleSubmit} className="form-container">
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control border-3 cus_css"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <p className="error-text">{errors.name}</p>}
          </div>
          <div className="mb-3">
            <label className="form-label">Phone Number</label>
            <input
              type="number"
              className="form-control border-3"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
            {errors.phoneNumber && (
              <p className="error-text">{errors.phoneNumber}</p>
            )}
          </div>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              type="email"
              className="form-control border-3"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className="error-text">{errors.email}</p>}
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control border-3"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && <p className="error-text">{errors.password}</p>}
            <div className="form-text" style={{ color: "white" }}>
              More than 8 characters
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label">Stadium Name</label>
            <input
              type="text"
              className="form-control border-3"
              name="stadiumName"
              value={formData.stadiumName}
              onChange={handleChange}
            />
            {errors.stadiumName && (
              <p className="error-text">{errors.stadiumName}</p>
            )}
          </div>
          <div className="mb-3">
            <label className="form-label">Stadium Address</label>
            <input
              type="text"
              className="form-control border-3"
              name="stadiumAddress"
              value={formData.stadiumAddress}
              onChange={handleChange}
            />
            {errors.stadiumAddress && (
              <p className="error-text">{errors.stadiumAddress}</p>
            )}
          </div>
          <div className="mb-3">
            <label className="form-label">Aim to join Us!</label>
            <textarea
              className="form-control border-3"
              name="aim"
              value={formData.aim}
              onChange={handleChange}
              rows="5"
            ></textarea>
            {errors.aim && <p className="error-text">{errors.aim}</p>}
          </div>
          <div className="mb-3">
            <label className="form-label">Upload Photo</label>
            <input
              type="file"
              className="form-control border-3"
              name="photo"
              onChange={handleChange}
            />
            {errors.photo && <p className="error-text">{errors.photo}</p>}
          </div>
          <div className="submit-button-container">
            <button type="submit" className="submit-button">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
