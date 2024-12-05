/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useRef } from "react";
import "./ImageMagnifier.css";

const ImageMagnifier = ({ src, alt }) => {
  const [showMagnifier, setShowMagnifier] = useState(false);
  const [[x, y], setXY] = useState([0, 0]);
  const [[imgWidth, imgHeight], setSize] = useState([0, 0]);
  const imgRef = useRef(null);

  const magnifierHeight = 150;
  const magnifierWidth = 150;
  const zoomLevel = 2.5;

  const handleMouseMove = (e) => {
    const elem = imgRef.current;
    const { top, left } = elem.getBoundingClientRect();

    // Calculate cursor position inside element
    const x = e.pageX - left - window.scrollX;
    const y = e.pageY - top - window.scrollY;
    setXY([x, y]);
  };

  const handleMouseEnter = () => {
    const elem = imgRef.current;
    const { width, height } = elem.getBoundingClientRect();
    setSize([width, height]);
    setShowMagnifier(true);
  };

  return (
    <div className="img-magnifier-container">
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        className="magnifier-img"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={() => setShowMagnifier(false)}
        onMouseMove={handleMouseMove}
      />

      {showMagnifier && (
        <div
          className="magnifier-lens"
          style={{
            left: `${x - magnifierWidth / 2}px`,
            top: `${y - magnifierHeight / 2}px`,
            backgroundImage: `url('${src}')`,
            backgroundPosition: `
              ${-x * zoomLevel + magnifierWidth / 2}px 
              ${-y * zoomLevel + magnifierHeight / 2}px
            `,
            backgroundSize: `${imgWidth * zoomLevel}px ${
              imgHeight * zoomLevel
            }px`,
          }}
        />
      )}
    </div>
  );
};

export default ImageMagnifier;
