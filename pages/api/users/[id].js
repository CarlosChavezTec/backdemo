
import db from '../../../lib/db';

export default function handler(req, res) {
  const { id } = req.query;

  if (req.method === 'GET') {
    db.get("SELECT * FROM users WHERE id = ?", [id], (err, row) => {
      if (err) return res.status(500).json({ error: err.message });
      if (!row) return res.status(404).json({ error: 'Usuario no encontrado' });
      res.status(200).json(row);
    });
  } else if (req.method === 'PUT') {
    const { name, email } = req.body;
    db.run("UPDATE users SET name = ?, email = ? WHERE id = ?", [name, email, id], function(err) {
      if (err) return res.status(500).json({ error: err.message });
      res.status(200).json({ id, name, email });
    });
  } else if (req.method === 'DELETE') {
    db.run("DELETE FROM users WHERE id = ?", [id], function(err) {
      if (err) return res.status(500).json({ error: err.message });
      res.status(200).json({ deleted: this.changes > 0 });
    });
  } else {
    res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
