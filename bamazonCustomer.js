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

var mysql = require('mysql'); // note you cannot use 'require' as the variable

var connection = mysql.createConnection({
	host: 'localhost',
	port: 3306,
	user: 'root',
	password: '04Hgao05!',
	database: 'bamazon'
});

connection.connect(function(err) {
	if (err) throw err;
	console.log("connected as id " + connection.threadId + "\n");
	// all queries must run in connect function

});