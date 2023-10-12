import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

import { HomeOutlined, ArticleOutlined, SettingsOutlined, LogoutOutlined } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { theme } from "../theme";

const navItems = [
  {
    text: "Home",
    icon: <HomeOutlined />,
  },
  {
    text: "Article",
    icon: <ArticleOutlined />,
  },
];

export default function Sidebar() {
  const [active, setActive] = useState("");
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setActive(pathname.substring(1));
  }, [pathname]);

  return (
    <Box component="nav"  sx={{
      [theme.breakpoints.down('sm')]: {
        display:'none'
      },
  }}>
      <Drawer
        open
        variant="persistent"
        anchor="left"
        sx={{
          width: "8vh",
          "& .MuiDrawer-paper": {
            color: "black",
            backgroundColor: "#F1EDFD",
            boxSizing: "border-box",
            width: "8vh",
            overflow: "hidden",
          },
        }}
      >
        <Box width="100%">
          <Box sx={{ display: "flex", justifyContent: "center", mt: "2rem" }}>
            <Box>
              <Box
                component="img"
                src="http://retinkmedia.com/wp-content/uploads/2022/02/logo-01-1.png"
                width="30px"
              />
            </Box>
          </Box>
          <List>
            {navItems.map(({ text, icon }) => {
              if (!icon) {
                return (
                  <Typography key={text} sx={{ m: "0.1rem 0 1rem 3rem" }}>
                    {text}
                  </Typography>
                );
              }

              const lcText = text.toLocaleLowerCase();

              return (
                <ListItem
                  key={text}
                  disablePadding
                  sx={{ margin: "6vh 0 0 0" }}
                >
                  <ListItemButton
                    onClick={() => {
                      navigate(`/${lcText}`);
                      setActive(lcText);
                    }}
                    sx={{
                      backgroundColor:
                        active === lcText ? "#BEADFA" : "transparent",
                      color: active === lcText ? "#5D12D2" : "#451952",
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        color: active === lcText ? "#5D12D2" : "#5B0888",
                      }}
                    >
                      {icon}
                    </ListItemIcon>
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>

          <Box position="absolute" ml="0.5rem" bottom="7rem">
            <IconButton>
              <SettingsOutlined />
            </IconButton>
            <IconButton sx={{mt:"2rem"}}>
              <LogoutOutlined />
            </IconButton>
          </Box>
        </Box>
      </Drawer>
    </Box>
  );
}
