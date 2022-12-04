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
  Email.send({
    SecureToken: "b52c9078-8769-409e-b368-3923b8fc3f97",
    To: "walden.devbusiness@gmail.com",
    From: "walden.devbusiness@gmail.com",
    Subject: "This is the subject",
    Body: "And this is the body",
  }).then((message) => alert(message));
};

getIp();
