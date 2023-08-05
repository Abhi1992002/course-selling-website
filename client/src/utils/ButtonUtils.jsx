/* eslint-disable react/prop-types */
import { Button as MuiButton } from "@mui/material";
import { motion } from "framer-motion";

const buttonVariants = {
    hover: {
      scale: 1.2,
      transition: {
        duration: 0.3,
      },
    },
    press: {
      scale: 0.9,
    },
  };
  const Button = motion(MuiButton);
export default function ButtonUtils({UIstyle,children,onClick}) {
  return (
    <Button
    onClick={onClick}
    color="primary"
    whileHover="hover"
    whileTap="press"
    variants={buttonVariants}
    variant="contained"
    style={UIstyle}
  >
    {children}
  </Button>
  )
}
