const bcrypt = require('bcrypt');
const { SALT_ROUNDS } = require('../config');
const User = require('../models/User');

const register = async ({ username, password }) => {

    let salt = await bcrypt.genSalt(SALT_ROUNDS);
    let hash = await bcrypt.hash(password, salt);

    const user = new User({ username, password: hash });

    return await user.save();
}

const login = async ({ username, password }) => {
    //get user from db:
    let user = await User.findOne({ username })

    if (!user) {
        throw { message: 'Invalid User!!!' }
    }

    //validate and compare password hash:
    let isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
        throw { message: 'Password dont match!!!' }
    }

    //generate token:
    return { empty: true };
}

module.exports = {
    register,
    login
}