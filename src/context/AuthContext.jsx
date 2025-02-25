import React, { createContext, useContext, useState, useEffect } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router";
import useAxiosPublic from "../hooks/useAxiosPublic";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const axiosPublic = useAxiosPublic();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Check user authentication on initial load
  useEffect(() => {
    const checkAuth = async () => {
      const token = Cookies.get("token");
     //   
      if (token) {
        try {
          const response = await axiosPublic.get("/api/me", {
            headers: { Authorization: `Bearer ${token}` },
          });
          setUser(response.data.user);
        } catch (error) {
          console.error("Authentication failed:", error);
          Cookies.remove("token");
          setUser(null);
        }
      }
      setLoading(false);
    };

    checkAuth();
  }, []);

  // Login function
  const login = async (credentials) => {
    try {
      const response = await axiosPublic.post("/auth/login", credentials);
      Cookies.set("token", response.data.token, { expires: 1, path: "/" });
      setUser(response.data.user);
      navigate("/user/dashboard", { replace: true });
    } catch (error) {
      console.error("Login failed:", error);
      throw error;
    }
  };
  
  // Logout function
  const logout = () => {
    Cookies.remove("token");
    setUser(null);
    navigate("/auth/login", { replace: true });
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

// Custom hook to use authentication context
export const useAuth = () => useContext(AuthContext);
