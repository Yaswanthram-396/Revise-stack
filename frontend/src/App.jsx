import React, { useState } from "react";
import "./App.css";
import FormElement from "./components/form";
import TaskManager from "./components/formcard/index.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dogs from "./components/dogs/dogs";
import Recipes from "./components/Recipes/recipes";
import Recipe from "./components/recipe/recipe";
import Books from "./components/books/books";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TaskManager />} />
        <Route path="/dogs" element={<Dogs />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/recipes/:id" element={<Recipe />} />
        <Route path="/books" element={<Books />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
