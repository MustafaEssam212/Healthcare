import mongoose from "mongoose";

const usersSchema = new mongoose.Schema({
    name: {type: String, required: true},
    reports: [],
    profile: {type: String, required: true},
    loginId: {type: Number, required: true},
    password: {type: String, required: true},
    status: {type: String, required: true}
})


usersSchema.methods.toJSON = function(){
    const userObject = this.toObject(); 
    delete userObject.password;
    return userObject; 
  };


export default mongoose.models.Users || mongoose.model("Users", usersSchema)