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
const nextBtn = document.querySelector(".next-btn")
const cupboardImg1 = document.querySelector(".cupboard-img1")
const cupboardImg2 = document.querySelector(".cupboard-img2")
const cupboardImg3 = document.querySelector(".cupboard-img3")
const alertBox = document.querySelector(".alert-box")
const alertBtn = document.querySelector(".alert-btn")
const scoreAnimation = document.querySelector(".title-item")
const winBox = document.querySelector(".win-box")
const replayBtn = document.querySelector(".replay-btn")

// function replay() {
//     hero.style.display = "none"
//     startModel.style.display = "none"
//     game.style.display = "flex"
// }

playBtn.addEventListener("click", () => {
    hero.style.display = "none"
    startModel.style.opacity = "1"
})

startModel.addEventListener("click", () => {
    startModel.style.display = "none"
    game.style.width = "100%"
})

function showRandomAnimals() {
    const shuffledAnimals = [...animals]
    shuffledAnimals.sort(() => Math.random() - 0.5)
    animal1.src = shuffledAnimals[0]
    animal2.src = shuffledAnimals[1]
    animal3.src = shuffledAnimals[2]
}

function animateScore() {
    const scoreItems = document.querySelectorAll(".title-item")

    scoreItems.forEach((item) => {
        item.classList.remove("play")

        void item.offsetWidth

        item.classList.add("play")
    })
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
        nextBtn.style.opacity = "1"
        // nextBtn.style.width = "160px"

        if (score < 0) {
            if (animal.src.includes("animal1.png")) {
                rightAnimal.style.display = "flex"
                // rightAnimal.style.opacity = "1"
                // rightAnimal.style.transform = "translateY(0)"
                score += 20
            } else {
                wrongAnimal.style.display = "flex"
                score -= 5
                alertBox.style.display = "flex"
                alertBtn.addEventListener("click", () => {
                    alertBox.style.display = "none"
                })
            }
        } else {
            if (score == 0 && !animal.src.includes("animal1.png")) {
                alertBox.style.display = "flex"
                alertBtn.addEventListener("click", () => {
                    alertBox.style.display = "none"
                })
            }
            if (animal.src.includes("animal1.png")) {
                rightAnimal.style.display = "flex"
                // rightAnimal.style.opacity = "1"
                // rightAnimal.style.transform = "translateY(0)"
                score += 10
            } else {
                wrongAnimal.style.display = "flex"
                score -= 5
            }
        }

        let displayScore = String(score).padStart(2, "0")

        scoreCounter.innerHTML = displayScore
            .split("")
            .map(digit => `<span class="title-item">${digit}</span>`)
            .join("")

        animateScore()

        if (score >= 30) {
            nextBtn.style.opacity = "0"
            replayBtn.style.opacity = "1"
            winBox.style.display = "flex"
            const end = Date.now() + 4e3;
            const colors = ["#FF4F70", "#FF8243", "#F6DF4F", "#45C486", "#3D9BE9", "#9457EB"];
            (function frame() {
                confetti({
                    particleCount: 2,
                    angle: 60,
                    spread: 55,
                    origin: { x: 0 },
                    colors
                })
                confetti({
                    particleCount: 2,
                    angle: 120,
                    spread: 55,
                    origin: { x: 1 },
                    colors
                })
                if (Date.now() < end) requestAnimationFrame(frame);
            })()
        }
    })
})

nextBtn.addEventListener("click", () => {
    showRandomAnimals()
    // scoreAnimation.style.animationPlayState = "paused"
    alertBox.style.display = "none"
    nextBtn.style.opacity = "0"
    rightAnimal.style.display = "none"
    // rightAnimal.style.opacity = "0"
    // rightAnimal.style.transform = "translateY(10px)"
    wrongAnimal.style.display = "none"
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

replayBtn.addEventListener("click", () => {
    showRandomAnimals()
    // scoreAnimation.style.animationPlayState = "paused"
    alertBox.style.display = "none"
    nextBtn.style.opacity = "0"
    replayBtn.style.opacity = "0"
    winBox.style.display = "none"
    rightAnimal.style.display = "none"
    // rightAnimal.style.opacity = "0"
    // rightAnimal.style.transform = "translateY(10px)"
    wrongAnimal.style.display = "none"
    animal1.style.zIndex = "-1"
    animal2.style.zIndex = "-1"
    animal3.style.zIndex = "-1"
    cupboardImg1.src = "./assets/cupboard-close.png"
    cupboardImg2.src = "./assets/cupboard-close.png"
    cupboardImg3.src = "./assets/cupboard-close.png"
    cupboards.forEach((cup) => {
        cup.style.pointerEvents = "auto"
    })
    score = 0
    let displayScore = String(score).padStart(2, "0")
    scoreCounter.innerHTML = displayScore
        .split("")
        .map(digit => `<span class="title-item">${digit}</span>`)
        .join("")

    animateScore()
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