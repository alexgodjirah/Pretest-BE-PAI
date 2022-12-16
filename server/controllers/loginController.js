const { User } = require("../models");
const { verifyPassword } = require("../helpers/passwordHandler");
const { generateToken } = require("../helpers/tokenHandler");

class LoginController {
    static login = async (req, res) => {
        const { username, password } = req.body;

        try {
            // Username Finder
            const findUser = await User.findOne({
                where: { username: username },
            });

            if (!findUser) {
                return res.status(400).json({
                    message:
                        "Username is not found, please register or input the right username",
                });
            }

            // Password Checker
            const isPasswordMatch = await verifyPassword(
                password,
                findUser.password
            );
            if (!isPasswordMatch) {
                return res.status(400).json({
                    message: "Password is wrong, please enter the correct one!",
                });
            }

            // Access Token Generator
            const accessToken = await generateToken({
                id: findUser.id,
                username: findUser.username,
                role: findUser.role,
            });
            res.cookie("access_token", accessToken, {
                httpOnly: true,
            });

            // Return Result
            return res.status(200).json({
                message: "Login Success",
                id: findUser.id,
                role: findUser.role,
                access_token: accessToken,
            });
        } catch (error) {
            console.log(error);
            return res.status(500).json({ message: error.message });
        }
    };
}

module.exports = LoginController;
