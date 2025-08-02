const express = require("express");
const router = express.Router();


const wrapAsync = require("../utlis/wrapAsync.js");

const {isLoggedIn} = require("../middleware.js");
const {isOwner, validateListing} = require("../middleware.js");
const listingController = require("../controllers/listing.js");
const multer = require("multer");
const {storage} = require("../cloudConfig.js");
const upload = multer({storage});


router.route("/")
    .get( wrapAsync(listingController.index))// index
    .post(validateListing, isLoggedIn , upload.single("listing[image][url]") , wrapAsync (listingController.createListing));//creating listing route...
    


//create new
router.get("/new", isLoggedIn ,listingController.renderListing);

//show route
router.get("/:id", wrapAsync(listingController.showRoute));

// router.get("/:id",wrapAsync(async (req, res)=>{
    
router.route("/:id/edit")
    .get(isLoggedIn,isOwner, wrapAsync(listingController.renderUpdateListing))//update
    .put(isLoggedIn, isOwner,validateListing, upload.single("listing[image][url]") , wrapAsync(listingController.updateListing));//edit
    

//delete
router.delete("/:id/delete",isLoggedIn,isOwner, wrapAsync(listingController.destroyListing));

module.exports = router;