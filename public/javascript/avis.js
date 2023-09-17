const slides = [...document.querySelectorAll(".slide")]; // je créé un tableau avec les slides

const sliderData = {
  direction: 0, // je créé un objet qui va gérer toutes les propriété de mon slider
  slideOutIndex: 0, // ma première slide par défaut qui est affichée
  slideInIndex: 0, // la slide qui va rentrer ou sortir selon clic droit ou gauche
};

const directionsButtons = [...document.querySelectorAll(".directionBtn")]; //on va chercher les buttons

directionsButtons.forEach((btn) => btn.addEventListener("click", handleClick)); // on va aller écouter les clicc sur les boutons

function handleClick(e) {
  getDirection(e.target); // on veut executer la fonction getDirection avec le bouton sur lequel on a cliqué
  updateSlides(); // on execute la fonction qui fait glisser les slides en fonction des boutons cliqués
}

function getDirection(btn) {
  // prend en parametre le e.target donc le bouton sur lequel on a cliqué
  sliderData.direction = btn.classList.contains("right") ? 1 : -1;
  // est-ce que j'ai cliqué sur le btn droit ? si oui je met 1 sinon -1
  sliderData.slideOutIndex = slides.findIndex(
    (slide) => slide.classList.contains("active") // c'est la classe qui est active en ce moment
  );

  if (sliderData.slideOutIndex + sliderData.direction > slides.length - 1) {
    // si je suis arrivé à la fin du tableau je reviens au début

    sliderData.slideInIndex = 0;
  } else if (sliderData.slideOutIndex + sliderData.direction < 0) {
    sliderData.slideInIndex = slides.length - 1;
  } else {
    sliderData.slideInIndex = sliderData.slideOutIndex + sliderData.direction;
  }
}

function updateSlides() {
  slides.forEach((slide, index) => {
    if (index === sliderData.slideOutIndex) {
      slide.classList.remove("active");
    } else if (index === sliderData.slideInIndex) {
      slide.classList.add("active");
    }
  });
}

// *********************************************************************************************************************

// Dans la fonction getDirection, nous utilisons maintenant classList.contains() au lieu de className.includes()
// pour vérifier si le bouton a la classe "right". C'est plus précis et évite tout problème qui pourrait survenir
//si d'autres classes contiennent "right" en tant que sous-chaîne.

// Ajout d'une nouvelle fonction appelée updateSlides pour mettre à jour la diapositive active en fonction
//des données contenues dans sliderData. Cette fonction supprimera la classe "active" de la diapositive active
//actuelle et l'ajoutera à la nouvelle diapositive active.

// Dans la fonction handleClick, nous avons ajouté un appel à updateSlides après avoir appelé getDirection.
// Cela permettra d'appliquer les changements au slider après avoir obtenu la direction.

// Avec ces corrections, votre slider devrait maintenant fonctionner correctement. Lorsque vous cliquez sur
//le bouton gauche ou droit, il affichera respectivement la diapositive précédente ou suivante.

// *********************************************************************************************************************

document
  .getElementById("satisfactionForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = {};

    formData.forEach((value, key) => {
      data[key] = value;
    });

    // Vous pouvez maintenant envoyer les données à votre serveur ou les traiter ici
    console.log(data);
  });
