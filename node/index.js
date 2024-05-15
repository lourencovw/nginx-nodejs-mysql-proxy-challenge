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
    conn.query('SELECT * from people;', (err, results) => {
        if (err) {
            console.error(err);
            res.json({
                success: false,
                message: 'An error ocurred'
            });
            return;
        }
        const people = results.map(person => `<li>${person.first_name} ${person.last_name}</li>`).join('');
        res.send(Buffer.from(`<h1>Full Cycle Rocks!</h1>${people}`));
    })
})

app.listen(3000, () => {
    console.log('express listen on 3000');
})