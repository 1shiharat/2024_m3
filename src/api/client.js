const API_BASE_URL = 'http://localhost:3000/api';

export const fetchEvent = async (eventId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/events?id=${eventId}`);
    if (!response.ok) {
      throw new Error('イベントの取得に失敗');
    }
    return await response.json();
  } catch (error) {
    console.error('イベントの取得に失敗:', error);
    throw error;
  }
};

export const fetchSpots = async (eventId) => {
  if (!eventId) {
    throw new Error('イベントIDが必要です');
  }

  try {
    const response = await fetch(`${API_BASE_URL}/spots?event_id=${eventId}`);
    if (!response.ok) {
      throw new Error('スポットの取得に失敗');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('スポットの取得に失敗:', error);
    throw error;
  }
};

export const logOperation = async (eventId, operationType, spotId = null) => {
  try {
    const response = await fetch(`${API_BASE_URL}/logs`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        event_id: eventId,
        operation_type: operationType,
        ...(spotId && { spot_id: spotId })
      })
    });
    if (!response.ok) {
      throw new Error('ログの記録に失敗');
    }
  } catch (error) {
    console.error('ログの記録に失敗:', error);
    throw error;
  }
}; 