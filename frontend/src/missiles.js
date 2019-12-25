function chooseMissile(user){
    debugger
    document.querySelector("body").innerHTML = ""
    const body = document.querySelector("body")
    
    const createNameP = document.createElement("p")
    createNameP.innerText = `Hello ${user.name}`
    body.append(createNameP)
    
    // const createScoreP = document.createElement("p")
    // createP.innterText = `Your score is ${user.}`
    const createH2 = document.createElement("h2")
    createH2.id = "chooseMissile"
    createH2.innerText = "Choose a your missile"
    body.append(createH2)

    const createFirstChoice = document.createElement("h2")
    const createSecondChoice = document.createElement("h2")
    const createThirdChoice = document.createElement("h2")

    createFirstChoice.innerText = "Small"
    createFirstChoice.id = "firstChoice"
    createSecondChoice.innerText = "Medium"
    createSecondChoice.id = "secondChoice"
    createThirdChoice.innerText = "Large"
    createThirdChoice.id = "thirdChoice"

    body.append(createFirstChoice)
    body.append(createSecondChoice)
    body.append(createThirdChoice)

    const createCanvas = document.createElement("canvas")
    createCanvas.id = "canvas"
    body.append(createCanvas)


}