import React, { FC, useEffect, useRef, useState } from "react";
import { Player } from "../models/Player";
import { Colors } from "../models/Colors";
import { Button, Paper, Typography } from "@mui/material";

interface TimerProps {
  currentPlayer: Player | null;
  restart: () => void;
}

const Timer: FC<TimerProps> = ({
                                 currentPlayer,
                                 restart
                               }) => {
  const [blackTime, setBlackTime] = useState(300);
  const [whiteTime, setWhiteTime] = useState(300);
  const timer = useRef<null | ReturnType<typeof setInterval>>(null);

  useEffect(() => {
    startTimer();
    setBlackTime(300);
    setWhiteTime(300);
  }, [currentPlayer]);

  function startTimer() {
    if (timer.current) {
      clearInterval(timer.current);
    }
    const callback = currentPlayer?.color === Colors.WHITE ? decrementWhiteTimer : decrementBlackTimer;
    timer.current = setInterval(callback, 1000);
  }

  function decrementBlackTimer() {
    setBlackTime(prev => prev - 1);
  }

  function decrementWhiteTimer() {
    setWhiteTime(prev => prev - 1);
  }

  const handleRestart = () => {
    setWhiteTime(300);
    setBlackTime(300);
    restart();
  };

  return (
    <div style={{ marginRight: "24px" }}>
      <Button variant="outlined" color="warning" onClick={handleRestart} sx={{ mb: "16px" }}>Restart
        game</Button>
      <Paper elevation={3} sx={{
        p: "12px",
        mb: "16px"
      }}>
        <Typography sx={{
          textTransform: "uppercase",
          fontWeight: "700"
        }}>
          Black - {blackTime}
        </Typography>
      </Paper>
      <Paper elevation={3} sx={{ p: "12px" }}>
        <Typography sx={{
          textTransform: "uppercase",
          fontWeight: "700"
        }}>
          White - {whiteTime}
        </Typography>
      </Paper>
    </div>
  );
};

export default Timer;
