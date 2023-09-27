const exp = require('express');
const app = exp();
const bodyParser = require('body-parser');
const cors = require('cors')
const mongoose = require('mongoose');
const cp = require('cookie-parser');
const session = require('express-session')
// const port = 5000;
const authRoutes = require("./routes/auth");
app.use(cors({
  origin: 'http://localhost:3000', // Allow requests from your frontend URL
  credentials: true,
}))
app.use(bodyParser.json());
app.use(exp.urlencoded({ extended: false }));
app.use(cp());
// session is here
app.use(session({
  secret: 'sdiu2i392ennzzd', 
  resave: false,
  saveUninitialized: true
}));
mongoose.connect("mongodb://127.0.0.1:27017/EXTracker")
  .then(() => console.log("Database connected"))
  .catch((err) => console.log(err));

app.use("/api/auth", authRoutes);

app.listen(3004);
  