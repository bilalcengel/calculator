
let math_it_up = {
    '+': function (x, y) { return parseInt(x) + parseInt(y) },
    '-': function (x, y) { return parseInt(x) - parseInt(y) },
    '*': function (x, y) { return parseInt(x) * parseInt(y) },
    '/': function (x, y) { return parseInt(x) / parseInt(y) }
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

