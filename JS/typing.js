var i = 0;
var j = 0;
var node = document.createElement("BR");
var text1 = 'Budi izvrstan u onom što voliš.';
var text2 = 'ZAISKRI.';
var speed = 200;
var speed2 = 200;

function typeWriter() {
  if (i < text1.length) {
    document.getElementById("demo").innerHTML += text1.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
  if (i == text1.length && j < text2.length) {
    if (i == text1.length && j == 0) {
      document.getElementById("demo").appendChild(node);
    }
    document.getElementById("demo2").innerHTML += text2.charAt(j);
    j++;
    setTimeout(typeWriter, speed2);
  }
}