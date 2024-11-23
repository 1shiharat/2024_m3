import express from 'express';
import { dummyData } from '../data/dummy.js';

const router = express.Router();

router.get('/', (req, res) => {
  const { event_id, description, name, min_x, max_x, min_y, max_y } = req.query;

  if (!event_id) {
    return res.status(404).json({ error: 'Event ID is required' });
  }

  const event = dummyData.events[event_id];
  if (!event) {
    return res.status(404).json({ error: 'Event not found' });
  }

  let filteredSpots = event.spots;

  // フィルタリング処理
  if (description) {
    filteredSpots = filteredSpots.filter(spot => 
      spot.description.includes(description)
    );
  }

  if (name) {
    filteredSpots = filteredSpots.filter(spot => 
      spot.name.includes(name)
    );
  }

  if (min_x) {
    filteredSpots = filteredSpots.filter(spot => 
      spot.location_x >= Number(min_x)
    );
  }

  // 他のフィルター条件も同様に実装

  if (filteredSpots.length === 0) {
    return res.status(404).json({ error: 'No spots found' });
  }

  res.status(200).json(filteredSpots);
});

export default router;