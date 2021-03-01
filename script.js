

// Fonctionnalité 1
const footerLe = document.getElementsByTagName('footer')[0];

const footOnClick = function(){
  console.log('clique');
};
footerLe.addEventListener("click", footOnClick);

// Fonctionnalité 1-Bis

const footerBis = document.querySelector('footer');
let x = 1;
const countClick = function(){
  console.log("clic numéro" + x);
  x ++;
};
footerBis.addEventListener("click", countClick);

// Fonctionnalité 2
const navbarHeader = document.getElementById('navbarHeader');
const toggleOn = function() {
  navbarHeader.classList.toggle("collapse");
}
const burgerMenu = document.querySelector('button');
burgerMenu.addEventListener("click", toggleOn);


// Fonctionnalité 3

const firstCard = document.getElementsByClassName("col-md-4")[0];
const editFirstCard = firstCard.getElementsByClassName("btn btn-sm btn-outline-secondary")[0];

const changeColorEditCardOne =function(){
 firstCard.style.color = "red";
}
console.log(firstCard)
console.log(editFirstCard)

editFirstCard.addEventListener("click", changeColorEditCardOne)

// Fonctionnalité 4

const secondCard = document.getElementsByClassName("col-md-4")[1];
const editSecondCard = secondCard.getElementsByClassName("btn btn-sm btn-outline-secondary")[0];
let buttonStat = false;
const changeColorEditCardTwo =function(){
  secondCardText = document.getElementsByClassName("col-md-4")[1];
  if (buttonStat){
    buttonStat = false;
   secondCard.style.color = '';
  }
  else {
    buttonStat = true;
  secondCard.style.color = "green";
  };
  
};

editSecondCard.addEventListener("click", changeColorEditCardTwo);


// Fonctionnalité #5:
// Fetch the 'link' element
// Feature #5:
// Fetch the 'link' element
const cdnBootstrap = document.getElementsByTagName('link')[0];

// Define clickable zone
const doubleClicNavbar = document.querySelector('header');

// Target the parent element where child will be modified
const headTag = document.querySelector('head');
let headStat = false;

const modifyCDN = () => {
  if (headStat == false) {
    cdnBootstrap.parentNode.removeChild(cdnBootstrap);
    headStat = true;
  } else if (headStat == true) {
    headTag.appendChild(cdnBootstrap);
    headStat = false;
  }
};
doubleClicNavbar.addEventListener('dblclick', modifyCDN);


// #6:

let mincard = document.getElementsByClassName("btn btn-sm btn-success");


for (let i = 0; i < mincard.length; i++){
  mincard[i].addEventListener("mouseover" , function(){
    document.getElementsByClassName("card-text")[i].classList.toggle("d-none");
    document.getElementsByClassName("card-img-top")[i].classList.toggle("w-25");

  });
};
