const express = require("express");
const router = express.Router({mergeParams :true});

const wrapAsync = require("../utlis/wrapAsync.js");

const {validateReview, isLoggedIn, isReviewAuthor}=require("../middleware.js");

const reviewController =require("../controllers/review.js");


//reviews
//post route
router.post("/", isLoggedIn,validateReview  ,wrapAsync(reviewController.postRoute) );

//delete review route
router.delete("/:reviewID",isReviewAuthor, isLoggedIn ,wrapAsync(reviewController.destroyReview));


module.exports = router;

