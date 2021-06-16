$(document).ready(function () {
  let myAudio = document.getElementById("myAudio");
  let isPlaying = false;

  $("#play").click(function () {
    isPlaying ? myAudio.pause() : myAudio.play();
  });
  myAudio.onplaying = function () {
    isPlaying = true;
  };
  myAudio.onpause = function () {
    isPlaying = false;
  };

  let counter = 0;
  let successCounter = 0;
  $("#submit").click(function () {
    let successAudio = document.getElementById("success");
    let dangerAudio = document.getElementById("danger");
    let botNumber = Math.floor(Math.random() * 10 + 1);
    let guess = 1;

    let humanChoice = document.getElementById("searchBar").value;
    if (humanChoice == botNumber) {
      dangerAudio.pause();
      successAudio.play();

      swal({
        title: "I will never lose",
        text: "Come again loser",
        icon: "success",
      });
      ++successCounter;
      document.getElementById("human").innerHTML = `Human ${successCounter}`;
      if (successCounter == 20) {
        successAudio.pause();
        dangerAudio.pause();
        successCounter = 0;
        counter = 0;
        setTimeout(function () {
          document.getElementById(
            "human"
          ).innerHTML = `Human ${successCounter}`;
          document.getElementById("bot").innerHTML = `Bot ${counter}`;
        }, 500);
        swal({
          title: "I never forget this",
          text: "Buddy yo win",
          icon: "success",
        });
      }
    } else {
      guess++;
      successAudio.pause();
      dangerAudio.play();

      swal({
        title: "Ohh you dead",
        text: "No one can beat me",
        icon: "error",
      });
      ++counter;
      document.getElementById("bot").innerHTML = `Bot ${counter}`;
      if (counter == 20) {
        successAudio.pause();
        dangerAudio.pause();
        counter = 0;
        successCounter = 0;
        setTimeout(function () {
          document.getElementById("bot").innerHTML = `Bot ${counter}`;
          document.getElementById(
            "human"
          ).innerHTML = `Human ${successCounter}`;
        }, 500);
        swal({
          title: "Haha you lose it",
          text: "Game over",
          icon: "error",
        });
      }
    }
  });
});
