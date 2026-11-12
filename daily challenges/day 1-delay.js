function delay(ms) {
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    });
}

// Usage
async function run() {
    console.log("Starting...");

    await delay(2000);

    console.log("This prints after 2 seconds");
}

run();
