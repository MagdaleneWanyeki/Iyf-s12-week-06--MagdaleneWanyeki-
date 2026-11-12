async function fetchUser(userId) {
    try {
        const response = await fetch(
            `https://jsonplaceholder.typicode.com/users/${userId}`
        );

        // Check if user exists
        if (response.status === 404) {
            return {
                id: 0,
                name: "Default User",
                email: "default@example.com"
            };
        }

        // Handle other HTTP errors
        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }

        const user = await response.json();

        return user;

    } catch (error) {
        console.error("Something went wrong:", error.message);
        throw error;
    }
}

// Usage
async function run() {
    const user = await fetchUser(999);

    console.log("User:", user);
}

run();
