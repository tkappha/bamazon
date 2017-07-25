CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products ( 
	item_id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(40) NULL,
    department_name VARCHAR(30) NULL,
    price DECIMAL(10,2) NULL,
    stock_quantity INT NULL,
    PRIMARY KEY (item_id)
);


INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES 	("banana", "produce", .50, 200), 
		("potato", "produce", .25, 300),
        ("lettuce", "produce", 1.50, 20),
        ("mushroom", "produce", 2.99, 15),
		("milk", "dairy",3.79, 50), 
        ("butter", "dairy", 2.99, 100),
        ("eggs", "dairy", 3.99, 75),
        ("cookie", "bakery", .50, 150),
        ("bread", "bakery", 1.50, 75),
        ("muffin", "bakery", 1.25, 25);
        
USE bamazon;
SELECT * FROM products;