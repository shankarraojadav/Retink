import Layout from "./components/scenes/Layout";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Home from "./components/scenes/Home";
import Article from "./components/scenes/Article";
// import Login from "./components/scenes/Login";
import { useContext, useEffect } from "react";
import { authContext } from "./context/AuthContext";

export default function App() {
  // const { login } = useContext(authContext);
  // const navigate = useNavigate();

  // console.log(login);
  // useEffect(() => {
  //   if (!login) {
  //     navigate("/login");
  //   }
  // }, [login]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Navigate to="/home" replace />} />
        
        <Route path="/home" element={<Home />} />
        <Route path="/article" element={<Article />} />
      </Route>
    </Routes>
  );
}
