const url = "https://goweather.herokuapp.com/weather/%7Bcity%7D";
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