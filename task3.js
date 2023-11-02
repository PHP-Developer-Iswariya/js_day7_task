const fetch_url="https://restcountries.com/v3.1/all";
const myreq= new XMLHttpRequest();
myreq.addEventListener("load",function(){
 const obj=JSON.parse(this.response)
 
 //console.log(obj);

Object.values(obj).forEach(val => console.log("flag=="+val.flags.svg,"name=="+val.name.official,"capital=="+val.capital));

});
myreq.open("GET",fetch_url);
myreq.send();