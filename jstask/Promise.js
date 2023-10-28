const url="https://goweather.herokuapp.com/weather/%7Bcity%7D";
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