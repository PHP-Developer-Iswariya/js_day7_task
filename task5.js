const fetch_url="https://restcountries.com/v3.1/all";
const myreq= new XMLHttpRequest();
myreq.addEventListener("load",function(){
 const obj=JSON.parse(this.response)
 
 console.log(obj[0].population);

let newArray = obj.filter(function (el) {
    return el.currencies.USD.name == "United States dollar";
});

 console.log(newArray);
 
});
myreq.open("GET",fetch_url);
myreq.send();