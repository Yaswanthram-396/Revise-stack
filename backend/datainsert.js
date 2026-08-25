import Books from "./src/models/books.js";
import Recipe from "./src/models/recipe.js";

export const insertData = async () => {
    try {
        await Books.insertMany([
  {
    title: "Atomic Habits",
    author: "James Clear",
    status: "finished"
  },
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    status: "reading"
  },
  {
    title: "Rich Dad Poor Dad",
    author: "Robert Kiyosaki",
    status: "wishlist"
  },
  {
    title: "1984",
    author: "George Orwell",
    status: "finished"
  },
  {
    title: "The Psychology of Money",
    author: "Morgan Housel",
    status: "reading"
  },
  {
    title: "Ikigai",
    author: "Hector Garcia",
    status: "wishlist"
  },
  {
    title: "Clean Code",
    author: "Robert C. Martin",
    status: "reading"
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    status: "finished"
  },
  {
    title: "Deep Work",
    author: "Cal Newport",
    status: "wishlist"
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    status: "reading"
  }
]);
        console.log("Data inserted successfully");
    } catch (error) {
        console.error("Error inserting data:", error);
    } 
};
