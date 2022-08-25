const myTextElement = document.querySelector('.main_text')
const colors = ["#ff0000", "#09ff00", "#0000ff"];

let i = 0;

const colorloop = () =>
{
    if(i >= colors.length) i = 0;

    myTextElement.style.color = colors[i];
    i++;
};

setInterval(colorloop, 500);

