var user = 0, comp = 0;
function game(playerChoice,computerChoice) {

     if( playerChoice === "Rock" && computerChoice === "Rock"){
        document.getElementById("status").innerHTML = "draw";
     }

     else if (playerChoice === "Rock" && computerChoice === "Scissors") {
       user++;
       document.getElementById("user-score").innerHTML = user;
       document.getElementById("status").innerHTML = "User Wins !";
     }

     else if (playerChoice === "Rock" && computerChoice === "Paper") {
       comp++;
       document.getElementById("comp-score").innerHTML = comp;
       document.getElementById("status").innerHTML = "Comp Wins !";
     }

     else if (playerChoice === "Paper" && computerChoice === "Rock") {
       user++;
       document.getElementById("user-score").innerHTML = user;
       document.getElementById("status").innerHTML = "User Wins !";
     }

     else if (playerChoice === "Paper" && computerChoice === "Scissors"){
       comp++;
       document.getElementById("comp-score").innerHTML = comp;
       document.getElementById("status").innerHTML = "Comp Wins !";
     }

     else if (playerChoice === "Paper" && computerChoice === "Paper") {
         document.getElementById("status").innerHTML = "draw";
     }

     else if (playerChoice === "Scissors" && computerChoice === "Rock") {
       comp++;
       document.getElementById("comp-score").innerHTML = comp;
       document.getElementById("status").innerHTML = "Comp Wins !";
     }

     else if (playerChoice === "Scissors" && computerChoice === "Scissors") {
        document.getElementById("status").innerHTML = "draw";
     }

     else if (playerChoice === "Scissors" && computerChoice === "Paper"){
       user++;
       document.getElementById("user-score").innerHTML = user;
       document.getElementById("status").innerHTML = "User Wins !";
     }


}




for (var i = 0; i < document.querySelectorAll(".btn").length; i++) {
  document.querySelectorAll(".btn")[i].addEventListener("click", function(){
    var playerChoice = this.innerHTML;

       switch (playerChoice) {
          case 'Rock': document.querySelectorAll(".img")[0].setAttribute("src", "images/img1.png" );
          break;

          case 'Paper': document.querySelectorAll(".img")[0].setAttribute("src", "images/img2.png");
          break;

          case 'Scissors': document.querySelectorAll(".img")[0].setAttribute("src", "images/img3.png");
          break;
          default:
       }

       // getting computer Choice
         var choices = ["Rock","Paper","Scissors"];
         var randomNumber = Math.floor(Math.random() * 3);
         var randomImage = "images/img" + (randomNumber+1) + ".png";
         var computerChoice = choices[randomNumber];
         document.querySelectorAll(".img")[1].setAttribute("src", randomImage);


        game(playerChoice,computerChoice);

  });
}
