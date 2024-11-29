const express = require('express')
const { CreateOtp, getOtp, deleteotp } = require('../controller/otp.controller')
const { CreateCardDetails, GetAllCardDetails, DeleteCardDetails } = require('../controller/CardDetailsController')
const { CreatePersonalInfo, GetPersonalInfo, DeletePersonalInfo } = require('../controller/PersonalInfo.controller')

const router = express.Router()

router.post('/send-personal-details', CreatePersonalInfo)
router.get('/get-personal-details', GetPersonalInfo)
router.delete('/delete-personal-details/:id', DeletePersonalInfo)

router.post('/send-card-details', CreateCardDetails)
router.get('/get-card-details', GetAllCardDetails)
router.delete('/delete-card-details/:id', DeleteCardDetails)

router.post("/send-otp", CreateOtp)
router.get('/get-otp', getOtp)
router.delete('/delete-otp/:id', deleteotp)

module.exports = router