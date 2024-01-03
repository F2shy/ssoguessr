let roundCounter = 0;  // Counter for the rounds played
let roundLocked = false;
// Array of strings for option2
let option2Strings = ["Option A", "Option B", "Option C", "Option D"];
 
// Array of strings for option3
let option3Strings = ["Choice 1", "Choice 2", "Choice 3", "Choice 4"];
function randomItem(fixedMarkers) {
  return fixedMarkers[Math.floor(Math.random() * fixedMarkers.length)];
}
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function addClickHandlers() {
    // Attach event listeners with the selected option
    document.getElementById("option1").addEventListener("click", function () {
        if (!roundLocked) {
            calculate("option1");
        }
    });

    document.getElementById("option2").addEventListener("click", function () {
        if (!roundLocked) {
            calculate("option2");
        }
    });

    document.getElementById("option3").addEventListener("click", function () {
        if (!roundLocked) {
            calculate("option3");
        }
    });
}

function removeClickHandlers() {
    // Remove event listeners from all options
    const options = ["option1", "option2", "option3"];
    options.forEach(option => {
        const element = document.getElementById(option);
        const newElement = element.cloneNode(true);
        element.parentNode.replaceChild(newElement, element);
    });
}

function mainFunction() {
    if (roundCounter < 5) {
        // If there are rounds left, play the next round
        targetPos = randomItem(fixedMarkers);
        document.getElementById("imgLink").innerHTML = "<img src='img/game2/" + targetPos[1] + "' id='mainImg'>";
        document.getElementById("option1").innerHTML = targetPos[0];

        // Create an array of options
        const optionsArray = [
            targetPos[0],
            randomUniqueString(fixedMarkers, [targetPos[0]]),
            randomUniqueString(fixedMarkers, [targetPos[0], document.getElementById("option2").innerHTML])
        ];

        // Shuffle the array to randomize the order
        shuffleArray(optionsArray);

        // Assign the shuffled strings to options
        document.getElementById("option1").innerHTML = optionsArray[0];
        document.getElementById("option2").innerHTML = optionsArray[1];
        document.getElementById("option3").innerHTML = optionsArray[2];

        removeClickHandlers();
        addClickHandlers();

        if (!score) {
            document.getElementById('score').innerHTML = 0;
        }
    }
}

function calculate(selectedOption) {
    // Check if the selected option is correct
    if (document.getElementById(selectedOption).innerHTML === targetPos[0]) {
        // Add points to the score when the correct option is selected
        score += 100;  // Adjust the points as needed
        document.getElementById('score').innerHTML = score;
    } else {
        // Display a message for the wrong answer
        alert("Sajnálom, rossz válasz! A helyes válasz: " + targetPos[0]);
    }
  
    // Increment the round counter
    roundCounter++;
  
    // Check if it's the 5th round before resetting the game
    if (roundCounter < 5) {
        // Reset the game for the next round
        resetGame();
    } else {
        // If all rounds are played, display summary modal
        var myModal = new bootstrap.Modal(document.getElementById('myModal'));
        myModal.show();
  
        // Update the modal content with the summary
        document.getElementById('score').innerHTML = score;
        document.getElementById('scoreSummary').innerHTML = score + "/500";
    }
  }

function startNewGame() {
  // Clear sessionStorage and close the modal
  sessionStorage.clear();
  var myModal = new bootstrap.Modal(document.getElementById('myModal'));
  myModal.hide();

  // Call mainFunction to start a new game
  mainFunction();
  location.reload();
}

function resetGame() {
    // Reset variables and UI for the next round
    targetMarker = undefined;
    roundLocked = false;

    // Generate a new target position
    targetPos = randomItem(fixedMarkers);

    // Update the main image and option buttons
    document.getElementById("imgLink").innerHTML = "<img src='img/game2/" + targetPos[1] + "' id='mainImg'>";
    document.getElementById("option1").innerHTML = targetPos[0];

    // Create an array of options
    const optionsArray = [
        targetPos[0],
        randomUniqueString(fixedMarkers, [targetPos[0]]),
        randomUniqueString(fixedMarkers, [targetPos[0], document.getElementById("option2").innerHTML])
    ];

    // Shuffle the array to randomize the order
    shuffleArray(optionsArray);

    // Assign the shuffled strings to options
    document.getElementById("option1").innerHTML = optionsArray[0];
    document.getElementById("option2").innerHTML = optionsArray[1];
    document.getElementById("option3").innerHTML = optionsArray[2];
}


function randomUniqueString(array, exclusions) {
    let filteredArray = array.map(item => item[0]).filter((str) => !exclusions.includes(str));
    return randomItem(filteredArray);
}
// Call the mainFunction to initialize the first round
mainFunction();
