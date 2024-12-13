// Queueing System using a Hashed Table
let hashTable = new Map(); // Initialize a hash table
let customerList = []; // Store the queue order

function hashFunction(name) {
    // Simple hash function (sum of character codes)
    return name.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0) % 1000;
}

function enqueueCustomer(name) {
    let hashedNumber = hashFunction(name);
    hashTable.set(hashedNumber, name);
    customerList.push(hashedNumber); // Track the order of entry
    console.log(`Customer added: ${name} (Hash: ${hashedNumber})`);
}

function serveCustomer() {
    if (customerList.length === 0) {
        console.log("No customers in the queue!");
        return;
    }
    // Serve the customer based on their hashed number
    let servedHash = customerList.shift();
    let servedCustomer = hashTable.get(servedHash);
    hashTable.delete(servedHash);
    console.log(`Now serving: ${servedCustomer} (Hash: ${servedHash})`);
}

function displayHashTable() {
    console.log("Updated Hash Table:");
    customerList.forEach(hash => {
        console.log(`Hash: ${hash}, Name: ${hashTable.get(hash)}`);
    });
}

// Example Program Flow
enqueueCustomer("Elaine");
enqueueCustomer("Althea");
enqueueCustomer("Angelo");
enqueueCustomer("Lito");
enqueueCustomer("Engelbert");

displayHashTable();

serveCustomer();
displayHashTable();

serveCustomer();
displayHashTable();
