let character = document.getElementById("character");
let block = document.getElementById("block");
console.log(character.style, character.classList);
function jump() {
    console.log(character.classList);
    if (character.classList[0] !== "animate") {
        character.classList.add("animate");
        setTimeout(function(){
            character.classList.remove("animate");
        }, 1000)
    }
    
}

let checkDead = setInterval(function(){
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if (blockLeft<20 && blockLeft>0 && characterTop>130) {
        block.style.animation = "none";
        block.style.display = "none";
        alert('You just lost! Refresh the browser...')
    }
},10)