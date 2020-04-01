import React from "react";

const TimeOfDay = () => {
  const date = new Date();
  const hours = date.getHours();
  let timeOfday;
  const styleTimeOfDay = {
    fontSize: "24px",
    backgroundColor: "green"
  }
  if (hours < 12) {
    timeOfday = "morning";
    styleTimeOfDay.color = "gray";
  } else if (hours >= 12 && hours < 17) {
    timeOfday = "afternoon";
    styleTimeOfDay.color = "blue";
  } else {
    timeOfday = "night";
    styleTimeOfDay.color = "yellow";
  }
  
  return (
    <h1 style={styleTimeOfDay}> Good {timeOfday}</h1>
  )
};

export default TimeOfDay;
