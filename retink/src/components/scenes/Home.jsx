import { Box, Typography } from "@mui/material";
import Banner from "./Banner";
import SocialMedia from "./SocialMedia";
import { Add } from "@mui/icons-material";
import { theme } from "../../theme";
import { useContext } from "react";
import { authContext } from "../../context/AuthContext";

export default function Home() {
  const { userData } = useContext(authContext);
  return (
    <Box
      sx={{
        mt: "10vh",
      }}
    >
      <Banner userData={userData} />
      <Box
        sx={{
          mt: "5vh",
          ml:"2vh"
        }}
      >
        <Box sx={{position:"fixed", top: "85vh", right:"10vh",
         [theme.breakpoints.down('md')]:{display:"none"},
         [theme.breakpoints.down('lg')]:{display:"none"},
         [theme.breakpoints.down('xl')]:{display:"none"},
         [theme.breakpoints.down('sm')]:{display:"block"}}}>
        <Add sx={{fontSize:"10vh", background: "rgba(94, 62, 186, 1)",
        color:"#fff", borderRadius:"2vh"
}} />
      </Box>
        <SocialMedia />
      </Box>
    </Box>
  );
}
