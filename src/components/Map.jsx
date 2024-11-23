import React, { useEffect, useState } from 'react';
import Spot from './Spot';
import { fetchSpots } from '../api/client';

function Map({ theme, onSpotClick, eventId }) {
  const [spots, setSpots] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadSpots = async () => {
      try {
        setLoading(true);
        const data = await fetchSpots(eventId);
        if (Array.isArray(data)) {
          setSpots(data);
        } else {
          setError('スポットデータの形式が不正です');
        }
      } catch (err) {
        setError('スポットデータの取得に失敗しました');
        console.error('Error loading spots:', err);
      } finally {
        setLoading(false);
      }
    };

    if (eventId) {
      loadSpots();
    }
  }, [eventId]);

  if (loading) return <div>読み込み中...</div>;
  if (error) return <div>エラー: {error}</div>;

  return (
    <div className="map" style={{ backgroundColor: theme.mapBg }}>
      {spots.map(spot => (
        <Spot 
          key={spot.id}
          spot={spot}
          color={theme.spotColor}
          onClick={() => onSpotClick(spot)}
          eventId={eventId}
        />
      ))}
    </div>
  );
}

export default Map; 