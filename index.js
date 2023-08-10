
const trailer = document.querySelector(".trailer");

const video = document.getElementById("video");

const linkvideo = video.src;

const modal = document.querySelector(".modal");

const fecharmodal = document.querySelector(".fechar-modal");


trailer.addEventListener("click", () => {
    modal.classList.add("aberto");
    video.setAttribute("src", linkvideo)
    
});


fecharmodal.addEventListener("click", ()=>{
    modal.classList.remove("aberto");
    video.setAttribute("src", "");
});


function menuOnClick() {
    document.getElementById("menu-bar").classList.toggle("change");
    document.getElementById("nav").classList.toggle("change");
    document.getElementById("menu-bg").classList.toggle("change-bg");
}