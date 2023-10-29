const url="https://api.openweathermap.org/data/2.5/weather?q=city&appid=e7a601bb0f2e8670c11fbbadb314547b";
let f=fetch(url);
f
.then((response)=>{
    return response.json();
}).then((response=>{
    console.log(response);
}))
.catch((error)=>{
    console.log(error);
})
.finally(()=>{
    console.log("Successfully Executed");
})