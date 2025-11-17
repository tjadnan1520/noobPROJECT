const dec=document.getElementById("dec"); 
const inc=document.getElementById("inc"); 
const res=document.getElementById("res"); 
const lab=document.getElementById("label"); 
let count=0; 
dec.onclick=function(){ 
    count--; 
    lab.textContent=count;
}
inc.onclick=function(){ 
    count++; 
    lab.textContent=count;
}
res.onclick=function(){ 
    count=0; 
    lab.textContent=count;
}