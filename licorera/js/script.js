////////cambio de slider ///////////
let indiceSlide = 1;
mostrarSlide(indiceSlide);

function cambiarSlide(n) {
  mostrarSlide(indiceSlide += n);
}

function mostrarSlide(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  if (n > slides.length) { indiceSlide = 1 }
  if (n < 1) { indiceSlide = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[indiceSlide - 1].style.display = "flex";
}

document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowLeft") {
    cambiarSlide(-1);
  } else if (event.key === "ArrowRight") {
    cambiarSlide(1);
  }
});


////////////// guardar cliente  ///////////////////
// document.getElementById('registroCliente').addEventListener('submit', function (e) {
//   e.preventDefault();

//   const datos = {
//     nombre: document.getElementById('nombre').value,
//     email: document.getElementById('email').value,
//     password: document.getElementById('password').value,
//   };

//   fetch('../data/data.php', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(datos),
//   })
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch((error) => console.error('Error:', error));
// });



