var i = 0;

function clickLink() {
  i++;
    document.getElementById("clicks").innerHTML = i;
}

function Reset() {
  i = 0;
  document.getElementById("clicks").innerHTML = i;
}