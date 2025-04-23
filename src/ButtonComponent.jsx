import React, { useState } from "react";
import "./ButtonComponent.css";

const ButtonComponent = () => {
  const [isReading, setIsReading] = useState(false);
  const [isDone, setIsDone] = useState(false);

  return (
    <div className="container">
      <div className="button-group">
        {/* Reading Book Button */}
        <button
          onClick={() => setIsReading(!isReading)}
          className={`button reading-button ${
            isReading ? "strikethrough" : ""
          }`}
        >
          Reading Book
        </button>

        {/* Done/Undo Button */}
        <button
          onClick={() => setIsDone(!isDone)}
          className="button done-button"
        >
          {isDone ? "Undo" : "Done"}
        </button>

        {/* Delete Button */}
        <button
          onClick={() => alert("Delete button pressed")}
          className="button delete-button"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ButtonComponent;
