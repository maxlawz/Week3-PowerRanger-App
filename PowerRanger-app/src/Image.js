import React from "react";

function Image(props) {
  return (
    <img
      src={props.src}
      width={props.width}
      alt="Rangers!"
      style={{
        borderRadius: "50%", // Make the image circular
        border: "3px solid white" // Add a white border around the image
      }}
    />
  );
}

export default Image;