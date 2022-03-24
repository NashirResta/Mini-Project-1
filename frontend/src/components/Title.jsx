import React, { useEffect, useState } from "react";
import "./#Component.css";

const Title = props => {
  const { children } = props;
  const hour = new Date();
  const getHour = hour.getHours();
  const [getHourNow, setGetHourNow] = useState("");
  useEffect(() => {
    if (getHour > 3 && getHour <= 12) {
      setGetHourNow("Good morning");
    } else if (getHour => 12 && getHour < 18) {
      setGetHourNow("Good afternoon");
    } else if (getHour => 18 && getHour < 3) {
      setGetHourNow("Good evening");
    }
  }, []);

  return (
    <div className="title">
      <h1>
        {children || `${getHourNow}, `} {props.firstName}
      </h1>
    </div>
  );
};

export default Title;
