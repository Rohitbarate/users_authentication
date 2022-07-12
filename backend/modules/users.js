const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    fName: { type: String, require: true },
    lName: { type: String, require: true },
    email: { type: String, require: true, unique: true },
    password: { type: String, require: true }
})

const user = mongoose.model('users', userSchema);
user.createIndexes()
module.exports = user;