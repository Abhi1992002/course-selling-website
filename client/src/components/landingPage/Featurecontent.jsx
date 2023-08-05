/* eslint-disable react/prop-types */
import { Typography } from "@mui/material";
import { useInView } from "framer-motion";
import { useEffect, useRef } from "react";



export default function Featurecontent({children,id,getId}) {

    const ref = useRef()
    const isInView = useInView(ref,{margin:"-200px 0px -50% 0px"})


    useEffect(()=>{
      if(isInView){
        getId(id)
      }
       
    },[isInView,getId,id])

  return (
    <Typography
    ref = {ref}
    key={id}
    style={isInView ? { color:"white" }: {color: "#7a7b7d"}}
    variant="h3"
  >
    {children}
  </Typography>
  )
}
