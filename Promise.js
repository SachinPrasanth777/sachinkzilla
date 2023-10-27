const url="https://hacker-news.firebaseio.com/v0/item/8863.json?print=pretty";
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