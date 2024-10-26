"use client";

import React, { useEffect, useState } from 'react';

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold">Current Time</h2>
      <p className="text-xl">{time.toLocaleTimeString()}</p>
    </div>
  );
};

export default Clock;
