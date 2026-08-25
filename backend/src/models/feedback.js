import mongoose from "mongoose";

const feedbackSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    rating:{
        type:Number,
        required:true,
        min: [1, 'Rating must be at least 1'],
        max: [5, 'Rating cannot be more than 5']
    },
    message:String
    
},
    { timestamps:true}
);

const Feedback = mongoose.model("Feedbacks", feedbackSchema);
export default Feedback;