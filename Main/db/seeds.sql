INSERT INTO department(id, name)
VALUES 
(1, "Management"),
(2, "Full Time"),
(3, "Part Time");

INSERT INTO role(id, title, salary, department_id)
(1, "Store Manager", 60000, 1),
(2, "Cashier", 35000, 3)
(3, "Night Shift", 40000, 2);

INSERT INTO employee(id, first_name, last_name, role_id, manager_id)
(1, "Sam", "Maxwell", 1, 1),
(2, "Jason", "Frank", 2, 1),
(3, "Emma", "Richardson", 3, 1),
(4, "Lisa", "Blank", 2, 1);

seeds.sql