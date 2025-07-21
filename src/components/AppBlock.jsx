import React from "react";
import "./AppBlock.css";

const AppBlock = ({ app, onClick }) => {
  const handleClick = () => {
    onClick(app);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onClick(app);
    }
  };

  return (
    <div
      className="app-block"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-label={`Open ${app.name}`}>
      <div className="app-image">
        {app.image ? (
          <img
            src={app.image}
            alt={app.name}
            onError={(e) => {
              e.target.style.display = "none";
              e.target.nextSibling.style.display = "flex";
            }}
          />
        ) : null}
        <div
          className="image-placeholder"
          style={{ display: app.image ? "none" : "flex" }}>
          <span>{app.name.charAt(0).toUpperCase()}</span>
        </div>
      </div>

      <div className="app-name">
        <span>{app.name}</span>
      </div>

      {app.description && (
        <div className="app-description">
          <span>{app.description}</span>
        </div>
      )}
    </div>
  );
};

export default AppBlock;
