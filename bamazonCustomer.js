var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require('cli-table');


var connection = mysql.createConnection({
    host: "localhost",
    port: 8889,

    user: "root",

    password: "root",
    database: "bamazon"
});

connection.connect(function(err) {
    if (err) throw err;

    console.log("Error connecting to Database");
   
});


function BamazonItemsForSale() {
    connection.query("SELECT * FROM products", function(err, results) {
        if(err) throw err;

      
        console.log( "\r\n")
        console.log('          _.~"~._.~"~._.~Welcome to Bamazon~._.~"~._.~"~._');
        console.log("\n        ==============================================="+"\r\n");

        var table = new Table ({
            head: ["Item ID", "Product", "Department", "Price", "Stock Quantity"],
            colWidths: [13, 25, 30, 10, 16]
        });

        for (var i = 0; i < results.length; i++) {
            var myArray = [results[i].item_id, results[i].product_name,  results[i].department_name, results[i].price, results[i].stock_quantity]; 
            table.push(myArray);
        };        
        console.log(table.toString());

        YourItems(results);

    });
};
BamazonItemsForSale();
function YourItems(results) {
    inquirer.prompt({
        name: "ItemId",
        type: "input",
        message: "Please enter the Item ID of the product you wish to purchase. \n[Enter 'exit' to exit]",
    }).then(function(answer) {

 if(answer.ItemId.toLowerCase() == "exit") {
    process.exit();
    console.log("\nThank you for visiting Bamazon.");    
    }
    for (var i = 0; i < results.length; i++) {
    if(results[i].item_id == answer.ItemId) {
        var product = results[i].product_name;
        var YourSelection = answer.ItemId;
        var id = i;

            console.log("\nYou selected " + product + "\n");

            inquirer.prompt([{
                    name: "quantity",
                    type: "input",
                    message: "How many would you like to buy? \nEnter 'exit' to exit]",
                    validate: function(value) {
                        if(isNaN(value)==false) {
                            return true;
                        } else {
                            return false;
                        }
                    }
     }]).then(function(answer) {
     var num = answer.quantity;
     var diff = (results[id].stock_quantity - num);
     var formatNumber = function(num) {
     return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
    };
     
    
    var totalCost = parseFloat(results[id].price * num).toFixed(2);
      if(diff >= 0) {              
       connection.query("UPDATE products SET stock_quantity = '" + diff + "' WHERE item_id='" + YourSelection + "'", function(err, resultsTwo) {
        if(err) throw err;


function message(){
     console.log("\nYour shopping cart: " + num + product);
     console.log("The total of your purchase is: $" + formatNumber(totalCost) + "\n");

      };
                                                  
     setTimeout(message, 250); setTimeout(ord, 300);                        
     })
     } 
    else {
     console.log("\nInsufficiant quantity of " + product + "\n");
      YourItems(results);
      CreateTable(results);
    }
    })
    }    
    }   
    }) 
    }

function CreateTable(results) {
    var table = new Table ({
        head: ["Item ID", "Product", "Department", "Price", "Stock Quantity"],
        colWidths: [13, 35, 30, 10, 16]
    });

    for (var i = 0; i < results.length; i++) {
        var myArray = [results[i].item_id, results[i].product_name,  results[i].department_name, results[i].price, results[i].stock_quantity]; 
        table.push(myArray);
    };        

    console.log(table.toString());
};

function ord() {
    inquirer.prompt({
        name: "continue",
        type: "confirm",
        message: "Would you like to make another order?"
    }).then(function(answer) {
        if (answer.continue == true) {
            BamazonItemsForSale();
        } else {
            console.log("Thank you for visiting Bamazon");
            process.exit();
        }
    })
}
  
