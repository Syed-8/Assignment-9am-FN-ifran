-- 1 SQL (Structured Query Language) is a language useed to store ,retrieve ,update, and manage data 
-- in a database .it helps us commmunication with database using commands like select ,insert,update,and delete 

-- 2  | SQL                         | MySQL                            |
-- | --------------------------- | -------------------------------- |
-- | SQL is a language           | MySQL is a database software     |
-- | Used to write queries       | Used to store and manage data    |
-- | Standard language           | Implementation of SQL            |
-- | Cannot store data by itself | Stores data in tables            |


-- 3 show DATABASE;

-- 4 create database school

-- 5 Row 
-- * A row represents one complete record 
-- * Runs horizontally 
-- * Example : one Student's full details 
-- Column 
-- * A column represents one field 
-- Runs vertically
-- Example : Name,email,status   


create DATABASE student_db;

use student_db;

show databases;

select * from student;

-- 5 Step 1️⃣: User writes SQL query

-- Example:

-- SELECT * FROM students;

-- Step 2️⃣: Query sent to DBMS

-- The query is sent to MySQL Server.

-- Step 3️⃣: SQL Engine processes query

-- Checks syntax

-- Validates tables & columns

-- Optimizes the query

-- Step 4️⃣: Database executes the query

-- Fetches data from tables

-- Applies conditions (WHERE, JOIN, etc.)

-- Step 5️⃣: Result returned to user

-- Data is shown in MySQL Workbench

-- Or sent to application (website/app)
  