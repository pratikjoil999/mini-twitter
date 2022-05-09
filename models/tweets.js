const mongoose = require('mongoose')

const { Schema } = mongoose;

const tweet = new Schema({
    user_id: {
        type:String,
        required:true,
    },
    tweet: {
        required:true,
        type: String
    },
    hash_tag: {
        //required:true,
        type: String
    },
    created_at: {
        type: Date,
        default: new Date(),
    },
    updated_date:{
        type: Date
    }
},{
    toJSON:{
        virtuals:true
    }
})
tweet.virtual('tweetData', {
    ref: 'twitter_users',
    localField: 'user_id',
    foreignField: '_id'
});

module.exports = mongoose.model('tweet', tweet ,'tweet')

