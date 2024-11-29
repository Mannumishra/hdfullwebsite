const PersonalInfoModel = require("../model/PersonalInfo.model")

// Create Personal Info
exports.CreatePersonalInfo = async (req, res) => {
  try {
    console.log(req.body);

    const { firstName, middleName, lastName, email, number, gender, employmentType } = req.body;

    const errorMessage = [];

    // Validate firstName
    if (!firstName) {
      errorMessage.push("First name is required.");
    } else if (typeof firstName !== "string" || firstName.trim().length < 2) {
      errorMessage.push("First name must be at least 2 characters long.");
    }

    // Validate lastName
    if (!lastName) {
      errorMessage.push("Last name is required.");
    } else if (typeof lastName !== "string" || lastName.trim().length < 2) {
      errorMessage.push("Last name must be at least 2 characters long.");
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      errorMessage.push("Email is required.");
    } else if (!emailRegex.test(email)) {
      errorMessage.push("Invalid email format.");
    }

    // Validate phone number
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!number) {
      errorMessage.push("Phone number is required.");
    } else if (!phoneRegex.test(number)) {
      errorMessage.push("Phone number must be a valid 10-digit Indian number starting with 6-9.");
    }

    // Validate gender
    if (!gender) {
      errorMessage.push("Gender is required.");
    } else if (!["Male", "Female", "Other"].includes(gender)) {
      errorMessage.push("Gender must be 'Male', 'Female', or 'Other'.");
    }

    // Validate employmentType
    if (!employmentType) {
      errorMessage.push("Employment type is required.");
    } else if (typeof employmentType !== "string" || employmentType.trim().length < 3) {
      errorMessage.push("Employment type must be at least 3 characters long.");
    }

    if (errorMessage.length > 0) {
      return res.status(400).json({
        success: false,
        message: errorMessage.join(", "),
      });
    }

    const newPersonalInfo = new PersonalInfoModel({
      firstName,
      middleName,
      lastName,
      email,
      number,
      gender,
      employmentType,
    });

    await newPersonalInfo.save();

    res.status(201).json({
      success: true,
      message: "Personal Info added successfully.",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

// Get Personal Info
exports.GetPersonalInfo = async (req, res) => {
  try {
    const personalInfo = await PersonalInfoModel.find();

    if (!personalInfo || personalInfo.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No Personal Info found.",
      });
    }

    res.status(200).json({
      success: true,
      message: "Personal Info retrieved successfully.",
      data: personalInfo,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

// Delete Personal Info
exports.DeletePersonalInfo = async (req, res) => {
  try {
    const personalInfo = await PersonalInfoModel.findById(req.params.id);

    if (!personalInfo) {
      return res.status(404).json({
        success: false,
        message: "Personal Info not found.",
      });
    }

    await personalInfo.deleteOne();

    res.status(200).json({
      success: true,
      message: "Personal Info deleted successfully.",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};