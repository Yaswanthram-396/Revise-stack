import mongoose from "mongoose";


const usersdata= new mongoose.Schema({
name:{
    type:String,
    required:true,
},
email:{
    type:String,
    required:true,
},
password:{
    type:String,
    required:true,
    select:false,
}

})

const Users=mongoose.model("Users",usersdata);
export default Users;