document.addEventListener("DOMContentLoaded", function(){
    startGame()
    // newOrExistingUser()
    // fetchUsers()
    // addNamEventListner()
})


function startGame() {
    myGameArea.start();
    myGamePiece = new component(100, 75, 50, 0, 360 * Math.PI, "green");

}

var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 800;
        this.canvas.height = 500;
        this.context = this.canvas.getContext("2d");
        
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateGameArea, 5);
    },
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
      }
}

function component(x, y, r, sAngle, eAngle, color) {
    // this.width = width;
    // this.height = height;
    // this.r = radius;
    this.x = x;
    this.y = y;
    this.r = r;
    this.sAngle = sAngle;
    this.eAngle = eAngle
    this.update = function(){
    ctx = myGameArea.context;
    ctx.beginPath();
    // debugger
    ctx.fillStyle = color;
    ctx.arc(this.x, this.y, this.r, this.sAngle, this.eAngle, ctx.fillStyle);
    ctx.stroke()
    ctx.fill()
    }
  }


function updateGameArea() {
    myGameArea.clear();
    // debugger
    myGamePiece.x += 1;
    myGamePiece.update();
}









// function newOrExistingUser(){
//     // document.getElementById("login").innerHTML = ""
//     document.querySelector("canvas").style.display = "none"
//     const createNewUserButton = document.createElement("button")
//     createNewUserButton.innerText = "New User"
//     createNewUserButton.addEventListener("click", createNewUser)
//     const createExistingUserButton = document.createElement("button")
//     createExistingUserButton.innerText = "Existing User"
//     createExistingUserButton.addEventListener("click", loginExistingUser)
//     const div = document.getElementById("choose-user-btn")
//     div.append(createNewUserButton)
//     div.append(createExistingUserButton)

// }

// function fetchUsers(){
//     fetch("http://localhost:3000/users")
//     .then(res => res.json())
//     .then(json => console.log(json))
// }

// // function addNamEventListner(){
// //     const name = document.querySelector("#choose-user-btn")
// //     name.addEventListener("submit", checkUserStatus)
// // }

// // function checkUserStatus(user){
// //     if(user.currentTarget.username.value === )

// //     post request to json
// //     if json db has username
    
// // }





// function createNewUser(user){
//     document.getElementById("choose-user-btn").innerHTML = ""
//     document.querySelector("canvas").style.display = ""
//     const canvas = document.querySelector("#mc")
//     const createInput = document.createElement("input")
//     createInput.type = "text"
//     createInput.style.color = "red"
//     canvas.append(createInput)

// }

 

// function loginExistingUser(user){
//     document.getElementById("choose-user-btn").innerHTML = ""
//     document.querySelector("canvas").style.display = ""
// }


