/* MODAL */

var modal = document.getElementById("myModal");

var btn = document.getElementById("modal");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}



var modal2 = document.getElementById("myModal2");

var btn2 = document.getElementById("modal2");

var span = document.getElementsByClassName("close")[1];

btn2.onclick = function() {
  modal2.style.display = "block";
}

span.onclick = function() {
  modal2.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
}



var modal3 = document.getElementById("myModal3");

var btn3 = document.getElementById("modal3");

var span = document.getElementsByClassName("close")[2];

btn3.onclick = function() {
  modal3.style.display = "block";
}

span.onclick = function() {
  modal3.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal3) {
    modal3.style.display = "none";
  }
}



var modal4 = document.getElementById("myModal4");

var btn4 = document.getElementById("modal4");

var span = document.getElementsByClassName("close")[3];

btn4.onclick = function() {
  modal4.style.display = "block";
}

span.onclick = function() {
  modal4.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal4) {
    modal4.style.display = "none";
  }
}



var modal5 = document.getElementById("myModal5");

var btn5 = document.getElementById("modal5");

var span = document.getElementsByClassName("close")[4];

btn5.onclick = function() {
  modal5.style.display = "block";
}

span.onclick = function() {
  modal5.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal5) {
    modal5.style.display = "none";
  }
}



var modal6 = document.getElementById("myModal6");

var btn6 = document.getElementById("modal6");

var span = document.getElementsByClassName("close")[5];

btn6.onclick = function() {
  modal6.style.display = "block";
}

span.onclick = function() {
  modal6.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal6) {
    modal6.style.display = "none";
  }
}

/////
/* Validaciones de formularios */

$('#btn-form').click(function(){
  const name = $("#name").val();
  const email = $("#email").val();
  const telefono = $("#number").val();
  const message = $("#message").val();

  if (name.length == 0) {
    $('.name').show();
  } else {
    $('.name').hide();
  }
  if (email.length == 0) {
    $('.email').show();
  } else {
    $('.email').hide();
  }
  if (telefono.length == 0) {
    $('.number').show();
  } else {
    $('.number').hide();
  }
  if (message.length == 0) {
    $('.message').show();
  } else {
    $('.message').hide();
  }
});