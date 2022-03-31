function star1() {
  if ((texttosave = document.getElementById("A").innerHTML)) {
    localStorage.setItem("myRating", texttosave);
  }
}
function star2() {
  if ((texttosave = document.getElementById("B").innerHTML)) {
    localStorage.setItem("myRating", texttosave);
  }
}
function star3() {
  if ((texttosave = document.getElementById("C").innerHTML)) {
    localStorage.setItem("myRating", texttosave);
  }
}
function star4() {
  if ((texttosave = document.getElementById("D").innerHTML)) {
    localStorage.setItem("myRating", texttosave);
  }
}
function star5() {
  if ((texttosave = document.getElementById("E").innerHTML)) {
    localStorage.setItem("myRating", texttosave);
  }
}

function greeting() {
  location.href = "index2.html";
}

function processUserInput(callback) {
  document.getElementById("text").innerText = localStorage.getItem("myRating");
  callback();
}

processUserInput();
