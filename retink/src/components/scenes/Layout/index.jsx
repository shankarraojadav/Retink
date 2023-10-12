import { Box, useMediaQuery } from "@mui/material";
import Sidebar from "../../Sidebar";
import Navbar from "../../Navbar";
import { Navigate, Outlet } from "react-router-dom";
import { theme } from "../../../theme";
import { authContext } from "../../../context/AuthContext";
import { useContext } from "react";

export default function Layout() {
  const { login } = useContext(authContext);
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  // if(!login) {
  //   return <Navigate to="/login" replace />
  // }

  return (
    <Box display="flex" width="100%" height="100%">
      <Sidebar />
      <Navbar  />
      <Outlet />
    </Box>
  );
}
