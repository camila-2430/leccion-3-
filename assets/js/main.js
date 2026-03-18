
const btnArriba = document.getElementById("btn-arriba");


window.onscroll = function() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    btnArriba.style.display = "block";
  } else {
    btnArriba.style.display = "none";
  }
};


btnArriba.addEventListener("click", function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' 
  });
});