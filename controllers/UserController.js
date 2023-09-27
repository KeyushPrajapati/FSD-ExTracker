const User = require("./../models/Usermodel");
const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");

module.exports.signup = async (req, res) => {
    try {
      const { email, password } = req.body;
      let emailCheck = await User.findOne({ email });
      // If email not found in DB then skip the 'if' condition.
      if (emailCheck) {
        // If user exist then ok
          return res.json({ error: "Email already exist" });
      }

  
      // if user is not exist then new user will be create in DB.
      const hashedPassword = await bcrypt.hash(password, 10);
      const UserData = new User({
        email,
        password: hashedPassword,
      });
      await UserData.save(); // save data in MongoDB
  
      return res.json({ User });
    } catch (ex) {
      console.log(ex);
    }
  };

  module.exports.login = async (req, res) => {

    console.log('Login controller')
    try {
      const { email, password } = req.body;
      const data = await User.findOne({ email });
      if (data) {
        const match = await bcrypt.compare(password, data.password);
        console.log('password match successfully')
        if (match) {
          const userData = {
            email: data.email,
          };
          
      
          // token make here
          // const token = await jwt.sign(userData, 'DSGIDG54646', {expiresIn: "1h"});
          // const cookiemake = await res.cookie("token", userData, {
          //     secure: true,
          //     // sameSite: "strict",
          //     httpOnly: true,
          //     maxAge: 1000 * 60 * 60 * 24,
          //   })
        
            return res.json({ message: "Login successgully" });
        } else {
          return res.json({ error: "email or Password not match" });
        }
        } else {
        return res.json({ error: "User not exist" });
      }
    } catch (ex) {
      console.log(ex)
    }
  };

  module.exports.userDashboard = async(req, res) => {
    try {
     
    
      
     
      // console.log('userDashboard')
      // console.log(req.cookie.token)
    } catch (error) {
      return res.json({ error: error.message });
    }
  };

  module.exports.logout = async (req, res) => {
    req.json({ message: "Logout successfully" });
  };