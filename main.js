const codes =  [
  {
    code: "1111",
    message: "hello"
  },
  {
    code: "2222",
    message: "no"
  },
  {
    code: "Aaaa",
    message: "bye"
  },
  {
    code: "3333",
    message: "Tie pillows to your arms and torso, then have a sumo wrestling match"
  }
];

const responses = {
  default: "Enter your code!",
  faulty: "Wrong code!!!"
};

const body = document.querySelector("body");
const speechBubble = document.querySelector("#speech-bubble");
const monsterText = document.querySelector("#speech-bubble-text");
const illustration = document.querySelector("#monster-illustration");

const button = document.querySelector("#submit-button");
button.addEventListener("click", () => {
  const inputCode = document.querySelector("#input").value;

  let match = false;
  let angryFrog = false; 

  if (inputCode.length === 4) {
    codes.forEach(code => {
      if (inputCode.toUpperCase() === code.code.toUpperCase()) {
        document.querySelector("#speech-bubble-text").style.fontSize = "2.8vh";

        /*document.querySelector("#input").readOnly = true;*/
        document.querySelector("#input").style.display = "none";
        angryFrog = false;
        match = true;

        monsterText.innerHTML = code.message;

        button.innerText = "Again!" 
        button.addEventListener("click", () =>{
            location.reload();
          })
        };
      });
  }

  if (!match) {
    document.querySelector("#input").value = "";
    monsterText.innerText = responses.faulty;
    angryFrog = true;
  };

  if (angryFrog) {
    illustration.src="Angry-frog.PNG";
    body.style.backgroundColor = "#f2aea3";
  } else {
    illustration.src="Happy-frog.PNG";
    body.style.backgroundColor = "#9abaa0";
  }

});