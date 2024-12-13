// Queueing System using Queue
let queue = []; // Initialize an empty queue

function enqueueCustomer(name) {
    // Add customer to the queue with a number
    let customerNumber = queue.length + 1;
    queue.push({ number: customerNumber, name: name });
    console.log(`Customer added: ${name} (Number: ${customerNumber})`);
}

function serveCustomer() {
    if (queue.length === 0) {
        console.log("No customers in the queue!");
        return;
    }
    // Serve the first customer in the queue
    let servedCustomer = queue.shift();
    console.log(`Now serving: ${servedCustomer.name} (Number: ${servedCustomer.number})`);
}

function displayQueue() {
    console.log("Updated Queue:");
    queue.forEach(customer => {
        console.log(`Number: ${customer.number}, Name: ${customer.name}`);
    });
}

// Example Program Flow
enqueueCustomer("Elaine");
enqueueCustomer("Althea");
enqueueCustomer("Angelo");
enqueueCustomer("Lito");
enqueueCustomer("Engelbert");

displayQueue();

serveCustomer();
displayQueue();

serveCustomer();
displayQueue();
