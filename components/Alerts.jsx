import React from 'react';

export function Alerts(props) {
  let capitalize = (typ) => {
    return typ.charAt(0).toUpperCase() + typ.slice(1);
  };

  return (
    props.alertData && (
      <div
        class={`alert alert-${props.alertData.type}  d-flex align-items-center my-0`}
        role="alert"
      >
        <span>{capitalize(props.alertData.type)}</span> :
        <div>{props.alertData.message}</div>
      </div>
    )
  );
}
