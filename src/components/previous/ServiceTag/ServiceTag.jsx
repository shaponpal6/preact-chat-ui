import React from "React";
import "./ServiceTag.css";

const ServiceTag = props => {
  const tag = props.tag;

  return (
    <div className="ServiceTag">{tag}</div>
  );
};

export default ServiceTag;
