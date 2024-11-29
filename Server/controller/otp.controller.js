const OtpModel = require("../model/Otp.model")

exports.CreateOtp = async (req, res) => {
  try {
    console.log(req.body)
    let { otp } = req.body;
    if (!otp) {
      return res.status(400).json({ message: "Please enter OTP" });
    }
    if (otp.length === 6) {
      const newOtp = new OtpModel({
        otp,
      });

      // Save OTP to database
      await newOtp.save();

      // Return success response
      res.status(200).json({
        message: "OTP created successfully",
        data: newOtp,
      });
    } else {
      return res.status(400).json({ message: "OTP must be 6 digits long" });
    }
  } catch (error) {
    console.log("error", error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

  exports.getOtp = async (req, res) => {
    try {
      const AllOtp = await OtpModel.find()
      res.status(200).json({
        success: true,
        message: 'All OTP',
        data: AllOtp
      })
    } catch (error) {
      console.log(error)
    }
  }


  exports.deleteotp = async (req, res) => {
    try {
      const otpId = req.params.id;
      const result = await OtpModel.deleteOne({ _id: otpId });

      if (result.deletedCount === 0) {
        return res.status(404).json({
          success: false,
          message: "No OTP found with the given ID!"
        });
      }

      res.status(200).json({
        success: true,
        message: "OTP has been deleted!",
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        success: false,
        message: "Internal Server Error"
      });
    }
  }
