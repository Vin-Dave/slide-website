import React, { useState } from "react";

export function PlayerInfo({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false);
  return (
    <li>
      <span className="player">
        {isEditing ? (
          <input type="text" />
        ) : (
          <span className="player-name">{name}</span>
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button
        onClick={() => {
          setIsEditing((p) => (p = !p));
        }}
      >
        {isEditing ? "Save" : "Edit"}
      </button>
    </li>
  );
}
