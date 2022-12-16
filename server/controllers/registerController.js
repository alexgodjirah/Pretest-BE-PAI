const { User } = require("../models");
const { hashPassword } = require("../helpers/passwordHandler");

class RegisterController {
    static register = async (req, res) => {
        const { username, email, password } = req.body;

        try {
            // Username Checker
            const isUsernameAvailable = await User.findOne({
                where: { username: username },
            });
            if (isUsernameAvailable) {
                return res
                    .status(400)
                    .json({ message: "Username is already taken" });
            }

            // Email Cheker
            const isEmailAvailable = await User.findOne({
                where: { email: email },
            });
            if (isEmailAvailable) {
                return res
                    .status(400)
                    .json({ message: "Email is already taken" });
            }

            // User Creation
            const payloadUser = {
                username: username,
                email: email,
                password: hashPassword(password),
                role: "user",
            };
            const createUser = await User.create(payloadUser);
            if (createUser) {
                return res.status(201).json({
                    message: "Congrats, user is created!!",
                    username: createUser.username,
                    email: createUser.email,
                });
            } else {
                return res.status(400).json({ message: "Bad Request" });
            }
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: error.message });
        }
    };
}

module.exports = RegisterController;
