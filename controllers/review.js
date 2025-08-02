const Listing = require("../models/listing.js");
const Review = require("../models/review.js");
const ExpressError = require("../utlis/ExpressError.js");


module.exports.postRoute = async(req, res)=>{

    let listing = await Listing.findById(req.params.id);
    if( !listing){
        throw new ExpressError(404,"Listing Not Found" );
    }
    let newReview = new Review(req.body.review);
   
    newReview.author = req.user._id;

    await newReview.save();
    listing.reviews.push(newReview);

    await listing.save();
    
    res.redirect(`/listings/${listing._id}`);
};

module.exports.destroyReview = async(req, res)=>{
    let {id, reviewID} = req.params;

    await Listing.findByIdAndUpdate(id, {$pull: {reviews : reviewID}});

    await Review.findByIdAndDelete(reviewID);

    res.redirect(`/listings/${id}`);
};