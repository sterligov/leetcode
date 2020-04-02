SELECT 
    user_id AS buyer_id,
    join_date,
    IFNULL(orders_in_2019, 0) orders_in_2019
FROM 
    Users
LEFT JOIN (
    SELECT
        buyer_id,
        COUNT(buyer_id) orders_in_2019
    FROM
        Orders
    WHERE
        YEAR(order_date) = 2019
    GROUP BY
        buyer_id
) t ON t.buyer_id = user_id