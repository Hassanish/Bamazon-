DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;

use bamazon;

 CREATE TABLE products (

 item_id INT NOT NULL AUTO_INCREMENT, 
 product_name VARCHAR(555) NOT NULL,
 department_name VARCHAR(555) NOT NULL,
 price DECIMAL(6,2) NOT NULL,
 stock_quantity INTEGER,
 PRIMARY KEY (item_id)
);

INSERT INTO Products (product_name, department_name, price, stock_quantity) VALUES ("Tooth brush", "Personal care", 25.61, 98);

INSERT INTO Products (product_name, department_name, price, stock_quantity) VALUES ("Bread", "Food", 2.41, 84);

INSERT INTO Products (product_name, department_name, price, stock_quantity) VALUES ("Ice cream", "Food", 5.00, 25);

INSERT INTO Products (product_name, department_name, price, stock_quantity) VALUES ("Toys", "Kids & Baby", 15.99, 25);

INSERT INTO Products (product_name, department_name, price, stock_quantity) VALUES ("Tide Detergent", "Laundry", 7.97, 65);

INSERT INTO Products (product_name, department_name, price, stock_quantity) VALUES ("Friends", "Books", 23.26, 14);

INSERT INTO Products (product_name, department_name, price, stock_quantity) VALUES ("Scarab Cuff Links", "Clothing, Shoes & Jewelry", 225.00, 4);

INSERT INTO Products (product_name, department_name, price, stock_quantity) VALUES ("Dove Deodorant", "Personal care", 5.00, 56);

INSERT INTO Products (product_name, department_name, price, stock_quantity) VALUES ("Bananas", "Food", 49.95, 47);

INSERT INTO Products (product_name, department_name, price, stock_quantity) VALUES ("CDs", "Electronics & Computers", 15.21, 227);

INSERT INTO Products (product_name, department_name, price, stock_quantity) VALUES ("Soda", "Drinks", 5.00, 56);

INSERT INTO Products (product_name, department_name, price, stock_quantity) VALUES ("Plates", "Kitchen Ware", 19.95, 47);

INSERT INTO Products (product_name, department_name, price, stock_quantity) VALUES ("Sterio", "Electronics & Computers", 67.21, 227);
