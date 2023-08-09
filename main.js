function menuac(){
    const btn = document.getElementById("openmenu");
    const menu = document.getElementById("burger");
    if(btn.onclick && menu.classList == "container nav" ){
        menu.classList.toggle("menuisopen");
    }else{
        menu.classList.remove("menuisopen");
    }
}