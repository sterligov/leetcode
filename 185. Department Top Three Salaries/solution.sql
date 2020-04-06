/* Write your PL/SQL query statement below */

select e2.Department, e2.Employee, e2.Salary from (
    select 
        d.Name as Department,
        e.Name as Employee,
        e.Salary,
        DENSE_RANK() OVER (PARTITION BY DepartmentId ORDER BY Salary DESC) as Rating
    from
        Employee e
    join 
        Department d ON d.Id = e.DepartmentId
) e2
where e2.Rating <= 3;

