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




app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
  