import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { getMe } from "./services/config";
import { useNavigate } from "react-router-dom";

export function ProtectedRoute({ children }) {
  const [{ user }] = useCookies(["user"]);
  const navigate = useNavigate();
  const [isVerifying, setIsVerifying] = useState(true);

  const verifyUser = async () => {
    try {
      await getMe(user);
    } catch (e) {
      navigate("/login");
      console.log(e);
    } finally {
      setIsVerifying(false);
    }
  };

  useEffect(() => {
    verifyUser();
  }, [user]);

  if (isVerifying) {
    return <p>Loading...</p>;
  }

  return children;
}
