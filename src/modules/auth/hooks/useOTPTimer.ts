"use client";

import { useEffect, useState } from "react";

const INITIAL_TIME = 60;

export default function useOTPTimer() {
  const [timer, setTimer] = useState(INITIAL_TIME);

  useEffect(() => {
    if (timer === 0) {
      return;
    }

    const interval = setInterval(() => {
      setTimer(prev => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timer]);

  const resetTimer = () => {
    setTimer(INITIAL_TIME);
  };

  return {
    timer,
    resetTimer,
  };
}
