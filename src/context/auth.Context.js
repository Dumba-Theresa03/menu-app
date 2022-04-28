import { createContext, useState } from "react";

const AuthContext = createContext();

const AuthProvider = AuthContext.Provider;
function AuthContextProvider({ children }) {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);

  const authLogin = async (email, password) => {
    setLoading(true);
    await fetch("/api/users/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setSuccess(true);
        setUser(data);
      })
      .catch((err) => {
        setError(err);
      });
    setLoading(false);
  };

  //signup function
  const authRegister = async (username, email, password) => {
    setLoading(true);
    await fetch("/users/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setSuccess(true);
        setUser(data);
      })
      .catch((err) => {
        setError(err);
      });
    setLoading(false);
  };
  //logout function
  const AuthLogout = () => {
    setSuccess(false);
    setUser(null);
  };

  return (
    <AuthProvider
      AuthProvider
      value={{
        success,
        error,
        loading,
        user,
        authLogin,
        authRegister,
        AuthLogout,
      }}
    >
      {children}
    </AuthProvider>
  );
}

export { AuthContext, AuthContextProvider };
