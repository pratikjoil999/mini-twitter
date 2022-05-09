const mongoose = require('mongoose')

const { Schema } = mongoose;

const twitter_users = new Schema({
    first_name: {
        type: String,
        required:true,
        //minlength:10
    },
    last_name: {
        type: String,
        required:true,
        //minlength:10
    },
    full_name: {
        type: String,
        required:true, 
    },
    user_name: {
        type: String,
        required:true, 
    },
    email: {
        type: String,
        //required:true,
        //minlength:10
    },
    password: {
        type: String,
        required:true,
        //minlength:10
    },
    mobile: {
        type: String,
        //required:true,
        //minlength:10
    },
    followers: {
        type: Array,
        //required:true,
    },
    following: {
        type: Array,
        //required:true,
    },
    token: {
        type: String,
        //required:true,
        //minlength:10
    },
    profile_picture: {
        type: String,
        //required:true,
        minlength:10
    },
    dob: {
        type: Date,
        default: new Date(),
    },
    created_at: {
        type: Date,
        default: new Date(),
    },
    updated_date: {
        type: Date,
    }
},{
    toJSON:{
        virtuals:true
    }
})

module.exports = mongoose.model('twitter_users', twitter_users,'twitter_users');