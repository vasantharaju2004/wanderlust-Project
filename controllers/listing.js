const Listing = require("../models/listing.js");
const ExpressError = require("../utlis/ExpressError.js");
const mongoose = require("mongoose");
const mbxGeoCoding = require('@mapbox/mapbox-sdk/services/geocoding');
const mapToken = process.env.MAP_TOKEN;
const geocodingClient = mbxGeoCoding({ accessToken: mapToken });


module.exports.index = async (req, res)=>{
    let allListings = await Listing.find({});
    res.render("listings/index.ejs",{allListings}); 
};

module.exports.renderListing = (req, res)=>{
    res.render("listings/new.ejs");
};

module.exports.showRoute = async (req, res) => {
    const { id } = req.params;

    // Mongoose ID validation
    if (!mongoose.isValidObjectId(id)) {
        throw new ExpressError(400, "Invalid listing ID");
    }

    let list;
    try {
        list = await Listing.findById(id)
        .populate({
            path: "reviews",
            populate:{
                path:"author",
            },
        })
        .populate("owner");

        if (!list) {
            req.flash("error", "Listing does not exists.");
            return res.redirect("/listings");
        }
    } catch (err) {
        req.flash("error", err.message);
        return res.redirect("/listings");
    }
   
    res.render("listings/show.ejs", { list });
};

module.exports.createListing = async(req, res)=>{
    //let {title:title, description:description,
    //     image:image, price:price, country:country,
    //     location:location} = req.body;
    //instead of this big lines add listing[title], listing[description] etc etc
    
    let cordinate =  await geocodingClient.forwardGeocode({
        query: req.body.listing.location,
        limit: 1
        })
        .send()
    
    let url = req.file.path;
    let filename = req.file.filename;
    
    const newListing = new Listing(req.body.listing);
    
    newListing.owner = req.user._id;

    if(!newListing){
        throw new ExpressError(404,"Listing not found");
    }

    newListing.image = {url, filename};
    newListing.geometry = cordinate.body.features[0].geometry;

    await newListing.save();
    
    req.flash("success", "New Listing Created!");
    res.redirect("/listings");
};

module.exports.renderUpdateListing = async (req, res)=>{
    let {id} = req.params;
    //mongoose server id validation
    if( !mongoose.isValidObjectId(id)){
        throw new ExpressError(400,"InvalidListing ID");
    }
    const list = await Listing.findById(id);
    if( !list){
        throw new ExpressError(404,"Listing not found");
    }
    let originalImageUrl = list.image.url;
    originalImageUrl = originalImageUrl.replace("/upload", "/upload/h_250,w_350")
    res.render("listings/edit.ejs", {list, originalImageUrl});
};

module.exports.updateListing = async(req, res)=>{
    
    let {id}= req.params;
    
    //mongoose server id validation
    if(!mongoose.isValidObjectId(id)){
        throw new ExpressError(400,"Invalid Listing ID");
    }

    let listing = await Listing.findByIdAndUpdate(id,req.body.listing);
    
    if( typeof req.file !== "undefined"){
        let url = req.file.path;
        let filename = req.file.filename;
        listing.image = {url, filename};
        await listing.save();
    }
    
    req.flash("success", "Listing updated!");
    res.redirect(`/listings/${id}`);
};

module.exports.destroyListing = async(req, res)=>{
    let {id}= req.params;
    const list = await Listing.findByIdAndDelete(id);
    req.flash("success","Listing deleted");
    res.redirect("/listings");
};

