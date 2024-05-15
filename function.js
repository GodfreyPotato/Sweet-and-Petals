function hide(){
        document.getElementById("phone").style.display = "none";
}

function show(){
    document.getElementById("phone").style.display = "flex";
}


window.addEventListener('resize',function(){
    let size = window.screen.width;
    if(this.window.screen.width>=801){
        this.document.getElementById('phone').style.display="none";
    }


});
function changeCol(color){
    document.getElementById('scrollxID').style.backgroundColor = color;
}


