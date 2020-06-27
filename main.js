const canvas = document.querySelector('.canvas');
const ctx = canvas.getContext("2d");
const scale = 10;

const rows = canvas.height / scale;
const columns = canvas.width / scale;

var snake;

(function setup(){


    console.log("Ready!");

    snake = new Snake();
    fruit = new Fruit();
    fruit.pickLocation();

    window.setInterval(() => {

        //dont forget to decrease the tail of snake when moving so 
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        snake.update();
        fruit.draw();
        snake.draw();

        //if snake and fruit collide a new fruit will be summoned in the canvas
        if (snake.eat(fruit)){
            fruit.pickLocation();
        }

        snake.checkCollision();
        document.querySelector('.score').innerText = snake.total;

    }, 100);


}());

window.addEventListener('keydown', ((evt)=> {

    const direction = evt.key.replace('Arrow', '');
    snake.changeDirection(direction);

}));


