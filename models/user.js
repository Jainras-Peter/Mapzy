const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    // dateJoined:{
    //     type:Date,
    //     default:getISTDate,
    //     immutable:true
    // },
    // profilePicture: {
    //     type: String,
    //     default: "https://res.cloudinary.com/di5q8uqqc/image/upload/v1752672038/dp_e8jusg.jpg",
    // },

});

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', UserSchema);