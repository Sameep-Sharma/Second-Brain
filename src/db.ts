//create user models and schemas

import mongoose from "mongoose";
const Schema = mongoose.Schema

const userSchema = new Schema ({
  name:{
    type:String,
    required:true
  },
  username:{
    type:String,
    required:true,
    unique:true
  },
  password:{
    type:String,
    required:true
  }
});

const contentSchema = new Schema({
  link:{
    type:String,
    required:true
  },
  type:{
    type:String,
    enum:["youtube","twitter","other"],
    required:true
  },
  title:{
    type: String,
    required: true,
  },
  tags: [
    {
      type: Schema.Types.ObjectId,
      ref: "Tag",
    },
  ],
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },

})

const tagSchema = new Schema ({
  title:{
    type:String,
    required:true
  }
});


const linkSchema = new Schema({
  hash:{
    type:String
  },
  userId:{
    type:Schema.Types.ObjectId,
    ref:"User",
    required:true
  }
})


