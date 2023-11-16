const express = require('express');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'department_db'
  },
  console.log(`Connected to the department_db database.`)
);

inquirer
    .prompt([
        {
            type: 'list',
            name: 'options',
            message: 'Please select the information you would like to see:',
            choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role'],
        },
    ])

// Create a department
app.post('/api/new-department', ({ body }, res) => {
    const sql = `INSERT INTO department (name)
      VALUES (?)`;
    const params = [body.name];
    
    db.query(sql, params, (err, result) => {
      if (err) {
        res.status(400).json({ error: err.message });
        return;
      }
      res.json({
        message: 'success',
        data: body
      });
    });
  });
  
// Read all departments
app.get('/api/departments', (req, res) => {
    const sql = `SELECT id, name AS department FROM department`;
    
    db.query(sql, (err, rows) => {
      if (err) {
        res.status(500).json({ error: err.message });
         return;
      }
      res.json({
        message: 'success',
        data: rows
      });
    });
});

// Create a role
app.post('/api/new-role', ({ body }, res) => {
    const sql = `INSERT INTO department (title, salary, department_id)
      VALUES (?)`;
    const params = [body.title, body.salary, body.department_id];
    
    db.query(sql, params, (err, result) => {
      if (err) {
        res.status(400).json({ error: err.message });
        return;
      }
      res.json({
        message: 'success',
        data: body
      });
    });
  });
  
// Read all roles
app.get('/api/roles', (req, res) => {
    const sql = `SELECT id, title, salary, department_id AS (SELECT name FROM department) FROM department`;
    
    db.query(sql, (err, rows) => {
      if (err) {
        res.status(500).json({ error: err.message });
         return;
      }
      res.json({
        message: 'success',
        data: rows
      });
    });
});




app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
  