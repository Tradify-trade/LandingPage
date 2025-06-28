export default function handler(req, res) {
    // Handle different methods
    if (req.method === 'GET') {
      // Set redirect headers
      res.setHeader('Location', 'https://t.me/onesecondtradebot');
      res.setHeader('Cache-Control', 'no-cache');
      res.status(302).end();
    } else {
      res.status(405).json({ error: 'Method not allowed' });
    }
  }