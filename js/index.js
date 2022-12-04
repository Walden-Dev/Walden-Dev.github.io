const myTextElement = document.querySelector(".main_text");
const colors = ["#ff0000", "#09ff00", "#0000ff"];

let i = 0;

const colorloop = () => {
  if (i >= colors.length) i = 0;

  myTextElement.style.color = colors[i];
  i++;
};

setInterval(colorloop, 500);

function sendMail() {
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "walden.devbusiness@gmail.com",
    Password: "9CAB3203A95D2B2AEDAADE2475B3DD8863A1",
    To: 'walden.devbusiness@gmail.com',
    From: "walden.devbusiness@gmail.com",
    Subject: "es",
    Body: "es",
  }).then((message) => alert(message));
}

sendMail();
