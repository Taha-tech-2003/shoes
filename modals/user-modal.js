const mongoose = require('mongoose');
const jwt = require("jsonwebtoken");

const UserSchema = new mongoose.Schema({
  Name: { type: String, required: true },
  Email: { type: String, required: true },
  Password: { type: String, required: true },
  Phone: { type: Number, required: true },
  Gender: { type: String, required: true },
  tokens:[{
    token:{
        type:String,
        require:true
    }
  }]
});





UserSchema.methods.generateauthtoken = async function(){
  try {
      const token = jwt.sign({_id:this._id.toString()},"mynameistahaaormerebachikanamerameenhalekinuskimangnihochukihatohanialpc");
      this.tokens = this.tokens.concat({token:token})
      await this.save
  } catch (error) {
      console.log(error);
  }
}


const userModal = new mongoose.model("users",UserSchema);
module.exports = userModal;