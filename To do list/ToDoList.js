const input = document.getElementById("input")

function addEmojiFromSelect(selectedEmoji) {
    input.value += selectedEmoji;
}
function add(){
    if(input.value !== ""){
        const demo = document.getElementById("demo")
        const li = document.createElement("li")
        li.innerHTML = input.value
        demo.appendChild(li)
        const span = document.createElement("span")
        span.innerHTML = '<i class="fas fa-trash-alt"></i>';
        li.appendChild(span)
    }
    else{
        alert("Type Something")
    }
    input.value = ""
}
const demo = document.getElementById("demo");
demo.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
    } else if (e.target.tagName === "I") {
        e.target.parentElement.parentElement.remove();
    }
}, false);