import React from "react";
import Clock from "react-live-clock";
const Hour = () => {
  return (
    <div className="hour">
      <Clock format={"HH:mm"} ticking={true} timezone={"INA"} />
    </div>
  );
};

export default Hour;
