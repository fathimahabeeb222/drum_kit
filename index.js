

for(var i=0;i<7;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click", play);
   
}
function play(){
    
    common(this.innerHTML);
    animate(this.innerHTML);
}

document.addEventListener("keydown",function (event)
{
    common(event.key);
    animate(event.key);
})

function common(value)
{
    switch (value) {
        case "w":
            var crash= new Audio('crash.mp3');
            crash.play();
            break;
        case "a":
            var kick= new Audio('kick-bass.mp3');
            kick.play();
            break;
        case "s":
            var snare= new Audio('snare.mp3');
            snare.play();
            break;
        case "d":
            var tom1= new Audio('tom-1.mp3');
            tom1.play();
            break;
        case "j":
            var tom2= new Audio('tom-2.mp3');
            tom2.play();
            break;
        case "k":
            var tom3= new Audio('tom-3.mp3');
            tom3.play();
            break;
        case "l":
            var tom4= new Audio('tom-4.mp3');
            tom4.play();
            break;
    
        default:console.log(this.innerHTML);
           
       }
}

function animate(value)
{
document.querySelector("."+value).classList.add("pressed");
setTimeout(function (){
    document.querySelector("."+value).classList.remove("pressed");
},100)
}






