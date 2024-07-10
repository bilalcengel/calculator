let buttonPushArr= document.querySelectorAll(".num");
let screenContent = document.querySelector(".screen")
buttonPushArr.forEach(element => {
    element.addEventListener("click" ,() => {
        screenContent.textContent+=element.textContent;
        
    });    
});
