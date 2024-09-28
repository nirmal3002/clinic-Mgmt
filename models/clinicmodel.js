const mongoose = require('mongoose');

const clinicSchema = new mongoose.Schema({
    name: {
        type:String,
        required:true
    },
    age: {
        type:Number,
        required:true
    },
    admit_date: {
        type: Date
      },
      admit:{
        type:Boolean
      }
    });


    module.exports =clinics = mongoose.model('clinics', clinicSchema);

