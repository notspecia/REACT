const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const db = new sqlite3.Database('./db.sqlite');

// Creazione tabella se non esiste
db.run(`
  CREATE TABLE IF NOT EXISTS utenti (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT
  )
`);

// GET - Elenco utenti
app.get('/api/utenti', (req, res) => {
    db.all('SELECT * FROM utenti', (err, rows) => {
        if (err) return res.status(500).json({ errore: 'Errore DB' });
        res.json(rows);
    });
});

// POST - Aggiunta utente
app.post('/api/utenti', (req, res) => {
    const { username } = req.body;
    db.run('INSERT INTO utenti (username) VALUES (?)', [username], function (err) {
        if (err) return res.status(500).json({ errore: 'Errore inserimento' });
        res.status(201).json({ id: this.lastID, username });
    });
});

app.listen(3000, () => {
    console.log('✅ Backend attivo su http://localhost:3000');
});
