SELECT
    w1.Id
FROM
    Weather w1
JOIN
    Weather w2 ON w2.RecordDate = DATE_SUB(w1.RecordDate, INTERVAL 1 DAY)
WHERE
    w1.Temperature > w2.Temperature;