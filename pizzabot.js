// Task 1: Setting up variables
const vegetarian = "Vegetarian pizza";
const vegie = "vegetarian pizza";
const hawaiian = "Hawaiian pizza";
const hawai = "hawaiin pizza"; 
const pepperoni = "Pepperoni pizza";
const pepperon = "pepperoni pizza";
const pizzaPrice = 80;

// Function to check if the pizza is on the menu
function checkOrderName(orderName) {
  return orderName === vegetarian || orderName === hawaiian || orderName === pepperoni || orderName === vegie || orderName === hawai || orderName === pepperon;
}

// Function to calculate the total cost
function totalCost(orderQuantity) {
  return orderQuantity * pizzaPrice;
}

// Function to determine cooking time based on the quantity
function cookingTime(orderQuantity) {
  if (orderQuantity >= 1 && orderQuantity <= 2) {
    return 10;
  } else if (orderQuantity >= 3 && orderQuantity <= 5) {
    return 15;
  } else {
    return 20;

  }
}

// 1.2 Greeting the customer
alert(`Hey! Happy to serve your pizza. On our menu we have ${vegetarian}, ${hawaiian} and ${pepperoni}.`);

// 2.3 Ask the user which pizza they want and how many
const orderName = prompt("Enter the name of the pizza you want to order today.");

if (checkOrderName(orderName)) {
  const orderQuantity = parseInt(prompt(`How many of ${orderName} do you want?`), 10);

  if (!isNaN(orderQuantity) && orderQuantity > 0) {
    // 2.4 Finalizing the order
    const orderTotal = totalCost(orderQuantity);
    const time = cookingTime(orderQuantity);

    alert(`Great, I'll get started on your ${orderName} right away. It will cost ${orderTotal} kr. The pizzas will take ${time} minutes.`);
  } else {
    alert("Please enter a valid number for the quantity.");
  }
} else {
  alert("Sorry, we don't have that pizza on the menu.");
}
