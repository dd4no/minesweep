document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('.grid');
    let width = 10;
    let squares = [];
    let numberBombs = 20;

    // Create Game Board
    function createBoard(){

        // Bombs
        const bombArray = Array(numberBombs).fill('bomb');
        // Safe Squares
        const safeArray = Array(width*width - numberBombs).fill('safe');
        // All Squares
        const gameArray = safeArray.concat(bombArray);
        // Shuffled Squares
        const randomArray = gameArray.sort(() => Math.random() -0.5);

        // Generate Grid
        for (let i=0; i<width*width; i++){
            const square = document.createElement('div');
            square.setAttribute('id', i);
            square.classList.add(randomArray[i]);
            grid.appendChild(square);
            squares.push(square);
        }




    }
    createBoard();
})