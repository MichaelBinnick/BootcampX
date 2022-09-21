const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

const userInput = process.argv.slice(2);
const cohortArg = userInput[0];
const limitArg = userInput[1];

pool.query(`
SELECT students.id, students.name, cohorts.name as cohort_name
FROM students
JOIN cohorts ON cohorts.id = students.cohort_id
WHERE cohorts.name = '${cohortArg}'
LIMIT ${limitArg};
`)
.then(res => {
  console.log(res.rows);
})
.catch(err => console.error('query error', err.stack));