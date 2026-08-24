import Recipe from "./src/models/recipe.js";

export const insertData = async () => {
    try {
        await Recipe.insertMany([
  {
    name: "Chicken Biryani",
    cuisine: "Indian",
    cookTime: 45,
    rating: 4.8
  },
  {
    name: "Masala Dosa",
    cuisine: "Indian",
    cookTime: 20,
    rating: 4.7
  },
  {
    name: "Pasta Alfredo",
    cuisine: "Italian",
    cookTime: 25,
    rating: 4.5
  },
  {
    name: "Margherita Pizza",
    cuisine: "Italian",
    cookTime: 30,
    rating: 4.6
  },
  {
    name: "Chicken Tacos",
    cuisine: "Mexican",
    cookTime: 20,
    rating: 4.4
  },
  {
    name: "Sushi Roll",
    cuisine: "Japanese",
    cookTime: 25,
    rating: 4.9
  },
  {
    name: "Pad Thai",
    cuisine: "Thai",
    cookTime: 28,
    rating: 4.6
  },
  {
    name: "Veg Fried Rice",
    cuisine: "Chinese",
    cookTime: 15,
    rating: 4.3
  },
  {
    name: "Butter Chicken",
    cuisine: "Indian",
    cookTime: 40,
    rating: 4.9
  },
  {
    name: "Cheese Burger",
    cuisine: "American",
    cookTime: 18,
    rating: 4.2
  }
    ]);
        console.log("Data inserted successfully");
    } catch (error) {
        console.error("Error inserting data:", error);
    } 
};
