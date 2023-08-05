/* eslint-disable react/prop-types */

import { Button, Typography } from "@mui/material";

export default function CourseBoxSingle({title, description, imageLink, price }) {
  return (
    <div
      style={{
        // alignSelf: "flex-start",
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
        maxWidth: '420px',
        width:"90%"
      }}
    >
      <div
      className="edit-image-box-container"
        style={{
          width: "100%",
          overflow: "hidden",
          height: '250px',
          alignSelf: "center",
        }}
      >
        <img
          
          style={{ width: "100%", height:'100%', borderRadius: "20px" }}
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
        <Button
          style={{ width: "48%", padding: "10px", marginTop: "30px" }}
          variant="contained"
        >
          Buy Course
        </Button>
        <Button
          style={{ width: "48%", padding: "10px", marginTop: "30px" }}
          variant="contained"
        >
          Buy Course
        </Button>
      </div>
    </div>
  );
}
