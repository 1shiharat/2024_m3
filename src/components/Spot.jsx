import React from 'react';
import { logOperation } from '../api/client';

function Spot({ spot, color, onClick, eventId }) {
  const handleClick = async () => {
    try {
      await logOperation(eventId, 'SPOT', spot.id);
      onClick(spot);
    } catch (error) {
      console.error('ログの記録に失敗しました:', error);
    }
  };

  return (
    <div
      className="spot"
      style={{
        backgroundColor: color,
        left: `${spot.location_x}px`,
        top: `${spot.location_y}px`
      }}
      onClick={handleClick}
    />
  );
}

export default Spot; 