let onTouch = document.querySelector("#ontouch");




function display(){
    let displaycontent = document.querySelector(".display");
    console.log(displaycontent);
    displaycontent.style.display = "block";
}
function undisplay(){
    let displaycontent = document.querySelector(".display");
    console.log(displaycontent);
    displaycontent.style.display = "none";
}


onTouch.addEventListener("mouseenter", () => display());

//onTouch.addEventListener("mouseleave", () => undisplay());