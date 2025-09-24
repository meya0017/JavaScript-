// Warehouse Promise Example

// Function that simulates a warehouse worker checking for an item
function fetchItemFromWarehouse(item) {
  return new Promise((resolve, reject) => {
    console.log(`Desk: "Can you fetch '${item}' from the warehouse?"`);
    console.log("Warehouse worker: *goes to check...*");

    // Simulate time taken to check warehouse
    setTimeout(() => {
      const itemsInStock = ["chair", "table", "laptop"]; // warehouse stock
      if (itemsInStock.includes(item)) {
        resolve(`Yes! The '${item}' is available.`);
      } else {
        reject(`Sorry, the '${item}' is not in stock.`);
      }
    }, 2000);
  });
}

// Making a request
let requestedItem = "laptop"; // try changing this to "phone" to test rejection

let promise = fetchItemFromWarehouse(requestedItem);

console.log("Status: Waiting for the warehouse worker (Pending)...");

// Handle fulfillment or rejection
promise
  .then((message) => {
    console.log("Fulfilled ✅:", message);
  })
  .catch((error) => {
    console.log("Rejected ❌:", error);
  });
