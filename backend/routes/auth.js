const express = require("express")
const User = require("../models/User")
const router = express.Router()
const { body, validationResult, matchedData } = require('express-validator');
const bcrypt =  require('bcryptjs')
const jwt = require("jsonwebtoken")
const fetchuser = require("../middleware/fetchuser")

const JWT_SECRET = "garvitisagoodb$oy"

// ROUTE 1: Create a User using: POST "/api/auth/create-users" NO LOGIN REQUIRED
router.post("/create-users",  [
    body('name', 'Enter a valid name').isLength({ min: 3 }),
    body('email', "Enter a valid Email").isEmail(),
    body('password', 'Password must have a minimum of 5 characters').isLength({ min: 5 })
  ], async (req, res) => {
    try {
        // If there are errors, return bad request and the errors
        const result = validationResult(req);
        if (!result.isEmpty()) {
            return res.status(400).json({ errors: result.array() });
        }

        const data = matchedData(req);

        let existingUser = await User.findOne({email: data.email})
        if (existingUser) {
            return res.status(400).json({error: "Please enter a unique value for email"})
        }

        //  Adding salt and hashing

        const salt = await bcrypt.genSalt(10)
        console.log(salt)
        const secPass = await bcrypt.hash(req.body.password, salt)
        console.log(secPass)

        // creating user
        let user = await User.create({
            name: req.body.name,
            password: secPass,
            email: req.body.email
        })


        // JWT
        const jwtData = {
            userId: user.id
        }
        const authToken = jwt.sign(jwtData, JWT_SECRET)
        console.log(authToken)

        res.json({authToken})
    }
    catch (error) {
        console.log("Error creating user: ", error)
        res.status(500).json({error: "Internal Server Error"})
    }

})


// ROUTE 2: Authenticate a User using: POST "/api/auth/login"
router.post("/login",  [
    body('email', "Enter a valid Email").isEmail(),
    body('password', 'Password cannot be blank').exists()
  ], async (req, res) => {
    // If there are errors, return bad request and the errors
    const result = validationResult(req);
        if (!result.isEmpty()) {
            return res.status(400).json({ errors: result.array() });
        }


    const {email, password} = req.body

    try {
        let user = await User.findOne({email})
        if (!user) {
            return res.status(400).json({error: "Please try to login with correct Credentials"})
        }

        const passwordCompare = await bcrypt.compare(password, user.password)
        if (!passwordCompare) {
            return res.status(400).json({error: "Please try to login with correct Credentials"})
        }

        const jwtData = {
            userId: user.id
        }
        const authToken = jwt.sign(jwtData, JWT_SECRET)
        console.log(authToken)

        res.json({authToken})
        
    } catch (error) {
        console.log("Error creating user: ", error)
        res.status(500).json({error: "Internal Server Error"})
    }
})


// ROUTE 3: Get loggedin user details using: POST "api/auth/getuser". Login Required.
router.post("/getuser", fetchuser, async (req, res) => {
    try {
        const userId = req.user
        const user = await User.findById(userId).select("-password")
        res.send({user})
    } catch (error) {
        console.log("Error creating user: ", error)
        res.status(500).json({error: "Internal Server Error"})
    }
})



module.exports = router