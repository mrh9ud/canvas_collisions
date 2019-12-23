document.addEventListener("DOMContentLoaded", function(){
    // startGame()
    fetchUsers()
    newOrExistingUser()
    // addNamEventListner()
})


// First Page
function newOrExistingUser(){
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

    const div = document.getElementById("choose-user-btn")
    buttonDiv.append(createNewUserButton)
    buttonDiv.append(createExistingUserButton)

}

function fetchUsers(){
    fetch("http://localhost:3000/users")
    .then(res => res.json())
    .then(json => console.log(json))
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
}

// Existing User
function loginExistingUser(user){
    document.querySelector("#newOrExistingUserBtn").innerHTML = ""
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
    // createCanvas.append(createInput)

    const createBtn = document.createElement("button")
    createBtn.id = "existingId"
    createBtn.innerText = "Next Page"
    createBtn.addEventListener("click", chooseMissile)
    
    body.append(createInput) 
    body.append(createBtn)
}






// function addNamEventListner(){
//     const name = document.querySelector("#choose-user-btn")
//     name.addEventListener("submit", checkUserStatus)
// }

// function checkUserStatus(user){
//     if(user.currentTarget.username.value === )

//     post request to json
//     if json db has username
    
// }





















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









