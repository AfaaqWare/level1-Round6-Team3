"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const INITIAL_TIME = 60;

export default function useOTPTimer() {
  const [timer, setTimer] = useState(INITIAL_TIME);

  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startTimer = useCallback(() => {
    // Clear any existing timer
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    intervalRef.current = setInterval(() => {
      setTimer(prev => {
        if (prev <= 1) {
          if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
          }

          return 0;
        }

        return prev - 1;
      });
    }, 1000);
  }, []);

  useEffect(() => {
    startTimer();

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [startTimer]);

  const resetTimer = useCallback(() => {
    // Stop old timer
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    // Reset to 60
    setTimer(INITIAL_TIME);

    // Start a completely new timer
    startTimer();
  }, [startTimer]);

  return {
    timer,
    resetTimer,
  };
}
