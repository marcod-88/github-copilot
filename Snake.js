// Initialize the score
var score = 0;

// Get the canvas element from the HTML document
var canvas = document.getElementById('gameCanvas');
// Get the 2D rendering context for the canvas
var context = canvas.getContext('2d');

// Define the size of each square (snake body part/food)
var box = 15;
// Initialize the snake as an array of coordinates, starting with one element in the middle of the canvas
var snake = [];
snake[0] = {x: 10 * box, y: 10 * box};

// Initialize the obstacles
var obstacles = [];
var numObstacles = 5; // Number of obstacles

for(var i = 0; i < numObstacles; i++) {
    obstacles.push({
        x: Math.floor(Math.random() * 39 + 1) * box,
        y: Math.floor(Math.random() * 39 + 1) * box
    });
}


// Place the food at a random position in the canvas
var food = {
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box
}

// Variable to store the current direction of the snake
var d;

// Event listener for the arrow keys to change the direction of the snake
document.addEventListener('keydown', direction);

function direction(event) {
    if(event.keyCode == 37 && d != 'RIGHT') {
        d = 'LEFT';
    } else if(event.keyCode == 38 && d != 'DOWN') {
        d = 'UP';
    } else if(event.keyCode == 39 && d != 'LEFT') {
        d = 'RIGHT';
    } else if(event.keyCode == 40 && d != 'UP') {
        d = 'DOWN';
    }
}

// Function to draw the snake and food on the canvas
function draw() {
    // Clear the canvas
    context.clearRect(0, 0, canvas.width, canvas.height);
    // Draw each part of the snake
    for(var i = 0; i < snake.length; i++) {
        context.fillStyle = (i == 0) ? 'green' : 'green';
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }

     // Draw the obstacles
    for(var i = 0; i < obstacles.length; i++) {
        context.fillStyle = 'black';
        context.fillRect(obstacles[i].x, obstacles[i].y, box, box);
    }

    // Draw the food
    context.fillStyle = 'red';
    context.fillRect(food.x, food.y, box, box);

    // Get the current head position of the snake
    var snakeX = snake[0].x;
    var snakeY = snake[0].y;

    // Update the position of the snake to move it
    if(d == 'LEFT') snakeX = (snakeX - box < 0) ? canvas.width - box : snakeX - box;
    if(d == 'UP') snakeY = (snakeY - box < 0) ? canvas.height - box : snakeY - box;
    if(d == 'RIGHT') snakeX = (snakeX + box >= canvas.width) ? 0 : snakeX + box;
    if(d == 'DOWN') snakeY = (snakeY + box >= canvas.height) ? 0 : snakeY + box;

    // Check if the snake has eaten the food
    if(snakeX == food.x && snakeY == food.y) {
    // Generate a new random position for the food
    food = {
        x: Math.floor(Math.random() * 15 + 1) * box,
        y: Math.floor(Math.random() * 15 + 1) * box
    }
    // Increase the score
    score++;
    } else {
        // Remove the last part of the snake
        snake.pop();
    }

    // Update the score display
    document.getElementById('scoreDisplay').innerText = 'Score: ' + score;

    // Create the new head of the snake
    var newHead = {
        x: snakeX,
        y: snakeY
    }

    // Check if the snake has hit the border, itself, or an obstacle
    if(collision(newHead, snake) || collision(newHead, obstacles)) {
        // End the game
        clearInterval(game);

        // Display a popup with the score and a button to play again
        var playAgain = confirm('Game Over. Your score was ' + score + '. Play again?');
        if(playAgain) {
            // Reload the page to start a new game
            location.reload();
        }
    }

    // Add the new head to the front of the snake
    snake.unshift(newHead);
    }

    // Function to check if the head of the snake has collided with the rest of the snake or an obstacle
    function collision(head, array) {
        for(var i = 0; i < array.length; i++) {
            if(head.x == array[i].x && head.y == array[i].y) {
                return true;
            }
        }
        return false;
    }

// Call the draw function every 100ms
var game = setInterval(draw, 100);