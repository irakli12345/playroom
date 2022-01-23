import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import {
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
/* maybe run it once every 30 seconds, or once every minute, to save computing power
  Don't set timestamp in its current place, but instead have an expandable list of people currently playing, how many hours they have and time left
*/
export default function PSTracker() {
  const [minutes, setMinutes] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [hours, setHours] = useState(1);
  const toggle = () => {
    setIsActive(!isActive);
  };
  const reset = () => {
    setMinutes(0);
    setIsActive(false);
  };
  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setMinutes((minutes) => minutes + 1);
      }, 60000);
    } else if ((!isActive && minutes !== 0) || minutes === 61) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, minutes]);
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      <Button variant="contained" onClick={toggle} sx={{ width: 100 }}>
        {isActive ? "დაპაუზება" : "დაწყება"}
      </Button>
      <Button variant="outlined" color="error" onClick={reset}>
        ხელახლა
      </Button>
      <div style={{ position: "relative" }}>
        <CircularProgress
          variant="determinate"
          value={100}
          sx={{
            "&.MuiCircularProgress-root": {
              position: "absolute",
              left: "0",
              color: "lightgrey",
            },
          }}
          thickness={5}
        ></CircularProgress>
        <CircularProgress
          variant="determinate"
          value={(minutes * 1.65) / hours}
          sx={{
            "&.MuiCircularProgress-root": {
              zIndex: 4,
            },
            "&.MuiCircularProgress-svg": {
              color: "red",
              border: "2px solid grey",
            },
          }}
          thickness={5}
        ></CircularProgress>
      </div>
      <Typography variant="body1"> საათები : {hours} </Typography>
      <FormControl style={{ minWidth: 80 }}>
        <InputLabel id="1">საათები</InputLabel>
        <Select
          labelId="1"
          id="1"
          label="საათები"
          size="small"
          onChange={(e) => setHours(e.target.value)}
          value={hours}
        >
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
