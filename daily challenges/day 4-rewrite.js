function getUser(callback) {
    setTimeout(() => {
        const user = {
            id: 1,
            name: "John",
            email: "john@example.com"
        };

        callback(user);
    }, 2000);
}

function getPosts(callback) {
    setTimeout(() => {
        const posts = [
            "JavaScript Basics",
            "Learning Promises",
            "Async Await"
        ];

        callback(posts);
    }, 2000);
}

// Callback usage
getUser(user => {
    console.log("User:", user);

    getPosts(posts => {
        console.log("Posts:", posts);
    });
});
