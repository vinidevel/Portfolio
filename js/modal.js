
var modalLanding = document.getElementById("myModalLanding");
var modalSistemas = document.getElementById("myModalSistemas");
var modalEcommerce = document.getElementById("myModalEcommerce");


var btnLandind = document.getElementById("myBtnLanding");
var btnSistemas = document.getElementById("myBtnSistemas");
var btnEcommerce = document.getElementById("myBtnEcommerce");


var span = document.getElementsByClassName("close")[0];
var spanSistemas = document.getElementsByClassName("close")[1];
var spanEcomerce = document.getElementsByClassName("close")[2];


btnLandind.onclick = function() {
  modalLanding.style.display = "block";
}

btnSistemas.onclick = function() {
  modalSistemas.style.display = "block";
}

btnEcommerce.onclick = function() {
  modalEcommerce.style.display = "block";
}


span.onclick = function() {
  modalLanding.style.display = "none";
}

spanSistemas.onclick = function() {
  modalSistemas.style.display = "none";
}

spanEcomerce.onclick = function() {
  modalEcommerce.style.display = "none";
}


window.onclick = function(event) {
  if (event.target == modalLanding) {
    modalLanding.style.display = "none";
  }

  if (event.target == modalSistemas) {
    modalSistemas.style.display = "none";
  }

  if (event.target == modalEcommerce) {
    modalEcommerce.style.display = "none";
  }
}