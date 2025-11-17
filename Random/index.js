
const gn=document.getElementById("rand");
const lb=document.getElementById("no"); 
let min=1;
let max=100;
let random; 
gn.onclick=function(){
    random=Math.floor(Math.random()*max)+min;
    lb.textContent=random;
}