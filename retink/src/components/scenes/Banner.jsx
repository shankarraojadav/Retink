import { Box, Button, IconButton, Typography, InputBase } from "@mui/material";
import "../../styles/banner.css";
import {
  CalendarMonth,
  LocalFireDepartmentTwoTone,
  Search,
} from "@mui/icons-material";
import { SiWindowsxp } from "react-icons/si";
import { theme } from "../../theme";
import { authContext } from "../../context/AuthContext";
import { useContext } from "react";

export default function Banner() {
  const { userData } = useContext(authContext);
  const {photoURL} = userData;
  return (
    <Box className="banner_page">
      <Box className="banner" sx={{
        [theme.breakpoints.down("lg")]: { width:"88vw", mr:'5vh' },
        [theme.breakpoints.down("md")]: { width:"84vw", mr:'5vh' },
        [theme.breakpoints.down("sm")]: { width:"100%", m:"0", mt:"-10vh"},        
      }}>
        {/* mobile */}

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            [theme.breakpoints.down('md')]: {display:"none"},
            [theme.breakpoints.down('lg')]: {display:"none"},
            [theme.breakpoints.down('xl')]: {display:"none"},
            [theme.breakpoints.down('sm')]: {display:"block", width:"70vh"},
            
          }}
        >
          <Box className="mobile_banner" >
            <Box
              sx={{
                background: "#FFFFFF80",
                width: "fit-content",
                padding: "1vh",
                borderRadius: "1.5vh",
                height:"fit-content",
                
              }}
            >
              <SiWindowsxp size={30} color="#463D61" />
            </Box>
            <Box >
              <select className="banner_drop_down" style={{padding:"2vh", width:"25vh"}} >
                <option>Zara Ventures</option>
                <option>H&M Ventures</option>
              </select>
            </Box>

            <Box
              sx={{
                boxShadow:
                  "0px 1.600000023841858px 3.5999999046325684px 0px rgba(117, 77, 232, 0.13)",
                width: "fit-content",
                borderRadius: "3vh",
                
              }}
            >
              <Box
                component="img"
                src={photoURL}
                width="8vh"
                height="8vh"
                borderRadius="3vh"
              />
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
             
            }}
          >
            <Typography className="banner_name">Hey James!</Typography>
            <Typography className="banner_sub_title">
              Lets create something awseome today
              <Box
                component="img"
                src="https://res.cloudinary.com/dflhxdxgb/image/upload/v1696924955/fjb7xnu3auepgvxhjsnq.png"
                width="3vh"
              />
            </Typography>
          </Box>
          <Box sx={{ background: "#fff", borderRadius: "1vh", mt: "5vh",
        [theme.breakpoints.down('ms')]: {width:"60vh"},
        [theme.breakpoints.down('ms2')]: {width:"50vh"},
        [theme.breakpoints.down('ms3')]: {width:"40vh"} }} >
            <IconButton>
              <Search />
            </IconButton>
            <InputBase
              placeholder="Search for templates, projects, etc"
              sx={{ fontSize: "1.5vh", }}
              
            />
          </Box>
        </Box>


        {/* desktop */}

        <Box className="banner_cont_left" sx={{
         display:"flex", flexDirection:"column",
         [theme.breakpoints.down('sm')]:{display:"none"}
        }}>
          <Box className="titles" >
            <Typography className="banner_name">Hey James!</Typography>
            <Typography className="banner_sub_title">
              Lets create something awseome today
              <Box
                component="img"
                src="https://res.cloudinary.com/dflhxdxgb/image/upload/v1696924955/fjb7xnu3auepgvxhjsnq.png"
                width="3vh"
              />
            </Typography>
          </Box>
          <Box sx={{ mt: "6vh" }} className="banner_cont_button">
            <Button
              variant="outlined"
              sx={{ color: "#5D12D2", background: "#fff" }}
            >
              Start Editing
            </Button>
          </Box>
        </Box>

        <Box className="banner_right" sx={{[theme.breakpoints.down('sm')]: {display:"none"}}} >
          <Box className="banner_menu" >
            <select className="banner_drop_down">
              <option>Zara Ventures</option>
              <option>H&M Ventures</option>
            </select>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              mt: "10vh",
              
            }}
          >
            <Typography className="right_content">
              You should have more engagement by 6pm today, try posting then{" "}
              <CalendarMonth />
            </Typography>
            <Typography className="right_content" sx={{ mt: "3vh" }}>
              Try our SEO optimization tool to increase enagement by 40%
              <LocalFireDepartmentTwoTone sx={{ color: "red" }} />
            </Typography>
          </Box>
        </Box>
       
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
         
        }}
      >
        <Typography sx={{ fontSize: "4vh" }}>Most Popular Tools</Typography>
        <Typography sx={{ fontSize: "2vh" }}>
          Explore the trending tools to create your copies fast
        </Typography>
      </Box>
    </Box>
  );
}
