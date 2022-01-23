import React from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

export default function Records() {
  const handleTimeStamp = () => {
    var today = new Date();
    setTimeStamp(
      today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
    );
  };
  return (
    <div>
      <AccessTimeIcon></AccessTimeIcon>
    </div>
  );
}
