import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    title:String,
    author:String,
    status:{
        type:String,
        enum:["reading","finished","wishlist"]
    },
    
},
    { timestamps:true}
);

const Books = mongoose.model("Books", bookSchema);
export default Books;