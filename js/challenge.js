const timer = document.querySelector("#counter");
const likes = document.querySelector(".likes")

let sec = 0;

let intervalId = setInterval(incrementSeconds, 1000)// timer - every second we increment 

function incrementSeconds() {
    sec += 1;
    timer.textContent = sec;
}
function pauseTimer() {
    if(document.getElementById("pause").innerText === "pause" ){
        clearInterval(intervalId);
        document.getElementById("plus").disabled = true;
        document.getElementById("minus").disabled = true;
        document.getElementById("heart").disabled = true;
        document.getElementById("pause").innerText = "resume" }
    else{
        document.getElementById("plus").disabled = false;
        document.getElementById("minus").disabled = false;
        document.getElementById("heart").disabled = false;
        document.getElementById("pause").innerText = "pause" 
        intervalId = setInterval(incrementSeconds, 1000);} // we need intervalId to setInterval and clearInterval
    }

function incrementTimer() {
    sec += 1;
    timer.textContent = sec;
}
function decrementTimer() {
    sec -= 1;
    timer.textContent = sec;
}
function findEl(arr, n){ //looking for a number(n), if it's already in our array (was liked already.)
    for(el of arr) {
    console.log(el);
    if (parseInt(el.innerText.split(" ")[0], 10) === n){
        return el //  
    }
}}
function likeNumber() {
    let num = sec;
    let listElements = document.querySelectorAll("li")
    let arrElements = Array.from(listElements)
    found = findEl(arrElements, num)
   
    if(found === undefined) {
        let elementForLikes = document.createElement("li");
        let spanForLikes = document.createElement("span");
        elementForLikes.innerText = `${sec} has been liked `
        spanForLikes.innerText = `1 time`
        elementForLikes.appendChild(spanForLikes)
        likes.appendChild(elementForLikes);}
        
    else{
        let currentNumberOfLikes = parseInt(found.childNodes[1].innerText[0], 10) + 1;
        found.childNodes[1].innerText = `${currentNumberOfLikes} times`
    } 
}
function submitComment(event) {
    let input = document.querySelector("#comment-input")
    let list = document.querySelector("#list")
    let elementOfListOfComm = document.createElement("li")
    let form = document.querySelector("form")

    event.preventDefault();
    elementOfListOfComm.innerText = input.value;
    list.appendChild(elementOfListOfComm);
    form.reset();
}
     
//Buttons
document.querySelector("#pause").addEventListener("click", pauseTimer);
document.getElementById("plus").addEventListener("click", incrementTimer);
document.getElementById("minus").addEventListener("click", decrementTimer);
document.getElementById("heart").addEventListener("click", likeNumber);
document.querySelector("#submit").addEventListener("click",submitComment);


/////////////////////////////////////tried to use the find method instead of for loop
/*let found = arrElements.find(el => {
        debugger
        console.log("element:" + el)
        debugger
        console.log(`First word ${parseInt(el.innerText.split(" ")[0], 10)}`)
        parseInt(el.innerText.split(" ")[0], 10) === num
        debugger
        return el})*/