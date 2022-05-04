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

        // Add Numbers
        for (let i=0; i<squares.length; i++) {
            const isLeftEdge = (i % width === 0);
            const isRightEdge = (i % width === width - 1);
            let total = 0;

            if (squares[i].classList.contains('safe')){
                if (i>0 && !isLeftEdge && squares[i-1].classList.contains('bomb')) total ++;
                if (i>9 && !isRightEdge && squares[i+1-width].classList.contains('bomb')) total ++;
                if (i>10 && squares[i-width].classList.contains('bomb')) total ++;
                if (i>11 && !isLeftEdge && squares[i-1-width].classList.contains('bomb')) total ++;
                if (i<98 && !isRightEdge && squares[i+1].classList.contains('bomb')) total ++;
                if (i<90 && !isLeftEdge && squares[i-1+width].classList.contains('bomb')) total ++;
                if (i<88 && !isRightEdge && squares[i+1+width].classList.contains('bomb')) total ++;
                if (i<89 && squares[i+width].classList.contains('bomb')) total ++;
                squares[i].setAttribute('data', total)
                console.log(squares[i]);
            }
        }


    }
    createBoard();
})