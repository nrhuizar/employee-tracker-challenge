INSERT INTO department (name)
VALUES
  ('Accounting'),
  ('Human Resources'),
  ('IT'),
  ('Marketing'),
  ('Sales');

INSERT INTO role (title, salary, department_id)
VALUES
  ('Accounting Manager', 80000, 1),
  ('Recruiter', 60000, 2),
  ('IT Admin', 65000, 3),
  ('Marketing Specialist', 65000, 4),
  ('Inbound Sales', 55000, 5),

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
  ('James', 'Fraser', 1, 1),
  ('Jack', 'London', 2, 2),
  ('Robert', 'Bruce', 3, 3),
  ('Peter', 'Greenaway', 4, 4),
  ('Derek', 'Jarman', 5, 5),;
