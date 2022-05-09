const mongoose = require('mongoose')

const { Schema } = mongoose;

const employee = new Schema({
    first_name: {
        type: String,
        required:true,
        minlength:10
    },
    last_name: {
        type: String,
        required:true,
        minlength:10
    },
    age: {
        type: Number,
        required:true,
        minimum: 18
    },
    department_id: {
         //type: mongoose.Schema.Types.ObjectId,
        // ref: "department"
        type:String,
    },
    status: {
        type: Boolean,
        default: true
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
employee.virtual('deptData', {
    ref: 'department',
    localField: 'department_id',
    foreignField: '_id'
});
module.exports = mongoose.model('employee', employee,'employee');