// api/session.js
export default function handler(req, res) {
  const generateSessionId = () => {
    return 'sess_' + Math.random().toString(36).substr(2, 9);  // Random string
  };

  const sessionId = generateSessionId();
  res.status(200).json({ sessionId });
}
npm install uuid
// api/session.js
import { v4 as uuidv4 } from 'uuid';

export default function handler(req, res) {
  const sessionId = uuidv4();  // Generate a unique UUID
  res.status(200).json({ sessionId });
}
