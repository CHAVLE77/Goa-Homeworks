//1
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function run() {
    console.log("start");
    await delay(2000);
    console.log("after 2 seconds!");
}

run();

//2
async function fetchData() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("error:", error);
    }
}

fetchData();

//3
async function fetchUser() {
    return new Promise(resolve => setTimeout(() => resolve("user"), 1000));
}

async function fetchPosts() {
    return new Promise(resolve => setTimeout(() => resolve("posts"), 1500));
}

async function getData() {
    let [user, posts] = await Promise.all([fetchUser(), fetchPosts()]);
    console.log(user, posts);
}

getData();

//4
async function func() {
    throw new Error("error!");
}

async function execute() {
    try {
        await func();
    } catch (error) {
        console.error("error:", error.message);
    }
}

execute();

//5
const fetchPost = async (id) => {
    let response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    return response.json();
};

fetchPost(1).then(data => console.log(data));
