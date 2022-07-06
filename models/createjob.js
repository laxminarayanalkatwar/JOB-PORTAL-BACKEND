var mongoose = require("mongoose");

var createjobSchema = new mongoose.Schema(
  {
    companyname: {
      type: String,
      required: true,
      maxlength: 32,
      trim: true
    },
    Position: {
      type: String,
      required: true,
      maxlength: 32,
      trim: true
    },
   salery:{
    type:Number,
    required:true,
   },
   skill:{
    type:String,
    required:true
   },
    jobdescription:{
        type:String,
        maxlength:50,
        trim:true
    }
  },
  { timestamps: true }
);


module.exports = mongoose.model("Createjob", createjobSchema);