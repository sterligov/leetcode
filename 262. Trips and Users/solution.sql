/* Write your PL/SQL query statement below */

WITH tmp_table AS(
    SELECT
       Status,
       Request_at
    FROM
        Trips t
    INNER JOIN
        Users u1 ON t.Client_Id = u1.Users_Id
    INNER JOIN
        Users u2 ON t.Driver_Id = u2.Users_Id
    WHERE
        u1.Banned = 'No' AND u2.Banned = 'No'
        AND t.Request_at BETWEEN '2013-10-01' AND '2013-10-03'
)

select t1.Request_at Day, NVL(ROUND(canc/all_c, 2), 0.00) "Cancellation Rate" from (
    (
        SELECT Request_at, COUNT(*) all_c FROM tmp_table
        GROUP BY Request_at
    ) t1
    LEFT JOIN (
        SELECT Request_at, count(*) canc
        FROM tmp_table
        WHERE Status != 'completed'
        GROUP BY Request_at
    ) t2
    ON t1.Request_at = t2.Request_at
)
order by t1.Request_at