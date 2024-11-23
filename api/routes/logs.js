import express from 'express';
import { dummyData } from '../data/dummy.js';

const router = express.Router();

router.post('/', (req, res) => {
  const { event_id, spot_id, operation_type } = req.body;

  if (!event_id || !operation_type) {
    return res.status(404).json({ error: 'Missing required parameters' });
  }

  if (!dummyData.events[event_id]) {
    return res.status(404).json({ error: 'Event not found' });
  }

  if (spot_id) {
    const spotExists = dummyData.events[event_id].spots.some(
      spot => spot.id === Number(spot_id)
    );
    if (!spotExists) {
      return res.status(404).json({ error: 'Spot not found' });
    }
  }

  // 実際のログ保存処理は省略
  console.log('Log recorded:', { event_id, spot_id, operation_type });
  
  res.status(204).send();
});

export default router;