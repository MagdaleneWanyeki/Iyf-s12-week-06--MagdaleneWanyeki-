async function fetchData(url, index) {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }

        const data = await response.json();

        console.log(`API ${index} completed:`, data);

        return {
            status: "fulfilled",
            value: data
        };

    } catch (error) {
        console.log(`API ${index} failed:`, error.message);

        return {
            status: "rejected",
            reason: error
        };
    }
}

async function run() {
    const urls = [
        "https://jsonplaceholder.typicode.com/users",
        "https://jsonplaceholder.typicode.com/posts",
        "https://jsonplaceholder.typicode.com/comments"
    ];

    const results = await Promise.all(
        urls.map((url, index) => fetchData(url, index + 1))
    );

    console.log("All requests completed:", results);
}

run();
