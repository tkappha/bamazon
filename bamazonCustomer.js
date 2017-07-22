// Displays all items available for sale (ids, names, prices)


//Ask user for ID of product they would like to buy

// Ask user how quantity of product

// application checks to see if store has enough product to fulfill customer request
// if it does not it should log a phrase like "Insufficient quantity"
// & not allow the order to go through

//if there is enough stock to fulfill customer request, 
// 1. update the SQL database to reflect the remaining quantity
// 2. show the customer the total cost of their purchase

//***********************************************************************************

const mysql = require('mysql'); 
const inquirer = require('inquirer');

const connection = mysql.createConnection({
	host: 'localhost',
	port: 3306,
	user: 'root',
	password: '04Hgao05!',
	database: 'bamazon'
});

connection.connect(function(err) {
	if (err) throw err;
	//console.log("connected as id " + connection.threadId + "\n");
	showAllProducts();


});

function showAllProducts() {
	connection.query("SELECT * FROM products", function(err, res) {
		for (var i = 0; i < res.length; i++) {
			console.log(res[i].item_id + " | " + res[i].product_name + " | $" + res[i].price);
		}
		console.log("----------------------------------------------------------");
		orderProducts();
	});
}

function orderProducts() {
	inquirer
		.prompt([
			{
				name: "itemID",
				type: "input",
				message: "What is the ID of the product you would like to buy?"
			},
			{
				name: "quantity",
				type: "input",
				message: "What is the quantity you would like to buy?"
			}
		])
		.then(function(answer){	
		//console.log(answer) example: {itemID: '1', quantity '3'}
		var quantity = parseInt(answer.quantity);
		var itemId = parseInt(answer.itemID);
		//checks inventory to see if there is enough product to fulfill customer request
		checkQuantity(quantity, itemId);
		})
}

function checkQuantity(quantity, itemId) {

	var query = "SELECT stock_quantity FROM products WHERE ?";
	connection.query(query, {item_id: itemId}, function(err, res, quantitydb) {
		if (err) throw err; 
		//console.log(res);  [RowDataPacket { stock_quantity: 200}]
		var ret = JSON.stringify(quantitydb);
		console.log(quantitydb);
		
	})
	//if quantity ordered > inventory
	// if ()
	// console.log("Sorry, we do not have enough " + productOrdered + " in stock to fulfill your order.");
	// showAllProducts();
	// //else fill order by giving customer cost of their purchase
	// console.log("Thank you for your order of " + quantity + " " + productOrdered + ".  Your total is: $" + orderCost);
	// updateProduct();
}

// function updateProduct() {
// 	console.log("Updating products database");
// 	connection.query(
// 		"UPDATE products SET ? WHERE ?", 
// 		[
// 			{
// 				stock_quantity: //stock_quantity - quantity customer ordered
// 			},
// 			{
// 				item_id: //id of product customer ordered
// 			}
// 		],
// 		function(err, res) {
// 			console.log(res.affectedRows + " product updated!\n");
			//showAllProducts();
// 		}
// 	);
// }
