import React, { useState } from "react";
import { Box, Button, IconButton, Typography } from "@mui/material";
import {
  Create,
  AutoFixHighOutlined,
  DataSaverOffOutlined,
  TrendingUpOutlined,
  Add,
} from "@mui/icons-material";
import "../../styles/socialmedia.css";
import { theme } from "../../theme";

const data = [
  {
    icon: <DataSaverOffOutlined />,
    icon1: <TrendingUpOutlined />,
    title: "Book Club Meeting",
    description:
      "Our book club will discuss the...",
  },
  {
    icon: <Create />,
    icon1: <TrendingUpOutlined />,
    title: "Product 1",
    description: "This is the description...",
  },
  {
    icon: <AutoFixHighOutlined />,
    icon1: <TrendingUpOutlined />,
    title: "Item A",
    description: "Description of item A goes here.",
  },
  {
    icon: <DataSaverOffOutlined />,
    icon1: <TrendingUpOutlined />,
    title: "Book Club Meeting",
    description:
      "Our book club will discuss the...",
  },
  {
    icon: <Create />,
    icon1: <TrendingUpOutlined />,
    title: "Product 1",
    description: "This is the description...",
  },
  {
    icon: <AutoFixHighOutlined />,
    icon1: <TrendingUpOutlined />,
    title: "Item A",
    description: "Description of item A goes here.",
  },
  {
    icon: <DataSaverOffOutlined />,
    icon1: <TrendingUpOutlined />,
    title: "Book Club Meeting",
    description:
      "Our book club will discuss the...",
  },
  {
    icon: <Create />,
    icon1: <TrendingUpOutlined />,
    title: "Product 1",
    description: "This is the description...",
  },
  {
    icon: <AutoFixHighOutlined />,
    icon1: <TrendingUpOutlined />,
    title: "Item A",
    description: "Description of item A goes here.",
  },
  {
    icon: <DataSaverOffOutlined />,
    icon1: <TrendingUpOutlined />,
    title: "Book Club Meeting",
    description:
      "Our book club will discuss the...",
  },
  {
    icon: <Create />,
    icon1: <TrendingUpOutlined />,
    title: "Product 1",
    description: "This is the description...",
  },
  {
    icon: <AutoFixHighOutlined />,
    icon1: <TrendingUpOutlined />,
    title: "Item A",
    description: "Description of item A goes here.",
  },
  {
    icon: <DataSaverOffOutlined />,
    icon1: <TrendingUpOutlined />,
    title: "Book Club Meeting",
    description:
      "Our book club will discuss the...",
  },
  {
    icon: <Create />,
    icon1: <TrendingUpOutlined />,
    title: "Product 1",
    description: "This is the description...",
  },
  {
    icon: <AutoFixHighOutlined />,
    icon1: <TrendingUpOutlined />,
    title: "Item A",
    description: "Description of item A goes here.",
  },
 
];

export default function SocialMedia() {
  return (
    <Box className="social media">
      {/* <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          [theme.breakpoints.down("md")]: { display: "none" },
          [theme.breakpoints.down("sm")]: { display: "block" },
        }}
      >
        <Typography sx={{ fontSize: "4vh" }}>Most Popular Tools</Typography>
        <Typography sx={{ fontSize: "2vh" }}>
          Explore the trending tools to create your copies fast
        </Typography>
      </Box> */}
      <Typography className="social_media_title">Social Media</Typography>

  
        <Box className="social_card_box">
          <Box className="carousel">
            <Box className="carousel_card">
              {data.map(({ icon, icon1, title, description }, index) => {
                return (
                  <Box key={index} className="card">
                    <Box
                      sx={{ display: "flex", justifyContent: "space-between" }}
                    >
                      <Box>{icon}</Box>
                      <Box>{icon1}</Box>
                    </Box>
                    <Box>
                      <Typography>{title}</Typography>
                      <Typography className="text">{description}</Typography>
                    </Box>
                  </Box>
                );
              })}
            </Box>
          </Box>
        
      </Box>
      
    </Box>
  );
}
