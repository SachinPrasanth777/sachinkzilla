const url = "https://api.openweathermap.org/data/2.5/weather?q=city&appid=e7a601bb0f2e8670c11fbbadb314547b";
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