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
    gender: {
      type: String,
      enum: ['Male', 'Female', 'Non-binary', 'Other'],
      required: true
  },
  contact_number: {
    type: String,
    required: true
  },
    admit_date: {
        type: Date
      },
      admit:{
        type:Boolean
      },
      medical_history: {
        type: String,
        default: []
    }
  
    });


    module.exports =clinics = mongoose.model('clinics', clinicSchema);

