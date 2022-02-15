function makePink() {
    document.body.style.backgroundColor = 'hotpink';
}
const greenButton = document.getElementById('make-me-green');
greenButton.onclick = function () { //anonymous function
    document.body.style.backgroundColor = 'green';
}
const goldenRod = document.getElementById('buttonGoldenRod');
goldenRod.addEventListener('click', makeGoldenRod);
function makeGoldenRod() {
    document.body.style.backgroundColor = 'goldenRod';
}

const buttonChartreuse = document.getElementById('make-me-Chartreuse');
buttonChartreuse.addEventListener('click', function () {
    document.body.style.backgroundColor = 'Chartreuse';
})


document.getElementById('make-me-OrangeRed').addEventListener('click', function () {
    document.body.style.backgroundColor = 'OrangeRed';
})