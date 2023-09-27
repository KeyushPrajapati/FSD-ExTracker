const router = require("express").Router();
const urlEncoded = require("body-parser").urlencoded({ extended: false });
const { signup, login, logout ,userDashboard} = require("../controllers/UserController");
// const { userExpenses ,prevData} = require("../controllers/ExpenseController")

router.post("/signup", urlEncoded, signup);
router.post("/login", urlEncoded, login);
router.post("/user", urlEncoded,userDashboard);
router.get("/logout", logout);
// router.post("/expense", userExpenses);
// router.post("/previousdata",prevData);
module.exports = router;

// {
//   "dependencies": {
//     "axios": "^1.5.0",
//     "body-parser": "^1.20.2",
//     "cookie-parser": "^1.4.6",
//     "cors": "^2.8.5",
//     "express": "^4.18.2",
//     "mongoose": "^7.5.2",
//     "nodemon": "^3.0.1"
//   }
// }