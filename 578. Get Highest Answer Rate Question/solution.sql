SELECT
    question_id as survey_log
FROM
    survey_log
GROUP BY 
    question_id
ORDER BY
    (
        SUM(CASE WHEN action = 'answer' THEN 1 ELSE 0 END) / 
        SUM(CASE WHEN action = 'show' THEN 1 ELSE 0 END)
    ) DESC
LIMIT 1