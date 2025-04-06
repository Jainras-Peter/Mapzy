const User = require('../models/user');
const { storeReturnTo } = require('../middleware');

// router.post('/login',
//     // use the storeReturnTo middleware to save the returnTo value from session to res.locals
//     storeReturnTo,
//     // passport.authenticate logs the user in and clears req.session
//     passport.authenticate('local', {failureFlash: true, failureRedirect: '/login'}),
//     // Now we can use res.locals.returnTo to redirect the user after login
//     (req, res) => {
//         req.flash('success', 'Welcome back!');
//         const redirectUrl = res.locals.returnTo || '/campgrounds'; // update this line to use res.locals.returnTo now
//         res.redirect(redirectUrl);
//     });

module.exports.renderRegister = (req, res) => {
    res.render('users/register');
}

module.exports.register = async (req, res, next) => {
    try {
        const { email, username, password } = req.body;
        const user = new User({ email, username });
        //.register() is passport function
        const registeredUser = await User.register(user, password);
        req.login(registeredUser, err => {
            if (err) return next(err);
            req.flash('success', 'Welcome to Yelp Camp!');
            res.redirect('/campgrounds');
        })
    } catch (e) {
        req.flash('error', e.message);
        res.redirect('register');
    }
}

module.exports.renderLogin = (req, res) => {
    res.render('users/login');
}

module.exports.login = (req, res) => {
    req.flash('success', 'welcome back!');
     const redirectUrl = req.session.returnTo || '/campgrounds';
    // const redirectUrl = res.locals.returnTo || '/campgrounds'; 
    delete req.session.returnTo;
    res.redirect(redirectUrl);
}

module.exports.logout = (req, res) => {
    req.logout();  //logout is passport buildin function
    // req.session.destroy();
    req.flash('success', "Goodbye!");
    res.redirect('/campgrounds');
}

//correction if above is not work
// router.get('/logout', (req, res, next) => {
//     req.logout(function (err) {
//         if (err) {
//             return next(err);
//         }
//         req.flash('success', 'Goodbye!');
//         res.redirect('/campgrounds');
//     });
// }); 