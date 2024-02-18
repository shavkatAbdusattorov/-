const images = [
  {
    id: 1,
    img: "img/photo_2024-02-17_16-18-15.jpg",
  },
  {
    id: 2,
    img: "img/photo_2024-02-17_16-19-03.jpg",
  },
  {
    id: 3,
    img: "img/photo_2024-02-17_16-19-10.jpg",
  },
];

function randomTheArray() {
  const random = Math.floor(Math.random() * images.length);
  return images[random];
}

const imagesFromUser = document.querySelector(".imagesFromUser");
const imagesFromComputer = document.querySelector(".imagesFromComputer");
const scoreUser = document.querySelector(".scoreUser");
const scoreComputer = document.querySelector(".scoreComputer");
const imgBtn1 = document.querySelector(".imgBtn1");
const imgBtn2 = document.querySelector(".imgBtn2");
const imgBtn3 = document.querySelector(".imgBtn3");
const playBtn = document.querySelector(".playBtn");
const imgReset = document.querySelector(".imgReset");
let h1 = document.querySelector(".win");
let three = document.querySelector(".three");
imgReset.style.display = "none";

const scoreForUser = 0;
const scoreForComputer = 0;

scoreUser.innerHTML = scoreForUser;
scoreComputer.innerHTML = scoreForComputer;

const imageUser = document.createElement("img");
imageUser.src = "img/question-mark-700-1806763.jpg";
const imageComputer = document.createElement("img");
imageComputer.src = "img/question-mark-700-1806763.jpg";

imgBtn1.onclick = function () {
  imageUser.src = "img/photo_2024-02-17_16-18-15.jpg";
  playBtn.style.display = "block";
  h1.innerHTML = "";
};

imgBtn2.onclick = function () {
  imageUser.src = "img/photo_2024-02-17_16-19-03.jpg";
  playBtn.style.display = "block";
  h1.innerHTML = "";
};
imgBtn3.onclick = function () {
  imageUser.src = "img/photo_2024-02-17_16-19-10.jpg";
  playBtn.style.display = "block";
  h1.innerHTML = "";
};

// 127.0.0.1:5501/img/photo_2024-02-17_16-18-15.jpg ruka
//127.0.0.1:5501/img/photo_2024-02-17_16-19-03.jpg y
//127.0.0.1:5501/img/photo_2024-02-17_16-19-10.jpg sang

playBtn.onclick = function () {
  console.log("me", imageUser.src);
  imageComputer.src = randomTheArray().img;
  console.log("com", imageComputer.src);
  imgReset.style.display = "block";
  imgBtn1.style.display = "none";
  imgBtn2.style.display = "none";
  imgBtn3.style.display = "none";
  playBtn.style.display = "none";

  if (
    (imageUser.src ==
      "http://127.0.0.1:5501/img/photo_2024-02-17_16-18-15.jpg" &&
      imageComputer.src ==
        "http://127.0.0.1:5501/img/photo_2024-02-17_16-18-15.jpg") ||
    (imageUser.src ==
      "http://127.0.0.1:5501/img/photo_2024-02-17_16-19-03.jpg" &&
      imageComputer.src ==
        "http://127.0.0.1:5501/img/photo_2024-02-17_16-19-03.jpg") ||
    (imageUser.src ==
      "http://127.0.0.1:5501/img/photo_2024-02-17_16-19-10.jpg" &&
      imageComputer.src ==
        "http://127.0.0.1:5501/img/photo_2024-02-17_16-19-10.jpg")
  ) {
    scoreUser.innerHTML;
  } else if (
    (imageUser.src ==
      "http://127.0.0.1:5501/img/photo_2024-02-17_16-18-15.jpg" &&
      imageComputer.src ==
        "http://127.0.0.1:5501/img/photo_2024-02-17_16-19-10.jpg") ||
    (imageUser.src ==
      "http://127.0.0.1:5501/img/photo_2024-02-17_16-19-03.jpg" &&
      imageComputer.src ==
        "http://127.0.0.1:5501/img/photo_2024-02-17_16-18-15.jpg") ||
    (imageUser.src ==
      "http://127.0.0.1:5501/img/photo_2024-02-17_16-19-10.jpg" &&
      imageComputer.src ==
        "http://127.0.0.1:5501/img/photo_2024-02-17_16-19-03.jpg")
  ) {
    scoreUser.innerHTML++;
    scoreUser.style.color = "green";
    scoreComputer.style.color = "red";
    scoreComputer.style.fontSize = "70px";
    three.style.fontSize = "70px";
    scoreUser.style.fontSize = "70px";
    h1.innerHTML = "User winner 🏅🏅💕😊🙌👍❤️";
    h1.style.color = "green";
    h1.style.fontSize = "60px";
  } else {
    scoreComputer.innerHTML++;
    scoreComputer.style.color = "green";
    scoreUser.style.color = "red";
    scoreUser.style.fontSize = "70px";
    three.style.fontSize = "70px";
    scoreComputer.style.fontSize = "70px";
    h1.innerHTML = "Computer winner 🏅🏅💕😊🙌👍❤️";
    h1.style.color = "green";
    h1.style.fontSize = "60px";
  }
};

imgReset.onclick = function () {
  imageUser.src = "img/question-mark-700-1806763.jpg";
  imageComputer.src = "img/question-mark-700-1806763.jpg";
  imgBtn1.style.display = "block";
  imgBtn2.style.display = "block";
  imgBtn3.style.display = "block";
  scoreUser.style.fontSize = "30px";
  three.style.fontSize = "30px";
  scoreComputer.style.fontSize = "30px";
  imgReset.style.display = "none";
  h1.innerHTML = "";
};

imagesFromUser.append(imageUser);
imagesFromComputer.append(imageComputer);
