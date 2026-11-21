const playBtn = document.querySelector("#playBtn")
const hero = document.querySelector(".hero")
const startModel = document.querySelector("#startModel")
const game = document.querySelector(".game")
const cupboards = document.querySelectorAll(".cupboard")
const animal1 = document.querySelector(".animals1")
const animal2 = document.querySelector(".animals2")
const animal3 = document.querySelector(".animals3")
const animals = [
    "./assets/animal1.png",
    "./assets/animal2.png",
    "./assets/animal3.png"
]
const rightAnimal = document.querySelector(".rightAnimal")
const wrongAnimal = document.querySelector(".wrongAnimal")
const replayBtn = document.querySelector(".replay-btn")
const cupboardImg1 = document.querySelector(".cupboard-img1")
const cupboardImg2 = document.querySelector(".cupboard-img2")
const cupboardImg3 = document.querySelector(".cupboard-img3")

// function replay() {
//     hero.style.display = "none"
//     startModel.style.display = "none"
//     game.style.display = "flex"
// }

playBtn.addEventListener("click", () => {
    hero.style.display = "none"
    startModel.style.display = "flex"
})

startModel.addEventListener("click", () => {
    startModel.style.display = "none"
    game.style.display = "flex"
})

function showRandomAnimals() {
    const shuffledAnimals = [...animals]
    shuffledAnimals.sort(() => Math.random() - 0.5)
    animal1.src = shuffledAnimals[0]
    animal2.src = shuffledAnimals[1]
    animal3.src = shuffledAnimals[2]
}

let score = 0

cupboards.forEach((cupboard) => {
    cupboard.addEventListener("click", () => {
        cupboards.forEach((cup) => {
            cup.style.pointerEvents = "none"
        })

        cupboard.querySelector("img").src = "assets/cupboard-open.png"

        const animal = cupboard.querySelector(".animals")
        const scoreCounter = document.querySelector("#scoreCounter")

        animal.style.zIndex = "1"
        replayBtn.style.display = "block"
        if (score <= 0) {
            if (animal.src.includes("animal1.png")) {
                rightAnimal.style.display = "flex"
                score += 20
            } else {
                wrongAnimal.style.display = "flex"
                score -= 5
            }
        } else {
            if (animal.src.includes("animal1.png")) {
                rightAnimal.style.display = "flex"
                score += 10
            } else {
                wrongAnimal.style.display = "flex"
                score -= 5
            }
        }

        let displayScore = String(score).padStart(2, '0')
        scoreCounter.innerHTML = displayScore
    })
})

replayBtn.addEventListener("click", () => {
    showRandomAnimals()
    replayBtn.style.display = "none"
    animal1.style.zIndex = "-1"
    animal2.style.zIndex = "-1"
    animal3.style.zIndex = "-1"
    cupboardImg1.src = "./assets/cupboard-close.png"
    cupboardImg2.src = "./assets/cupboard-close.png"
    cupboardImg3.src = "./assets/cupboard-close.png"
    cupboards.forEach((cup) => {
        cup.style.pointerEvents = "auto"
    })
})

playBtn.addEventListener("click", () => {
    hero.style.display = "none"
    startModel.style.display = "flex"
})

startModel.addEventListener("click", () => {
    startModel.style.display = "none"
    game.style.display = "flex"

    showRandomAnimals()
})