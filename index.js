
let math_it_up = {
    '+': function (x, y) { return parseFloat(x) + parseFloat(y) },
    '-': function (x, y) { return parseFloat(x) - parseFloat(y) },
    '*': function (x, y) { return parseFloat(x) * parseFloat(y) },
    '/': function (x, y) { return parseFloat(x) / parseFloat(y) }
}
let numberPushArr = document.querySelectorAll(".num");
let screenContent = document.querySelector(".screen")
let upperScreenContent = document.querySelector(".upperScreen")
numberPushArr.forEach(element => {
    element.addEventListener("click" ,() => {
        screenContent.textContent+=element.textContent;
        
    });    
});
let operatorPushArr = document.querySelectorAll(".operator")
operatorPushArr.forEach(element => {
    element.addEventListener("click" ,() => {
        if(upperScreenContent.textContent === ""){
        upperScreenContent.textContent=screenContent.textContent+element.textContent;
        screenContent.textContent="";
        }else if(screenContent.textContent === ""){
            let upCont = upperScreenContent.textContent;
            let length = upCont.length;
            upperScreenContent.textContent = upCont.slice(0,length-1)+element.textContent;
        }else{
            let upCont = upperScreenContent.textContent;
            let length = upCont.length;
            upperScreenContent.textContent= math_it_up[upCont.slice(length-1,length)](upperScreenContent.textContent,screenContent.textContent) + element.textContent
            screenContent.textContent=""
        }
    });    
});
let equalOperator =  document.querySelector(".equal")
    equalOperator.addEventListener("click" ,() => {
        let upCont = upperScreenContent.textContent;
        let length = upCont.length;
        screenContent.textContent=math_it_up[upCont.slice(length-1,length)](upperScreenContent.textContent,screenContent.textContent)
        upperScreenContent.textContent= ""

    })
let dot = document.querySelector(".dot")
    dot.addEventListener("click", ()=>{
        if(!screenContent.textContent.includes("."))
            screenContent.textContent=screenContent.textContent+"."
        })
let ac = document.querySelector(".AC")
        ac.addEventListener("click", () => {
            upperScreenContent.textContent = "";
            screenContent.textContent = "";
        })
let del = document.querySelector(".delete")
        del.addEventListener("click", () => {
            let length=screenContent.textContent;
            length=length.length;
            screenContent.textContent = screenContent.textContent.slice(0,length-1);
        })       