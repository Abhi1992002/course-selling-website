import { Typography } from "@mui/material";
import Featurecontent from "./Featurecontent";
import FeatureCard from "./FeatureCard";
import { useState } from "react";
import one from '../../assets/hero/1.png'
import two from '../../assets/hero/2.png'
import three from '../../assets/hero/3.png'
import four from '../../assets/hero/4.png'
import five from '../../assets/hero/5.png'
import {motion} from 'framer-motion'

const imageVariants = {
  hidden: {
    filter: "contrast(100%) brightness(100%) hue-rotate(0deg)",
  },
  visible: {
    filter: "contrast(120%) brightness(100%) hue-rotate(180deg)",
    transition: {
      repeat:Infinity,
      repeatType:'reverse',
      duration:2
    },
  }
};

export default function Features() {
  const features = [
    {
      title: "Create a New Course.",
      id: 1,
      bgColor:"linear-gradient(to right, #ee9ca7, #ffdde1)",
      bgImg:one
    },
    {
      title: "Browse all the courses made by others.",
      id: 2,
      bgColor:"linear-gradient(to right, #2980b9, #6dd5fa, #ffffff)",
      bgImg:two
    },
    {
      title: "Purchase courses that you like.",
      id: 3,
      bgColor:"linear-gradient(to left, #4ac29a, #bdfff3)",
      bgImg:three
    },
    {
      title: "Using signin and signup for extra security",
      id: 4,
      bgColor:"linear-gradient(to right, #d3cce3, #e9e4f0)",
      bgImg:four
    },
    {
      title: "using JWT to authenticate user fast",
      id: 5,
      bgColor:"linear-gradient(to right, #fbd3e9, #bb377d)",
      bgImg:five
    },
  ];

  const [id , setId] = useState(null)

  function getId(data){
     setId(data)
  }

  return (
    <div
      style={{
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        gap: "100px",
      }}
    >
      <Typography
        style={{ paddingTop: "100px", textAlign: "center" }}
        variant="h2"
      >
        What can you do ?
      </Typography>
      <div style={{ width: "100vw", display: "flex" }}>
        <div
        className="content-feature"
          style={{
            background: "",
            width: "50%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "30px",
            paddingTop: "50vh",
            paddingBottom: "50vh",
            textAlign: "center",
            gap: "200px",
          }}
        >
        {
            features.map((feature)=>{
            return ( <Featurecontent getId = {getId} key={feature.id} id={feature.id}>
                {feature.title}
                    </Featurecontent>
            )
            })
        }
          
        </div>
        <div
        className="card-feature"
          style={{
            width: "50%",
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "sticky",
            top: 0,
          }}
        >
          <div
          
            style={{
              width: "400px",
              height: "400px",
              background: "#7a7b7d",
              borderRadius: "20px",
            }}
          >

           {features.map((feature)=>{
            return <FeatureCard sendId={id} bgColor={feature.bgColor} id={feature.id} key={feature.id}>
              <motion.img variants={imageVariants} initial="hidden" animate ="visible"  style={{width:"350px"}} src={feature.bgImg} />
            </FeatureCard>
           })}
          </div>
        </div>
      </div>
    </div>
  );
}
