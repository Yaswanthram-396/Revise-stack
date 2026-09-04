import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../../services/config";
import { useToast } from "../context/toast/toast";
import "../auth.css";
import { useCookies } from "react-cookie";
import { useAuth } from "../context/auth";
function Login() {
  const [cookies, setCookie] = useCookies(["user"]);
  const { user, setUser } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const showToast = useToast();
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const data = await loginUser(email, password);
      setUser(data.user);
      setCookie("user", data.accesstoken);
      showToast(true, "Login successful");
      navigate("/books");
    } catch (error) {
      showToast(false, error?.response?.data?.message);
    }
  };

  return (
    <main className="auth-page">
      <div className="auth-layout">
        <section className="auth-intro" aria-labelledby="login-title">
          <p className="auth-kicker">Welcome back</p>
          <h1 id="login-title">Pick up where you left off.</h1>
          <p>Your books, recipes, and notes are ready when you are.</p>
        </section>
        <section className="auth-card" aria-labelledby="login-heading">
          <h2 id="login-heading">Sign in</h2>
          <p className="auth-subtitle">Use your account details to continue.</p>
          <form className="auth-form" onSubmit={handleLogin}>
            <div className="auth-field">
              <label htmlFor="login-email">Email</label>
              <input
                id="login-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="auth-field">
              <label htmlFor="login-password">Password</label>
              <input
                id="login-password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button className="auth-submit" type="submit">
              Sign in
            </button>
          </form>
          <Link className="auth-switch" to="/register">
            Create an account
          </Link>
        </section>
      </div>
    </main>
  );
}

export default Login;
