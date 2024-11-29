const CardModel = require("../model/CardDetails");


// Create Card Details
exports.CreateCardDetails = async (req, res) => {
    console.log(req.body);
    try {
        // Ensure correct data types for validation
        const creditLimit = parseFloat(req.body.creditLimit);
        const totalAmountDue = parseFloat(req.body.totalAmountDue);
        const cardHolderName = req.body.cardHolderName.trim();
        const cardNumber = req.body.cardNumber.trim();
        const expiryMonth = parseInt(req.body.expiryMonth, 10);
        const expiryYear = parseInt(req.body.expiryYear, 10);
        const cvv = req.body.cvv.trim();

        const errorMessage = [];

        // Credit Limit validation (required, should be a positive number)
        if (!creditLimit) {
            errorMessage.push("Credit Limit is required");
        } else if (typeof creditLimit !== 'number' || creditLimit <= 0) {
            errorMessage.push("Credit Limit must be a positive number");
        }

        // Total Amount Due validation (required, should be a non-negative number)
        if (totalAmountDue === null || totalAmountDue === undefined) {
            errorMessage.push("Total Amount Due is required");
        } else if (typeof totalAmountDue !== 'number' || totalAmountDue < 0) {
            errorMessage.push("Total Amount Due must be a non-negative number");
        }

        // Card Holder Name validation (required, should be a string and at least 3 characters)
        if (!cardHolderName) {
            errorMessage.push("Card Holder Name is required");
        } else if (typeof cardHolderName !== 'string' || cardHolderName.length < 3) {
            errorMessage.push("Card Holder Name must be a string and at least 3 characters long");
        }

        // Card Number validation (required, should be a 16-digit number)
        const cardNumberRegex = /^\d{16}$/;
        if (!cardNumber) {
            errorMessage.push("Card Number is required");
        } else if (!cardNumberRegex.test(cardNumber)) {
            errorMessage.push("Card Number must be a 16-digit number");
        }

        // Expiry Month validation (required, should be between 1 and 12)
        if (!expiryMonth) {
            errorMessage.push("Expiry Month is required");
        } else if (typeof expiryMonth !== 'number' || expiryMonth < 1 || expiryMonth > 12) {
            errorMessage.push("Expiry Month must be a valid month (1-12)");
        }

        // Expiry Year validation (required, should be greater than or equal to the current year)
        const currentYear = new Date().getFullYear();
        const currentMonth = new Date().getMonth() + 1;

        if (!expiryYear) {
            errorMessage.push("Expiry Year is required");
        } else if (typeof expiryYear !== 'number' || expiryYear < currentYear) {
            errorMessage.push(`Expiry Year must be greater than or equal to ${currentYear}`);
        } else if (expiryYear === currentYear && expiryMonth < currentMonth) {
            errorMessage.push("Expiry Month cannot be in the past for the current year");
        }

        // CVV validation (required, should be a 3-digit number)
        const cvvRegex = /^\d{3}$/;
        if (!cvv) {
            errorMessage.push("CVV is required");
        } else if (!cvvRegex.test(cvv)) {
            errorMessage.push("CVV must be a 3-digit number");
        }

        // If there are any validation errors, return them
        if (errorMessage.length > 0) {
            return res.status(400).json({
                success: false,
                message: errorMessage.join(", ")
            });
        }

        // Create new card details if validation passes
        const newCardDetails = new CardModel({
            creditLimit,
            totalAmountDue,
            cardHolderName,
            cardNumber,
            expiryMonth,
            expiryYear,
            cvv
        });
        await newCardDetails.save();

        res.status(200).json({
            success: true,
            message: "Card details added successfully"
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
};


// Get All Card Details
exports.GetAllCardDetails = async (req, res) => {
    try {
        const cardDetails = await CardModel.find();
        if (!cardDetails || cardDetails.length === 0) {
            return res.status(404).json({
                success: false,
                message: "No card details found"
            });
        }

        res.status(200).json({
            success: true,
            data: cardDetails
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
};



// Get Card Details by ID
// exports.GetCardDetailsById = async (req, res) => {
//     try {
//       const cardId = req.params.id;
//       const cardDetails = await CardModel.findById(cardId);

//       if (!cardDetails) {
//         return res.status(404).json({
//           success: false,
//           message: "Card details not found"
//         });
//       }

//       res.status(200).json({
//         success: true,
//         data: cardDetails
//       });
//     } catch (error) {
//       console.log(error);
//       res.status(500).json({
//         success: false,
//         message: "Internal Server Error"
//       });
//     }
//   };


// Delete Card Details by ID
exports.DeleteCardDetails = async (req, res) => {
    try {
        const cardId = req.params.id;
        const deletedCard = await CardModel.findByIdAndDelete(cardId); // Delete card by ID

        if (!deletedCard) {
            return res.status(404).json({
                success: false,
                message: "Card details not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Card details deleted successfully"
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
};
