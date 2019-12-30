document.addEventListener("DOMContentLoaded", function(){
    newOrExistingUser()
    
})


    
// First Page
function newOrExistingUser(){
    // debugger
    const body = document.querySelector("body")

    const buttonDiv = document.createElement("div")
    buttonDiv.id = "newOrExistingUserBtn"
    body.append(buttonDiv)

    const createNewUserButton = document.createElement("button")
    createNewUserButton.innerText = "New User"
    createNewUserButton.addEventListener("click", createNewUser)

    const createExistingUserButton = document.createElement("button")
    createExistingUserButton.innerText = "Existing User"
    createExistingUserButton.addEventListener("click", loginExistingUser)

    buttonDiv.append(createNewUserButton)
    buttonDiv.append(createExistingUserButton)

}

// Creating User
function createNewUser(user){
    document.querySelector("#newOrExistingUserBtn").innerHTML = ""
    const body = document.querySelector("body")

    const createH1 = document.createElement("h1")
    createH1.id = "h1FontPosition"
    createH1.innerText = "Create your name"
    body.append(createH1)

    const createCanvas = document.createElement("canvas")
    createCanvas.id = "canvas"
    body.append(createCanvas)


    const createInput = document.createElement("input")
    createInput.type = "text"
    createCanvas.append(createInput)

    const createBtn = document.createElement("button")
    createBtn.id = "createId"
    createBtn.innerText = "Create"

    body.append(createInput) 
    body.append(createBtn)

    createBtn.addEventListener("click", newUser)
}

function newUser(user){
    const userName = document.querySelector("input").value
    data = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept' : 'application/json'
        },
        body: JSON.stringify({
            "name": userName
        })
    }
    fetch("http://localhost:3000/users", data)
    .then(res => res.json())
    .then(json => loginExistingUser(json))
}

// Existing User
function loginExistingUser(user){
    document.querySelector("body").innerHTML = ""
    const body = document.querySelector("body")

    const createH1 = document.createElement("h1")
    createH1.id = "h1FontPosition"
    createH1.innerText = "Enter your name"
    body.append(createH1)
    
    const createCanvas = document.createElement("canvas")
    createCanvas.id = "canvas"
    body.append(createCanvas)


    const createInput = document.createElement("input")
    createInput.type = "text"
    createInput.value = "Your name"
    body.append(createInput) 
    
    const createBtn = document.createElement("button")
    createBtn.id = "existingId"
    createBtn.innerText = "Log In"
    body.append(createBtn)

    createBtn.addEventListener("click", validateExistingUser)

    // const createBtn = document.createElement("button")
    // createBtn.id = "existingId"
    // createBtn.innerText = "Choose Level"
    // body.append(createBtn)

    // createBtn.addEventListener("click", ()=> validateExistingUser(user))
    
}



function validateExistingUser(e){
    // debugger

    const input = e.target.parentElement.querySelector("input").value
    fetch("http://localhost:3000/users")
    .then(res => res.json())
    .then(users => {
            users.forEach(user => {
                // debugger
                if(user.name.toLowerCase() === input.toLowerCase()){
                    return gameSessionStart(user)
                } 
        })
    })
}

function gameSessionStart(user){
    let data = {
        method: "POST",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify({
            "user_id" : user.id
        })
    }
    fetch("http://localhost:3000/game_sessions", data)
    .then(res => res.json())
    .then(json => chooseMissile(json))
}

function chooseMissile(game_session){
    // debugger
    document.querySelector("body").innerHTML = ""
    const body = document.querySelector("body")
    
    const createNameP = document.createElement("p")
    createNameP.innerText = `Hello ${game_session.user.name}`
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
    createFirstChoice.addEventListener("click", (e)=>storeMissileSize(e,game_session))

    createSecondChoice.innerText = "Medium"
    createSecondChoice.id = "secondChoice"
    createSecondChoice.addEventListener("click", (e)=>storeMissileSize(e,game_session))

    createThirdChoice.innerText = "Large"
    createThirdChoice.id = "thirdChoice"
    createThirdChoice.addEventListener("click", (e)=>storeMissileSize(e,game_session))

    body.append(createFirstChoice)
    body.append(createSecondChoice)
    body.append(createThirdChoice)

    const createCanvas = document.createElement("canvas")
    createCanvas.id = "canvas"
    body.append(createCanvas)
}


function storeMissileSize(e, gameSession){
    // debugger
    let missileSize = e.target.innerText.toLowerCase()
    
    let data = {
        method: "PATCH",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify({
            "missile_size": missileSize
        })
    }

    fetch(`http://localhost:3000/game_sessions/${gameSession.id}`, data)
    .then(chooseLevel(gameSession))

}

function chooseLevel(gameSession){
    document.querySelector("body").innerHTML = ""
    const body = document.querySelector("body")
    
    const createNameP = document.createElement("p")
    createNameP.innerText = `Hello ${gameSession.user.name}`
    body.append(createNameP)
    
    // const createScoreP = document.createElement("p")
    // createP.innterText = `Your score is ${user.}`
    const createH2 = document.createElement("h4")
    createH2.id = "chooseMissile"
    createH2.innerText = "Choose your difficulty"
    body.append(createH2)

    const createFirstChoice = document.createElement("h2")
    const createSecondChoice = document.createElement("h2")
    const createThirdChoice = document.createElement("h2")

    createFirstChoice.innerText = "Easy"
    createFirstChoice.id = "firstChoice"
    createFirstChoice.addEventListener("click", (e)=>startEasyGame(e,gameSession))

    createSecondChoice.innerText = "Medium"
    createSecondChoice.id = "secondChoice"
    // createSecondChoice.addEventListener("click", (e)=>startMediumGame(e,gameSession))

    createThirdChoice.innerText = "Hard"
    createThirdChoice.id = "thirdChoice"
    // createThirdChoice.addEventListener("click", (e)=>startHardGame(e,gameSession))

    body.append(createFirstChoice)
    body.append(createSecondChoice)
    body.append(createThirdChoice)

    const createCanvas = document.createElement("canvas")
    createCanvas.id = "canvas"
    body.append(createCanvas)
}




















// function startGame() {
//     myGameArea.start();
//     myGamePiece = new component(100, 75, 50, 0, 360 * Math.PI, "/assets/pizza.png", "image");

// }

// var myGameArea = {
//     canvas : document.createElement("canvas"),
//     start : function() {
//         this.canvas.width = 800;
//         this.canvas.height = 500;
//         this.context = this.canvas.getContext("2d");
        
//         document.body.insertBefore(this.canvas, document.body.childNodes[0]);
//         this.interval = setInterval(updateGameArea, 5);
//     },
//     clear : function() {
//         this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
//       }
// }

// function component(x, y, r, sAngle, eAngle, url, type) {
//     // this.width = width;
//     // this.height = height;
//     // this.r = radius;
//     this.type = type;
//     if(type == "image") {
//         this.image = new Image();
//         this.image.src = url;
//     }
//     this.x = x;
//     this.y = y;
//     this.r = r;
//     this.sAngle = sAngle;
//     this.eAngle = eAngle
//     this.update = function(){
//     ctx = myGameArea.context;
//     // if(type == "image"){
//     // ctx.beginPath()
//     // ctx.drawImage(this.image, this.x, this.y, this.width, this.height)
//     // }
//     // else
//     // {
//     //     ctx.beginPath();
//     //     // debugger
//     //     ctx.fillStyle = color;
//     //     ctx.arc(this.x, this.y, this.r, this.sAngle, this.eAngle, ctx.fillStyle, this.type);
//     //     ctx.stroke()
//     //     ctx.fill()
//     // }
//     }
//   }


// function updateGameArea() {
//     myGameArea.clear();
//     // debugger
//     myGamePiece.x += 1;
//     myGamePiece.update();
// }









