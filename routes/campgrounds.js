const express = require('express');
const router = express.Router();
const campgrounds = require('../controllers/campgrounds');
const catchAsync = require('../utils/catchAsync');
const { isLoggedIn, isAuthor, validateCampground } = require('../middleware');
const multer = require('multer');
const { storage } = require('../cloudinary');
const upload = multer({ storage });

const Campground = require('../models/campground');
const User = require('../models/user');

router.route('/')
    .get(catchAsync(campgrounds.index))
    .post(isLoggedIn, upload.array('image'), validateCampground, catchAsync(campgrounds.createCampground))


// Search 
router.get("/search", catchAsync(async (req, res) => {
        const { match } = req.query;
        if (!match || match.trim() === "") {
                return res.redirect("/campgrounds");
        }
        const regex = new RegExp(match, "i");
        const matchusers = await User.find({ username: regex });
        const matchids = matchusers.map(user => user._id);
        const campgrounds = await Campground.find({
                $or: [{ title: regex }, { location: regex }, { description: regex }, { author: { $in: matchids } }]
        }).populate("author");
        res.render("campgrounds/index", { campgrounds });
}));
//-----

router.get('/new', isLoggedIn, campgrounds.renderNewForm)

router.route('/:id')
    .get(catchAsync(campgrounds.showCampground))
    .put(isLoggedIn, isAuthor, upload.array('image'), validateCampground, catchAsync(campgrounds.updateCampground))
    .delete(isLoggedIn, isAuthor, catchAsync(campgrounds.deleteCampground));

router.get('/:id/edit', isLoggedIn, isAuthor, catchAsync(campgrounds.renderEditForm))



module.exports = router;