SELECT
    d.dept_name, COUNT(s.student_id) student_number
FROM
    department d
LEFT JOIN
    student s ON d.dept_id = s.dept_id
GROUP BY
    d.dept_id
ORDER BY
    COUNT(s.student_id) DESC,
    d.dept_name