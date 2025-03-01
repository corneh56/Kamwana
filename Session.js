// api/session.js
export default function handler(req, res) {
  const generateSessionId = () => {
    return 'sess_' + Math.random().toString(36).substr(2, 9);  // Random string
  };

  const sessionId = generateSessionId();
  res.status(200).json({ sessionId });
}
