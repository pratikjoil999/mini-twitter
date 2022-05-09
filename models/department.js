const mongoose = require('mongoose')

const { Schema } = mongoose;

const department = new Schema({
    department_id: {
        type:Number,
        required:true,
        unique: true,
    },
    department_name: {
        required:true,
        type: String
    },
    status: {
        type: Boolean,
        default: true
    },
    updated_date:{
        type: Date
    }
},{
    toJSON:{
        virtuals:true
    }
})

module.exports = mongoose.model('department', department ,'department')

