
console.log("Inside Async vs Sync");

/* for (let i = 0; i < 10; i++) {
    console.log("index ", i);
}

console.log("Completed printing"); */


setTimeout(() => {
    for (let i = 0; i < 10; i++) {
        console.log("index ", i);
    }
}, 300)

console.log("Completed processing asynchronously.");