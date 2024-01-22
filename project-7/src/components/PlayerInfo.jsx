import React, { useState } from "react";

export function PlayerInfo({ name, symbol }) {
  const [playerName, setPlayerName] = useState(name);
  const [isEditing, setIsEditing] = useState(false);

  return (
    <li>
      <span className="player">
        {isEditing ? (
          <input
            type="text"
            value={playerName}
            onChange={(e) => setPlayerName(e.target.value)}
          />
        ) : (
          <span className="player-name">{playerName}</span>
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
