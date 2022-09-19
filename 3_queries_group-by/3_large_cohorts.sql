SELECT cohorts.name AS cohort_name, count(students.*) AS student_count
FROM cohorts
JOIN students ON cohorts.id = students.cohort_id
GROUP BY cohort_name
HAVING count(students.*) >= 18
ORDER BY student_count;