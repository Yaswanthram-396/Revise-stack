import mongoose from "mongoose";

const recipeSchema = new mongoose.Schema({
    name: String,
    cuisine: String,
    cookTime: Number,
    rating: Number
});

const Recipe = mongoose.model("Recipe", recipeSchema);
export default Recipe;