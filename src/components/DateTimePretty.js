import React from "react";
import moment from "moment";
import "moment/locale/ru";

const withDateTimePretty = (Component) => {
  const HOCWrapper = (props) => {
    const prettyTime = moment(props.date).fromNow();
    return <Component {...props} date={prettyTime} />;
  };
  return HOCWrapper;
};

export default withDateTimePretty;
