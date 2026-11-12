function task1() {
    return new Promise(resolve => {
        const time = Math.random() * 3000;

        setTimeout(() => {
            console.log("Task 1 completed");
            resolve("Result from Task 1");
        }, time);
    });
}

function task2() {
    return new Promise(resolve => {
        const time = Math.random() * 3000;

        setTimeout(() => {
            console.log("Task 2 completed");
            resolve("Result from Task 2");
        }, time);
    });
}

function task3() {
    return new Promise(resolve => {
        const time = Math.random() * 3000;

        setTimeout(() => {
            console.log("Task 3 completed");
            resolve("Result from Task 3");
        }, time);
    });
}

// Chain the promises
console.time("Total Execution Time");

task1()
    .then(result1 => {
        console.log(result1);
        return task2();
    })
    .then(result2 => {
        console.log(result2);
        return task3();
    })
    .then(result3 => {
        console.log(result3);
        console.timeEnd("Total Execution Time");
    })
    .catch(error => {
        console.error("Error:", error);
    });
