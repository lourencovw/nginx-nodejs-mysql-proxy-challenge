const express = require('express');
const mysql = require('mysql');

const conn = mysql.createConnection({
    host: 'mysql',
    user: 'root',
    password: 'root',
    database: 'db'
});

conn.connect((err) => {
    if (err) {
        console.error("mysql connection error: ", err);
        return;
    }
    console.log('mysql connection successful');
});

const app = express();

app.get('/', (_, res) => {
    res.set('Content-Type', 'text/html');
    const query = 'INSERT INTO people (first_name, last_name) VALUES (?, ?)';
    conn.query(query, ['John', 'Doe'], (err, result) => {
        if (err) {
            console.error('Error inserting into MySQL: ' + err.stack);
            res.status(500).send('Error inserting into MySQL');
            return;
        }
        console.log('New person added to the database with ID: ' + result.insertId);

        const selectAllQuery = 'SELECT * FROM people';
        conn.query(selectAllQuery, (err, results) => {
            if (err) {
                console.error('Error querying MySQL: ' + err.stack);
                res.status(500).send('Error querying MySQL');
                return;
            }
            const people = results.map(person => `<li>${person.first_name} ${person.last_name}</li>`).join('');
            res.send(Buffer.from(`<h1>Full Cycle Rocks!</h1>${people}`));
        });
    });
})

app.listen(3000, () => {
    console.log('express listen on 3000');
})
