/* eslint-disable react/prop-types */

import { Button, Typography } from "@mui/material";

export default function CourseBox({showButton,title,courseId, description, imageLink, price ,buyCourse}) {

  return (
    <div
   
      style={{
        alignSelf: "flex-start",
        background: "transparent",
        borderRadius: "20px",
        backdropFilter: "blur(200px)",

        zIndex: "100",
        border: "2px solid white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "10px 10px 30px 10px",
        gap: "20px",
        maxWidth: '280px',
        marginTop:'30px'
      }}
    >
      <div
        style={{
          width: "260px",
          overflow: "hidden",
          height: '200px',
          alignSelf: "center",
        }}
      >
        <img
          style={{ width: '100%', height:'200px', borderRadius: "20px" }}
          src={imageLink}
          alt=""
        />
      </div>

      <div style={{ display: "flex", gap: "20px" }}>
        <Typography variant="h5">{title}</Typography>

        <Typography variant="h6" style={{ color: "#eeeeee" }}>
          ${price}
        </Typography>
      </div>

      <Typography style={{ color: "#757575" }}>{description}</Typography>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "-20px",
        }}
      >
       {
        showButton ? <Button
        style={{ width: "100%", padding: "10px", marginTop: "30px" }}
        variant="contained"
        onClick={() => buyCourse(courseId)}
      >
        Buy Course
      </Button> : ''
       } 
       
      </div>
    </div>
  );
}
