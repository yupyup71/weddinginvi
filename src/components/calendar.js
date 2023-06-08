import React, { useState } from "react";
import Calendar from "react-calendar";

export function MyApp() {
  const [value, onChange] = useState(new Date(2024, 3, 30));

  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Calendar
        onChange={onChange}
        value={value}
        locale="En"
        calendarType="US"
      />
    </div>
  );
}
