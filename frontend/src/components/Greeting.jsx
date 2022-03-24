import React, { useState } from "react";

const Greeting = () => {
  const hour = new Date();
  const getHour = hour.getHours();
  const [getHourNow, setGetHourNow] = useState("");
  return (
    <div>
      <h1>{}</h1>
    </div>
  );
};

export default Greeting;
