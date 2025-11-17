function rollDice(){ 
    const diceCount=document.getElementById("diceCount").value;
    const diceContainer=document.getElementById("diceContainer");
    const diceImages=document.getElementById("diceImages");
    let values=[];
    let images=[]; 
    for(let i=0;i<diceCount;i++){ 
        let random=Math.floor(Math.random()*6)+1;
        values.push(random);
        let img=`<img src="${random}.png" alt="Dice ${random}"  height="100" width="100" >`;
        images.push(img);
    }
    diceContainer.textContent=`You rolled: ${values.join(", ")}`;
    diceImages.innerHTML=images.join(" ");
}