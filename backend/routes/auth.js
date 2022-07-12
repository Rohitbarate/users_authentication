const router = require('express').Router();
const bcrypt = require('bcrypt');
const User = require('../modules/users')


// route 1 : create a new user with "/api/auth/signup"

router.post('/signup', async (req, res) => {

    try {
        // check if user is present or not
        let user = await User.findOne({ email: req.body.email });
        if (user) {
            return res.status(400).json({ message: "user with this email is already exists" })
        }

        // create a secure password with hash password
        const salt = await bcrypt.genSalt(Number(process.env.SALT))
        const secPassword = await bcrypt.hash(req.body.password, salt)

        // create user with the given information

        user = await User.create({
            fName: req.body.fName,
            lName: req.body.lName,
            email: req.body.email,
            password: secPassword
        })
        res.status(201).json({ message: "user has been created successfully" })
    } catch (error) {
        res.status(500).json({ message: "internal server error", error })
    }



}
)


module.exports = router;