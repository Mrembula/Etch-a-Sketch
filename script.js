const container = document.querySelector('#container');
const clickBtn = document.querySelector('.btn');

function rowColumn(row, column) {
    for (let i = 0; i < row; i++) {
        let grid = document.createElement('div');
        grid.classList.add('displayFlex');
        container.appendChild(grid);
        for(let j =  0; j < column; j++) {
            let column = document.createElement('div');
            column.classList.add('columnRow')
            grid.appendChild(column);
        }
    }
}


clickBtn.addEventListener('click', function () {
    window.location.reload();
})

setTimeout(function () {
    const userChoice = window.prompt("Enter a number between 1 and 64");
    if(userChoice > 64){
        alert('Number should no be greater than 64');
        return;
    }
    rowColumn(userChoice, userChoice);
}, 1500);




