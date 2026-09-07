import "./App.css";
import TaskManager from "./components/formcard/index.jsx";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Dogs from "./components/dogs/dogs";
import Recipes from "./components/Recipes/recipes";
import Recipe from "./components/recipe/recipe";
import Books from "./components/books/books";
import Login from "./components/login";
import Register from "./components/register";
import { ProtectedRoute } from "./protectedRoute";
import Expenses from "./components/expenses/expenses";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Navigate to="/login" replace />} />

        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <TaskManager />
            </ProtectedRoute>
          }
        />
        <Route
          path="/expenses"
          element={
            <ProtectedRoute>
              <Expenses />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dogs"
          element={
            <ProtectedRoute>
              <Dogs />
            </ProtectedRoute>
          }
        />
        <Route
          path="/recipes"
          element={
            <ProtectedRoute>
              <Recipes />
            </ProtectedRoute>
          }
        />
        <Route
          path="/recipes/:id"
          element={
            <ProtectedRoute>
              <Recipe />
            </ProtectedRoute>
          }
        />
        <Route
          path="/books"
          element={
            <ProtectedRoute>
              <Books />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
