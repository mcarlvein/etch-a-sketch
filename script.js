function createGrid(num) {
    const container = document.querySelector('#etch-container');
    const containerDivs = document.querySelectorAll('#etch-container div');
    if (containerDivs) {
        containerDivs.forEach(div => div.remove());
    }
    const total = num * num;
    for (let i = 1; i <= total; i++){
        const div = document.createElement('div');
        container.appendChild(div);
    }
    let style = document.querySelector('style');
    if (!style) {
        style = document.createElement('style');
    }
    style.innerHTML =
        '#etch-container {' +
            `grid-template-rows: repeat(${num}, 1fr);` +
            `grid-template-columns: repeat(${num}, 1fr);` +
        '}';
    container.parentNode.insertBefore(style, container);
}

const setupButton = document.querySelector('#setupButton');
setupButton.addEventListener('click', (e) => {
    const userInput = prompt('Input number for square grid');
    createGrid(userInput);
    setUpHover();
})

function setUpHover() {
    const divs = document.querySelectorAll('#etch-container div');

    divs.forEach(div => {
        div.addEventListener('mouseover', (e) => {
            console.log('hit');
            e.target.style.backgroundColor = 'black';
        })
    });
}