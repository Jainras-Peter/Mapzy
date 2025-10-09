const express = require('express');
const router = express.Router();
const passport = require('passport');
const catchAsync = require('../utils/catchAsync');
const User = require('../models/user');
const users = require('../controllers/users');
const { storeReturnTo } = require('../middleware');
const Campground = require('../models/campground');
const Review = require('../models/review');
const { isLoggedIn} = require('../middleware');

router.route('/register')
    .get(users.renderRegister)
    .post(catchAsync(users.register));

router.route('/login')
    .get(users.renderLogin)
    .post(passport.authenticate('local', { failureFlash: true, failureRedirect: '/login' }), users.login)

//profile
router.get('/:username/profile', isLoggedIn,catchAsync(async (req, res) => {
  const user = await User.findOne({ username: req.params.username });
  if (!user) {
    req.flash('error', 'User not found');
    return res.redirect('/campgrounds');
  }
  const campcount = await Campground.countDocuments({ author: user._id });
  const reviewcount = await Review.countDocuments({ author: user._id });
  
  res.render('campgrounds/yourprofile', { user, campcount, reviewcount, currentUser: req.user });
}));


//Edit Profile
router.get("/editprofile", isLoggedIn, async (req, res, next) => {
    res.render("campgrounds/editprofile");
})

router.put("/editprofile", async (req, res, next) => {
    try {
        const user = await User.findById(req.user._id);
        if (req.body.user.username) {
            user.username = req.body.user.username;
        }
        // if (req.file) {
        //     user.profilePicture = req.file.path;
        // }
        await user.save();
        req.login(user, (err) => {
            if (err) {
                return res.redirect("/editprofile");
            }
            req.flash("success", "Username updated successfully!");
            res.redirect(`${user.username}/profile`);
        });
    }
    catch (e) {
        req.flash("error", "Username already exists");
        return res.redirect("/editprofile");
    }
})


router.get('/logout', users.logout)

module.exports = router;