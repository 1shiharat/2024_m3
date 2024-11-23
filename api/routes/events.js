import express from 'express';
import { dummyData } from '../data/dummy.js';

const router = express.Router();

router.get('/', (req, res) => {
  const { id } = req.query;
  
  if (!id) {
    return res.status(404).json({ error: 'Event ID is required' });
  }

  const event = dummyData.events[id];
  if (!event) {
    return res.status(404).json({ error: 'Event not found' });
  }

  res.status(200).json(event);
});

export default router;