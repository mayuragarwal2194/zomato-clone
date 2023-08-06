import React from 'react';
import './carousel.css'

export default function PreviousArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "4px",
        background: "white",
        borderRadius: "50%"
      }}
      onClick={onClick} >
    </div>
  )
}
