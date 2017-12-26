// create array for valid computer choices
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// create variables needed
var wins = 0;
var losses = 0;
var guesses = 9;
var guessesLeft = 9;
var userGuessed = [];
var computerGuess = null;
// random computer letter generator
var computerChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)];

//Allows the user 9 guesses
// guesses = guesses || 9
var updateGuessesLeft = function() {
    // Here we are grabbing the HTML element and setting it equal to the guessesLeft. (i.e. guessesLeft will get displayed in HTML)
    document.querySelector('#guessLeft').innerHTML = "Guesses left: " + guessesLeft;
  };
  
  var updatecomputerGuess = function() {
    this.computerGuess = this.computerChoices[Math.floor(Math.random() * this.computerChoices.length)];
  };
  var updateGuessesSoFar = function() {
    // Here we take the guesses the user has tried -- then display it as letters separated by commas. 
    document.querySelector('#let').innerHTML = "Your Guesses so far: " + userGuessed.join(', ');
  };
  // Function will be called when we reset everything
  var reset = function() {
    totalGuesses = 9;
    guessesLeft = 9;
    guessedLetters = [];
  
    updatecomputerGuess();
    updateGuessesLeft();
    updateGuessesSoFar();
  }
  
  updatecomputerGuess();
  updateGuessesLeft();
  
  
  //When key is released it becomes the users guess
  document.onkeyup = function(event) {
      guessesLeft--;
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
  
    userGuessed.push(userGuess);
    updateGuessesLeft();
    updateGuessesSoFar();
  
          if (guessesLeft > 0){
              if (userGuess == computerGuess){
                  wins++;
                  document.querySelector('#wins').innerHTML = "Wins: " + wins;
                  alert("Yes, you are psychic!");
                  reset();
              }
          }else if(guessesLeft == 0){
              // Then we will loss and we'll update the html to display the loss 
              losses++;
              document.querySelector('#losses').innerHTML = "Losses: " + losses;
              alert("Sorry, you're not psychic, maybe try again?");
              // Then we'll call the reset. 
              reset();
          }
  };


    

    
    



