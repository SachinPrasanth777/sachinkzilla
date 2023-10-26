const url = "https://hacker-news.firebaseio.com/v0/item/8863.json?print=pretty";
async function test() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
    }
    catch (error) {
        console.log(error);
    }
    finally {
        console.log("Successfully Executed");
    }
}
test();