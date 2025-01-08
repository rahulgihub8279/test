import React from "react";

export default function AlertComp(props) {
  const capitalize = (word) => {
    const lower = word.toLowerCase();
    return word.charAt(0).toUpperCase() + lower.slice(1);
  };
  return (
    props.alert && (
      <div
        className={`alert alert-${props.alert.type} alert-dismissible fade show fade-in`}
        role="alert"
      >
        <strong>{capitalize(props.alert.type)}</strong> : <strong>{props.alert.msg}</strong>  
      </div>
    )
  );
}
