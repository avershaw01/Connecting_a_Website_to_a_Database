const mysql = require('mysql2')
// NOTE createPool manages multiple connections automatically
// NOTE Better than a single connection -- handles concurrent requests
// NOTE If one query is running the pool opens another connection for the next query
const pool = mysql.createPool({
    host: '146.190.214.111',
    user: 'CSC3700',
    database: 'CSC3700',
    password: 'connect101!'
})
// NOTE .promise() converts the pool to use async/await instead of callbacks
// Without this you would need callback functions for every query
// With this you can use: const [rows] = await pool.query('SELECT * FROM books')
module.exports = pool.promise()