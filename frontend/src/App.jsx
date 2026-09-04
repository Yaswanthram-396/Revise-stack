import React from "react";
import "./App.css";
import TaskManager from "./components/formcard/index.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dogs from "./components/dogs/dogs";
import Recipes from "./components/Recipes/recipes";
import Recipe from "./components/recipe/recipe";
import Books from "./components/books/books";
import Login from "./components/login";
import Register from "./components/register";
import { ProtectedRoute } from "./protectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TaskManager />} />
        <Route path="/dogs" element={<Dogs />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/recipes/:id" element={<Recipe />} />
        <Route
          path="/books"
          element={
            <ProtectedRoute>
              <Books />
            </ProtectedRoute>
          }
        />

        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
