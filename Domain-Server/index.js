const btn=document.getElementById("btn");
const mail=document.getElementById("mail"); 
const p1=document.getElementById("p1");
let email;
let server;
let domain;
btn.onclick=function(){ 
    email=mail.value;
    domain=email.substring(0,email.indexOf("@"));
    server=email.substring(email.indexOf("@"));
    p1.textContent=`Your email server is: ${server} and your domain is: ${domain}`;   
} 