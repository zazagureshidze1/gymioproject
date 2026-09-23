let mainContainer=document.querySelector(".mainContainer")
let h1=document.getElementById("h1");
let paragraphs=document.getElementsByTagName("p");
let menuLists=document.getElementsByClassName("menu__list")
let menuItems=document.getElementsByClassName("menu__item");
let muscleLists=document.getElementsByClassName("muscle__list");
let muscleItems=document.getElementsByClassName("muscle__item");
let chest=document.getElementById("chest");
let cancel= document.getElementById("cancel");

console.log(mainContainer);
console.log(h1);
console.log(paragraphs);
console.log(menuLists);
console.log(menuItems);
console.log(muscleLists);
console.log(muscleItems);
console.log(chest);
console.log(muscleItems[0]);
console.log(muscleLists[0]);


h1.addEventListener("click", reactOnClick);

function reactOnClick(){
    console.log("h1 element has been clicked");
    h1.innerHTML="my blog";
}



function addEventListener(eventName, callBackFunction){
    const dacheriliEventi=eventisDacherilsLogika();
    if(dacheriliEventi.type==eventName){
        callBackFunction(dacheriliEventi);
    }
}