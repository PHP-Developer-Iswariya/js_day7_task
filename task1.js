const fetch_url="https://restcountries.com/v3.1/all";
const myreq= new XMLHttpRequest();
myreq.addEventListener("load",function(){
 const obj=JSON.parse(this.response)
 
 //console.log(obj[0].region);

let newArray = obj.filter(function (el) {
    return el.region == "Asia";
}
);

 console.log(newArray);
 
});
myreq.open("GET",fetch_url);
myreq.send();