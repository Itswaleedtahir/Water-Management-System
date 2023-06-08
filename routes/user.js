const { Router } = require("express");
const router = Router();

// Middlewares

// Controllers
const controller = require("../controllers/data");
const user= require("../controllers/user")
const auth = require("../Middleware/auth")
// Routes

router.post("/signup",user.SignUp)
router.post("/Login",user.LogIn)
router.get("/gettingdata",auth, controller.Getting_data);
router.post("/create", auth,controller.Create);

module.exports = router;
