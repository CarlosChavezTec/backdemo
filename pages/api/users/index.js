import db from '../../../lib/db';

export default function handler(req, res) {
  if (req.method === 'GET') {
    db.all("SELECT * FROM users", [], (err, rows) => {
      if (err) return res.status(500).json({ error: err.message });
      return res.status(200).json(rows); 
    });
  } else if (req.method === 'POST') {
    const { name, email } = req.body;
    db.run("INSERT INTO users (name, email) VALUES (?, ?)", [name, email], function(err) {
      if (err) return res.status(500).json({ error: err.message });
      return res.status(201).json({ id: this.lastID, name, email }); 
    });
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
