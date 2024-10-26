"use client";

import React, { useState } from "react";
import { SketchPicker } from "react-color";

const ColorPicker = () => {
  const [color, setColor] = useState("#fff");

  return (
    <div className="flex flex-col items-center">
      <SketchPicker
        className="text-black"
        color={color}
        onChangeComplete={(color) => setColor(color.hex)}
      />
      <div className="w-32 h-32 mt-4" style={{ backgroundColor: color }}></div>
      <p className="mt-2">Selected Color: {color}</p>
    </div>
  );
};

export default ColorPicker;
