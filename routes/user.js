const express = require("express");
const router = express.Router();

const wrapAsync=require("../utlis/wrapAsync.js");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");
const reviewController = require("../controllers/user.js"); 


router.route("/signup")
    .get(reviewController.renderSignup)
    .post(wrapAsync(reviewController.postSignup));


router.route("/login")
    .get(reviewController.renderLogin)
    .post(saveRedirectUrl,passport.authenticate("local",{ failureRedirect: "/login", failureFlash: true}) ,reviewController.login);

router.get("/logout",reviewController.logOut);


module.exports = router;