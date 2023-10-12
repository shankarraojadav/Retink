import { AppBar, Avatar, Box, Toolbar, Typography } from "@mui/material";
import { IconButton, InputBase, Menu, MenuItem } from "@mui/material";
import { CalendarMonth, Notifications, Search } from "@mui/icons-material";
import { theme } from "../theme";
import { authContext } from "../context/AuthContext";
import { useContext } from "react";

export default function Navbar() {
  const { userData } = useContext(authContext);
  const {photoURL} = userData;
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        width:"100%",
        [theme.breakpoints.down('sm')]:{display:"none"}
      }}
      className="banner_page"
    >
      <AppBar
        sx={{
          position: "fixed",
          top: 0,
          right: 0,
          left: "8vh",
          background: "#EBEAEF",
          width:"70%", [theme.breakpoints.down('sm')]: {
            left:0,
          },
          
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box sx={{ background: "#fff", borderRadius: "1vh" }}>
            <IconButton>
              <Search />
            </IconButton>
            <InputBase
              placeholder="Search for templates, projects, etc"
              sx={{ width: "50vh", fontSize: "1.5vh", [theme.breakpoints.down('md')]: {
                width:"30vh"
              },  [theme.breakpoints.down('sm')]: {
                width:"10vh"
              }, }}
            />
          </Box>
          <Box
            sx={{ background: "#610C9F", padding: "1vh", borderRadius: "3vh" }}
          >
            <Typography sx={{ fontSize: "1.5vh", width:"30vh",  [theme.breakpoints.down('md')]: {
                width:"20vh"
              }, textAlign:"center", cursor:"pointer" }}>Create Content</Typography>
          </Box>

          <Box
            sx={{
              background: "#D0BFFF",
              padding: "1vh",
              borderRadius: "3vh",
              width: "5vh",
              textAlign: "center",
            }}
          >
            <Typography
              sx={{ fontSize: "1.5vh", fontWeight: "bold", color: "#000" }}
            >
              C 20
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
     
        <AppBar  sx={{background:"#D4C8F8", width:"26%", [theme.breakpoints.down('md')]: {
                width:"24%"
              } , [theme.breakpoints.down('sm')]: {
                width:"30%"
              } ,position: "fixed", 
          top: 0,}}>
            <Toolbar sx={{display:"flex", justifyContent:"space-around"}}>
                <IconButton>
                    <CalendarMonth />
                </IconButton>
                <IconButton>
                    <Notifications />
                </IconButton>
                <IconButton>
                    <Box
                    component="img"
                    src="" />
                </IconButton>
            </Toolbar>
        </AppBar>
      
    </Box>
  );
}
