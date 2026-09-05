import { createContext, useContext, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import axiosInstance from "../../../axiosInstance";
import { getMe } from "../../../services/config";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState({});
  const [cookies] = useCookies(["user"]);
  const verifyUser = async () => {
    try {
      const data = await getMe(cookies.user);
      setUser(data.user);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    verifyUser();
  }, [cookies.user]);

  const token = cookies.user;

  axiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`;

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
