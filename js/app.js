const myTextElement = document.querySelector('.main_text')
const colors = ["red", "#00ff07", "blue"];

let i = 0;

const colorloop = () =>
{
    if(i >= colors.length) i = 0;

    myTextElement.style.color = colors[i];
    i++;
};

setInterval(colorloop, 500);