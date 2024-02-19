const net = new brain.NeuralNetwork();
const data = [{ "input": { "r": 0, "g": 0, "b": 0 }, "output": [1] }, { "input": { "r": 1, "g": 1, "b": 1 }, "output": [0] }];

net.train(data);

const save = document.getElementById("print");
const diagram = document.getElementById("diagram");
const colorEl = document.getElementById("color-box");
const guessEl = document.getElementById("guess");
const whiteButton = document.getElementById("white-button");
const blackButton = document.getElementById("black-button");
const printButton = document.getElementById("print-button");
let color;
setRandomColor();

whiteButton.addEventListener("click", () => {
    chooseColor(1);
});

blackButton.addEventListener("click", () => {
    chooseColor(0);
});

printButton.addEventListener("click", () => {
    save.value = JSON.stringify(data);
});

function chooseColor(value) {
    data.push({
        input: color,
        output: [value]
    });
    net.train(data);
    setRandomColor();
};

diagram.innerHTML = brain.utilities.toSVG(net);

function setRandomColor() {
    color = {
        r: Math.random(),
        g: Math.random(),
        b: Math.random()
    };
    const guess = net.run(color)[0];
    guessEl.style.color = guess > .5 ? "#FFF" : "#000";
    colorEl.style.backgroundColor =
        `rgba(${color.r * 255}, ${color.g * 255}, ${color.b * 255})`;
};
/**
 * @copyright
 * Coded by Sobhan-SRZA (mr.sinre) | https://github.com/Sobhan-SRZA
 * @copyright
 * Work for Persian Caesar | https://dsc.gg/persian-caesar
 * @copyright
 * Please Mention Us "Persian Caesar", When Have Problem With Using This Code!
 * @copyright
 */