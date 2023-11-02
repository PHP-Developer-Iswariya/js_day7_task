const fetch_url="https://restcountries.com/v3.1/all";
const myreq= new XMLHttpRequest();
myreq.addEventListener("load",function(){
 const obj=JSON.parse(this.response)
 
 //console.log(obj);

var result = obj.reduce(function (acc, arr) { return acc + arr.population; }, 0);
console.log(result);

});
myreq.open("GET",fetch_url);
myreq.send();