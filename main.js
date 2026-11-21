const hero = document.querySelector(".hero")
const playBtn = document.getElementById("playBtn")
const startModel = document.getElementById("startModel")

playBtn.addEventListener("click", () => {
    hero.style.display = "none"
    startModel.style.display = "flex"
})

startModel.addEventListener("click", () => {
    startModel.style.display = "none"
})