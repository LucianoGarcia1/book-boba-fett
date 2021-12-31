const footer = document.getElementById("footer");

const themeG = () =>{
    document.body.style.background = "linear-gradient(to right, #fc332b 0%, #f77737 100%)"

    const footer = document.getElementById("footer");

    footer.style.background = "linear-gradient(to right, #fc332b 0%, #f77737 100%)";
}

const themeGreen = () =>{
    document.body.style.background = "#465845";

    footer.style.background = "#465845"
}

function keyG(e){
    if(e.key === "g"){
        document.body.style.background = "#465845";

        footer.style.background = "#465845"
    }else if(e.key === "o"){
        document.body.style.background = "linear-gradient(to right, #fc332b 0%, #f77737 100%)"

    const footer = document.getElementById("footer");

    footer.style.background = "linear-gradient(to right, #fc332b 0%, #f77737 100%)";
    }
}
window.addEventListener("keydown", keyG)