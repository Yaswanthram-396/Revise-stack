import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useToast } from "../context/toast/toast";
import { createUser } from "../../services/config";
import "../auth.css";
import { useCookies } from "react-cookie";
import { useAuth } from "../context/auth";

function Register() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [cookies, setCookie] = useCookies(["user"]);
  const { user, setUser } = useAuth();
  const showToast = useToast();
  const navigate = useNavigate();

  const handlecreateUser = async (event) => {
    event.preventDefault();
    try {
      const data = await createUser({ name, email, password });
      setUser(data.user);
      setCookie("user", data.accesstoken);
      showToast(true, "Account created successfully");
      navigate("/books");
    } catch (error) {
      showToast(false, error?.response?.data?.message);
    }
  };

  return (
    <main className="auth-page">
      <div className="auth-layout">
        <section className="auth-intro" aria-labelledby="register-title">
          <p className="auth-kicker">Make it yours</p>
          <h1 id="register-title">A little more room for what matters.</h1>
          <p>Create an account and keep your collection close.</p>
        </section>
        <section className="auth-card" aria-labelledby="register-heading">
          <h2 id="register-heading">Create your account</h2>
          <p className="auth-subtitle">
            A few details and you are ready to go.
          </p>
          <form className="auth-form" onSubmit={handlecreateUser}>
            <div className="auth-field">
              <label htmlFor="register-name">Name</label>
              <input
                id="register-name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="auth-field">
              <label htmlFor="register-email">Email</label>
              <input
                id="register-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="auth-field">
              <label htmlFor="register-password">Password</label>
              <input
                id="register-password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button
              className="auth-submit"
              disabled={!name || !password || !email}
              type="submit"
            >
              Create account
            </button>
          </form>
          <Link className="auth-switch" to="/login">
            Already have an account?
          </Link>
        </section>
      </div>
    </main>
  );
}

export default Register;
