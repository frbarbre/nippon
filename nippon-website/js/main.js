var navMenu = document.querySelector(".nav-menu");
var header = document.querySelector(".header-wrapper");

function navOpener() {
  navMenu.classList.toggle("nav-active");
  header.classList.toggle("header-main-shadow");
}

var btn = document.getElementById("btn");

function navAnimator() {
  if (btn.classList.contains("active")) {
    btn.classList.remove("active");
    btn.classList.add("not-active");
  } else {
    btn.classList.add("active");
    btn.classList.remove("not-active");
  }
}

var btmHeader = document.querySelector(".bottom-header");
var reciptContent = document.querySelector(".recipt-content-wrapper");

function filterRecipt() {
  btmHeader.classList.toggle("btm-active");
  reciptContent.classList.toggle("recipt-active");
  btmHeader.classList.add("bottom-header-animator");
}

var logo = document.querySelector(".main-logo");

window.onscroll = function () {
  scrollFunction();
};

const viewPoint = 1;

function scrollFunction() {
  if (
    document.body.scrollTop > viewPoint ||
    document.documentElement.scrollTop > viewPoint
  ) {
    logo.classList.add("scroll-active");
  } else {
    logo.classList.remove("scroll-active");
  }
}

// Fade Animations
const faders = document.querySelectorAll(".fade-in");
const sliders = document.querySelectorAll(".slide-in");
const appearOptions = {
  threshold: 0,
  rootMargin: "0px 0px 0px 0px",
};
const appearOnScroll = new IntersectionObserver(function (
  entries,
  appearOnScroll
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      appearOnScroll.unobserve(entry.target);
    }
  });
},
appearOptions);

faders.forEach((fader) => {
  appearOnScroll.observe(fader);
});

sliders.forEach((slider) => {
  appearOnScroll.observe(slider);
});

// Get and set header

var alertContainer = document.querySelector(".alert-message-wrapper"); 

function alertTrigger() {
  alertContainer.classList.add("alert-animator");
  
  var delayInMilliseconds = 5000; //1 second

    setTimeout(function() {
      alertContainer.classList.remove("alert-animator");
    }, delayInMilliseconds);
}

function regDinnerAmount() {
  let dinnerAmount = document.getElementById("dinner-input").value;
  sessionStorage.setItem("dinner-amount", dinnerAmount);
}

function regPersonAmount() {
  let personAmount = document.getElementById("person-input").value;
  sessionStorage.setItem("person-amount", personAmount);
}

var dinnerAmount = parseFloat(sessionStorage.getItem("dinner-amount"));
var personAmount = parseFloat(sessionStorage.getItem("person-amount"));

var mealTotalCount = 0;

var dinnerPrice = 40;
var shippingPrice = 30;

var mealMaxCount = parseFloat(sessionStorage.getItem("dinner-amount"));

var individualMealCount = dinnerPrice * personAmount;

let filterPriceTag = document.querySelectorAll(".filter-price-tag");

for (let i = 0; i < filterPriceTag.length; i++) {
  filterPriceTag[i].innerHTML = "<strong>" + individualMealCount + " kr.</strong>";
}

let filterPerson = document.querySelectorAll(".filter-person"); 

for (let i = 0; i < filterPerson.length; i++) {
  filterPerson[i].innerHTML = "(" + personAmount + " pers.)";
}

var alertText = document.querySelector(".alert-text");

var iconHolder = document.getElementById("icon-holder");

var addBtn1 = document.querySelector(".recipe-btn-1");

function addDish1() {
  var ramenItem = document.querySelector(".ramenItem");

  if (addBtn1.classList.contains("remove-btn") && mealMaxCount > 0) {
    addBtn1.classList.remove("remove-btn");
    mealMaxCount = mealMaxCount + 1;
    mealTotalCount = mealTotalCount - 1;
    console.log(mealMaxCount + " if");
    console.log(mealTotalCount + " if");
    ramenItem.setAttribute("hidden", "");
  } else if (mealMaxCount == 0 && addBtn1.classList.contains("remove-btn")) {
    addBtn1.classList.remove("remove-btn");
    mealMaxCount = mealMaxCount + 1;
    mealTotalCount = mealTotalCount - 1;
    console.log(mealMaxCount + " if else 1");
    console.log(mealTotalCount + " if else 1");
    ramenItem.setAttribute("hidden", "");
  } else if (mealMaxCount == 0) {
    addBtn1.classList.remove("remove-btn");
    mealMaxCount = mealMaxCount;
    console.log(mealMaxCount + " else if 2");
    alertText.innerHTML = "Vælg kun <strong>" + dinnerAmount + "</strong> måltider";
    iconHolder.classList.add("remove-icon");
    iconHolder.classList.remove("checkmark-icon");
    alertTrigger();
    
    ramenItem.setAttribute("hidden", "");
  } else {
    addBtn1.classList.add("remove-btn");
    mealMaxCount = mealMaxCount - 1;
    mealTotalCount = mealTotalCount + 1;
    console.log(mealMaxCount + " else");
    console.log(mealTotalCount + " else");
    ramenItem.removeAttribute("hidden");
  }
}

var addBtn2 = document.querySelector(".recipe-btn-2");

function addDish2() {
  var sushiItem = document.querySelector(".sushiItem");

  if (addBtn2.classList.contains("remove-btn") && mealMaxCount > 0) {
    addBtn2.classList.remove("remove-btn");
    mealMaxCount = mealMaxCount + 1;
    mealTotalCount = mealTotalCount - 1;
    console.log(mealMaxCount + " if");
    console.log(mealTotalCount + " if");
    sushiItem.setAttribute("hidden", "");
  } else if (mealMaxCount == 0 && addBtn2.classList.contains("remove-btn")) {
    addBtn2.classList.remove("remove-btn");
    mealMaxCount = mealMaxCount + 1;
    mealTotalCount = mealTotalCount - 1;
    console.log(mealMaxCount + " if else 1");
    console.log(mealTotalCount + " if else 1");
    sushiItem.setAttribute("hidden", "");
  } else if (mealMaxCount == 0) {
    addBtn2.classList.remove("remove-btn");
    mealMaxCount = mealMaxCount;
    console.log(mealMaxCount + " else if");
    alertText.innerHTML = "Vælg kun <strong>" + dinnerAmount + "</strong> måltider";
    iconHolder.classList.add("remove-icon");
    iconHolder.classList.remove("checkmark-icon");
    alertTrigger();
    
    sushiItem.setAttribute("hidden", "");
  } else {
    addBtn2.classList.add("remove-btn");
    mealMaxCount = mealMaxCount - 1;
    mealTotalCount = mealTotalCount + 1;
    console.log(mealMaxCount + " else");
    console.log(mealTotalCount + " else");
    sushiItem.removeAttribute("hidden");
  }
}

var addBtn3 = document.querySelector(".recipe-btn-3");

function addDish3() {
  var udonItem = document.querySelector(".udonItem");

  if (addBtn3.classList.contains("remove-btn") && mealMaxCount > 0) {
    addBtn3.classList.remove("remove-btn");
    mealMaxCount = mealMaxCount + 1;
    mealTotalCount = mealTotalCount - 1;
    console.log(mealMaxCount + " if");
    console.log(mealTotalCount + " if");
    udonItem.setAttribute("hidden", "");
  } else if (mealMaxCount == 0 && addBtn3.classList.contains("remove-btn")) {
    addBtn3.classList.remove("remove-btn");
    mealMaxCount = mealMaxCount + 1;
    mealTotalCount = mealTotalCount - 1;
    console.log(mealMaxCount + " if else 1");
    console.log(mealTotalCount + " if else 1");
    udonItem.setAttribute("hidden", "");
  } else if (mealMaxCount == 0) {
    addBtn3.classList.remove("remove-btn");
    mealMaxCount = mealMaxCount;
    console.log(mealMaxCount + " else if");
    alertText.innerHTML = "Vælg kun <strong>" + dinnerAmount + "</strong> måltider";
    iconHolder.classList.add("remove-icon");
    iconHolder.classList.remove("checkmark-icon");
    alertTrigger();
    
    udonItem.setAttribute("hidden", "");
  } else {
    addBtn3.classList.add("remove-btn");
    mealMaxCount = mealMaxCount - 1;
    mealTotalCount = mealTotalCount + 1;
    console.log(mealMaxCount + " else");
    console.log(mealTotalCount + " else");
    udonItem.removeAttribute("hidden");
  }
}

var addBtn4 = document.querySelector(".recipe-btn-4");

function addDish4() {
  var pumpkinItem = document.querySelector(".pumpkinItem");

  if (addBtn4.classList.contains("remove-btn") && mealMaxCount > 0) {
    addBtn4.classList.remove("remove-btn");
    mealMaxCount = mealMaxCount + 1;
    mealTotalCount = mealTotalCount - 1;
    console.log(mealMaxCount + " if");
    console.log(mealTotalCount + " if");
    pumpkinItem.setAttribute("hidden", "");
  } else if (mealMaxCount == 0 && addBtn4.classList.contains("remove-btn")) {
    addBtn4.classList.remove("remove-btn");
    mealMaxCount = mealMaxCount + 1;
    mealTotalCount = mealTotalCount - 1;
    console.log(mealMaxCount + " if else 1");
    console.log(mealTotalCount + " if else 1");
    pumpkinItem.setAttribute("hidden", "");
  } else if (mealMaxCount == 0) {
    addBtn4.classList.remove("remove-btn");
    mealMaxCount = mealMaxCount;
    console.log(mealMaxCount + " else if");
    alertText.innerHTML = "Vælg kun <strong>" + dinnerAmount + "</strong> måltider";
    iconHolder.classList.add("remove-icon");
    iconHolder.classList.remove("checkmark-icon");
    alertTrigger();
    
    pumpkinItem.setAttribute("hidden", "");
  } else {
    addBtn4.classList.add("remove-btn");
    mealMaxCount = mealMaxCount - 1;
    mealTotalCount = mealTotalCount + 1;
    console.log(mealMaxCount + " else");
    console.log(mealTotalCount + " else");
    pumpkinItem.removeAttribute("hidden");
  }
}

var addBtn5 = document.querySelector(".recipe-btn-5");

function addDish5() {
  var gyozaItem = document.querySelector(".gyozaItem");

  if (addBtn5.classList.contains("remove-btn") && mealMaxCount > 0) {
    addBtn5.classList.remove("remove-btn");
    mealMaxCount = mealMaxCount + 1;
    mealTotalCount = mealTotalCount - 1;
    console.log(mealMaxCount + " if");
    console.log(mealTotalCount + " if");
    gyozaItem.setAttribute("hidden", "");
  } else if (mealMaxCount == 0 && addBtn5.classList.contains("remove-btn")) {
    addBtn5.classList.remove("remove-btn");
    mealMaxCount = mealMaxCount + 1;
    mealTotalCount = mealTotalCount - 1;
    console.log(mealMaxCount + " if else 1");
    console.log(mealTotalCount + " if else 1");
    gyozaItem.setAttribute("hidden", "");
  } else if (mealMaxCount == 0) {
    addBtn5.classList.remove("remove-btn");
    mealMaxCount = mealMaxCount;
    console.log(mealMaxCount + " else if");
    alertText.innerHTML = "Vælg kun <strong>" + dinnerAmount + "</strong> måltider";
    iconHolder.classList.add("remove-icon");
    iconHolder.classList.remove("checkmark-icon");
    alertTrigger();
    
    gyozaItem.setAttribute("hidden", "");
  } else {
    addBtn5.classList.add("remove-btn");
    mealMaxCount = mealMaxCount - 1;
    mealTotalCount = mealTotalCount + 1;
    console.log(mealMaxCount + " else");
    console.log(mealTotalCount + " else");
    gyozaItem.removeAttribute("hidden");
  }
}

var addBtn6 = document.querySelector(".recipe-btn-6");

function addDish6() {
  var ponzuItem = document.querySelector(".ponzuItem");

  if (addBtn6.classList.contains("remove-btn") && mealMaxCount > 0) {
    addBtn6.classList.remove("remove-btn");
    mealMaxCount = mealMaxCount + 1;
    mealTotalCount = mealTotalCount - 1;
    console.log(mealMaxCount + " if");
    console.log(mealTotalCount + " if");
    ponzuItem.setAttribute("hidden", "");
  } else if (mealMaxCount == 0 && addBtn6.classList.contains("remove-btn")) {
    addBtn6.classList.remove("remove-btn");
    mealMaxCount = mealMaxCount + 1;
    mealTotalCount = mealTotalCount - 1;
    console.log(mealMaxCount + " if else 1");
    console.log(mealTotalCount + " if else 1");
    ponzuItem.setAttribute("hidden", "");
  } else if (mealMaxCount == 0) {
    addBtn6.classList.remove("remove-btn");
    mealMaxCount = mealMaxCount;
    console.log(mealMaxCount + " else if");
    alertText.innerHTML = "Vælg kun <strong>" + dinnerAmount + "</strong> måltider";
    iconHolder.classList.add("remove-icon");
    iconHolder.classList.remove("checkmark-icon");
    alertTrigger();
    
    ponzuItem.setAttribute("hidden", "");
  } else {
    addBtn6.classList.add("remove-btn");
    mealMaxCount = mealMaxCount - 1;
    mealTotalCount = mealTotalCount + 1;
    console.log(mealMaxCount + " else");
    console.log(mealTotalCount + " else");
    ponzuItem.removeAttribute("hidden");
  }
}

var addBtn7 = document.querySelector(".recipe-btn-7");

function addDish7() {
  var tonkatsuItem = document.querySelector(".tonkatsuItem");

  if (addBtn7.classList.contains("remove-btn") && mealMaxCount > 0) {
    addBtn7.classList.remove("remove-btn");
    mealMaxCount = mealMaxCount + 1;
    mealTotalCount = mealTotalCount - 1;
    console.log(mealMaxCount + " if");
    console.log(mealTotalCount + " if");
    tonkatsuItem.setAttribute("hidden", "");
  } else if (mealMaxCount == 0 && addBtn7.classList.contains("remove-btn")) {
    addBtn7.classList.remove("remove-btn");
    mealMaxCount = mealMaxCount + 1;
    mealTotalCount = mealTotalCount - 1;
    console.log(mealMaxCount + " if else 1");
    console.log(mealTotalCount + " if else 1");
    tonkatsuItem.setAttribute("hidden", "");
  } else if (mealMaxCount == 0) {
    addBtn7.classList.remove("remove-btn");
    mealMaxCount = mealMaxCount;
    console.log(mealMaxCount + " else if");
    alertText.innerHTML = "Vælg kun <strong>" + dinnerAmount + "</strong> måltider";
    iconHolder.classList.add("remove-icon");
    iconHolder.classList.remove("checkmark-icon");
    alertTrigger();
    
    tonkatsuItem.setAttribute("hidden", "");
  } else {
    addBtn7.classList.add("remove-btn");
    mealMaxCount = mealMaxCount - 1;
    mealTotalCount = mealTotalCount + 1;
    console.log(mealMaxCount + " else");
    console.log(mealTotalCount + " else");
    tonkatsuItem.removeAttribute("hidden");
  }
}

var addBtn8 = document.querySelector(".recipe-btn-8");

function addDish8() {
  var yakitoriItem = document.querySelector(".yakitoriItem")

  if (addBtn8.classList.contains("remove-btn") && mealMaxCount > 0) {
    addBtn8.classList.remove("remove-btn");
    mealMaxCount = mealMaxCount + 1;
    mealTotalCount = mealTotalCount - 1;
    console.log(mealMaxCount + " if");
    console.log(mealTotalCount + " if");
    yakitoriItem.setAttribute("hidden", '')
  } else if (mealMaxCount == 0 && addBtn8.classList.contains("remove-btn")) {
    addBtn8.classList.remove("remove-btn");
    mealMaxCount = mealMaxCount + 1;
    mealTotalCount = mealTotalCount - 1;
    console.log(mealMaxCount + " if else 1");
    console.log(mealTotalCount + " if else 1");
    yakitoriItem.setAttribute("hidden", '')
  } else if (mealMaxCount == 0) {
    addBtn8.classList.remove("remove-btn");
    mealMaxCount = mealMaxCount;
    console.log(mealMaxCount + " else if");
    alertText.innerHTML = "Vælg kun <strong>" + dinnerAmount + "</strong> måltider";
    iconHolder.classList.add("remove-icon");
    iconHolder.classList.remove("checkmark-icon");
    alertTrigger();
    
    yakitoriItem.setAttribute("hidden", '')
  } else {
    addBtn8.classList.add("remove-btn");
    mealMaxCount = mealMaxCount - 1;
    mealTotalCount = mealTotalCount + 1;
    console.log(mealMaxCount + " else");
    console.log(mealTotalCount + " else");
    yakitoriItem.removeAttribute("hidden")
  }
}

var addBtn9 = document.querySelector(".recipe-btn-9");

function addDish9() {
  var tempuraitem = document.querySelector(".tempuraItem"); 

  if (addBtn9.classList.contains("remove-btn") && mealMaxCount > 0) {
    addBtn9.classList.remove("remove-btn");
    mealMaxCount = mealMaxCount + 1;
    mealTotalCount = mealTotalCount - 1;
    console.log(mealMaxCount + " if");
    console.log(mealTotalCount + " if");
    tempuraitem.setAttribute("hidden", '')
  } else if (mealMaxCount == 0 && addBtn9.classList.contains("remove-btn")) {
    addBtn9.classList.remove("remove-btn");
    mealMaxCount = mealMaxCount + 1;
    mealTotalCount = mealTotalCount - 1;
    console.log(mealMaxCount + " if else 1");
    console.log(mealTotalCount + " if else 1");
    tempuraitem.setAttribute("hidden", '')
  } else if (mealMaxCount == 0) {
    addBtn9.classList.remove("remove-btn");
    mealMaxCount = mealMaxCount;
    console.log(mealMaxCount + " else if");
    alertText.innerHTML = "Vælg kun <strong>" + dinnerAmount + "</strong> måltider";
    iconHolder.classList.add("remove-icon");
    iconHolder.classList.remove("checkmark-icon");
    alertTrigger();
    
    tempuraitem.setAttribute("hidden", '')
  } else {
    addBtn9.classList.add("remove-btn");
    mealMaxCount = mealMaxCount - 1;
    mealTotalCount = mealTotalCount + 1;
    console.log(mealMaxCount + " else");
    console.log(mealTotalCount + " else");
    tempuraitem.removeAttribute("hidden")
  }
}

var addBtn10 = document.querySelector(".recipe-btn-10");

function addDish10() {
  var okonomiyakiItem = document.querySelector(".okonomiyakiItem");

  if (addBtn10.classList.contains("remove-btn") && mealMaxCount > 0) {
    addBtn10.classList.remove("remove-btn");
    mealMaxCount = mealMaxCount + 1;
    mealTotalCount = mealTotalCount - 1;
    console.log(mealMaxCount + " if");
    console.log(mealTotalCount + " if");
    okonomiyakiItem.setAttribute("hidden", '')
  } else if (mealMaxCount == 0 && addBtn10.classList.contains("remove-btn")) {
    addBtn10.classList.remove("remove-btn");
    mealMaxCount = mealMaxCount + 1;
    mealTotalCount = mealTotalCount - 1;
    console.log(mealMaxCount + " if else 1");
    console.log(mealTotalCount + " if else 1");
    okonomiyakiItem.setAttribute("hidden", '')
  } else if (mealMaxCount == 0) {
    addBtn10.classList.remove("remove-btn");
    mealMaxCount = mealMaxCount;
    console.log(mealMaxCount + " else if");
    alertText.innerHTML = "Vælg kun <strong>" + dinnerAmount + "</strong> måltider";
    iconHolder.classList.add("remove-icon");
    iconHolder.classList.remove("checkmark-icon");
    alertTrigger();
    
    okonomiyakiItem.setAttribute("hidden", '')
  } else {
    addBtn10.classList.add("remove-btn");
    mealMaxCount = mealMaxCount - 1;
    mealTotalCount = mealTotalCount + 1;
    console.log(mealMaxCount + " else");
    console.log(mealTotalCount + " else");
    okonomiyakiItem.removeAttribute("hidden")
  }
}

var addBtn11 = document.querySelector(".recipe-btn-11");

function addDish11() {
  var yakisobaItem = document.querySelector(".yakisobaItem")

  if (addBtn11.classList.contains("remove-btn") && mealMaxCount > 0) {
    addBtn11.classList.remove("remove-btn");
    mealMaxCount = mealMaxCount + 1;
    mealTotalCount = mealTotalCount - 1;
    console.log(mealMaxCount + " if");
    console.log(mealTotalCount + " if");
    yakisobaItem.setAttribute("hidden", '');
  } else if (mealMaxCount == 0 && addBtn11.classList.contains("remove-btn")) {
    addBtn11.classList.remove("remove-btn");
    mealMaxCount = mealMaxCount + 1;
    mealTotalCount = mealTotalCount - 1;
    console.log(mealMaxCount + " if else 1");
    console.log(mealTotalCount + " if else 1");
    yakisobaItem.setAttribute("hidden", '');
  } else if (mealMaxCount == 0) {
    addBtn11.classList.remove("remove-btn");
    mealMaxCount = mealMaxCount;
    console.log(mealMaxCount + " else if");
    alertText.innerHTML = "Vælg kun <strong>" + dinnerAmount + "</strong> måltider";
    iconHolder.classList.add("remove-icon");
    iconHolder.classList.remove("checkmark-icon");
    alertTrigger();
    
    yakisobaItem.setAttribute("hidden", '');
  } else {
    addBtn11.classList.add("remove-btn");
    mealMaxCount = mealMaxCount - 1;
    mealTotalCount = mealTotalCount + 1;
    console.log(mealMaxCount + " else");
    console.log(mealTotalCount + " else");
    yakisobaItem.removeAttribute("hidden");
  }
}

var addBtn12 = document.querySelector(".recipe-btn-12");

function addDish12() {
  var tamagoyakiItem = document.querySelector(".tamagoyakiItem");

  if (addBtn12.classList.contains("remove-btn") && mealMaxCount > 0) {
    addBtn12.classList.remove("remove-btn");
    mealMaxCount = mealMaxCount + 1;
    mealTotalCount = mealTotalCount - 1;
    console.log(mealMaxCount + " if");
    console.log(mealTotalCount + " if");
    tamagoyakiItem.setAttribute("hidden", '');
  } else if (mealMaxCount == 0 && addBtn12.classList.contains("remove-btn")) {
    addBtn12.classList.remove("remove-btn");
    mealMaxCount = mealMaxCount + 1;
    mealTotalCount = mealTotalCount - 1;
    console.log(mealMaxCount + " if else 1");
    console.log(mealTotalCount + " if else 1");
    tamagoyakiItem.setAttribute("hidden", '');
  } else if (mealMaxCount == 0) {
    addBtn12.classList.remove("remove-btn");
    mealMaxCount = mealMaxCount;
    console.log(mealMaxCount + " else if");
    alertText.innerHTML = "Vælg kun <strong>" + dinnerAmount + "</strong> måltider";
    iconHolder.classList.add("remove-icon");
    iconHolder.classList.remove("checkmark-icon");
    alertTrigger();
    
    tamagoyakiItem.setAttribute("hidden", '');
  } else {
    addBtn12.classList.add("remove-btn");
    mealMaxCount = mealMaxCount - 1;
    mealTotalCount = mealTotalCount + 1;
    console.log(mealMaxCount + " else");
    console.log(mealTotalCount + " else");
    tamagoyakiItem.removeAttribute("hidden");
  }
}

function loginBtn() {
  window.location.href = "login-standalone.html";
}

function stillInAlpha() {
    alertText.innerHTML = "OBS: Søg er stadig i Alpha";
    iconHolder.classList.add("remove-icon");
    iconHolder.classList.remove("checkmark-icon");
    alertTrigger();
    
}

function filterPriceLoad() {
  let dinnerHeading = document.getElementById("filter-heading");
  let filterPrice = document.getElementById("filter-price");

  var dinnerTotalAmount = dinnerPrice * mealTotalCount * personAmount;

  filterPrice.innerHTML = dinnerTotalAmount + " kr.";
  dinnerHeading.innerHTML =
    "Vælg <strong>" + dinnerAmount + "</strong> måltider";
}

function subtotalPriceLoad() {
  let subtotalPrice = document.getElementById("subtotal-price");
  let subtotalPerson = document.getElementById("subtotal-person");
  let subtotalDinner = document.getElementById("subtotal-dinner");

  var dinnerTotalAmountShipping =
    dinnerPrice * dinnerAmount * personAmount + shippingPrice;

  subtotalPerson.innerHTML = "Måltider (" + personAmount + " pers.)";
  subtotalDinner.innerHTML =
    dinnerAmount + "x " + personAmount * dinnerPrice + " kr.";
  subtotalPrice.innerHTML = dinnerTotalAmountShipping + " kr.";
}

function filterReciptSaver() {
  var dinnerTotalAmountShipping = dinnerPrice * dinnerAmount * personAmount + shippingPrice;
  var filterSum = document.querySelector(".filter-sum");
  filterSum.innerHTML = dinnerTotalAmountShipping + ' kr. ';
}


function filterAmountCheck() {
  if (mealMaxCount == 0) {
    var shippingItem = document.querySelector(".shippingItem")
    shippingItem.removeAttribute("hidden");
    var totalItem = document.querySelector(".totalItem")
    totalItem.removeAttribute("hidden");
    let reciptSave = document.getElementById("recipt").innerHTML;
    sessionStorage.setItem("recipt", reciptSave);
    window.location.href = "subtotal.html";
  } 
  else if (mealMaxCount == 1) {
    alertText.innerHTML = "Vælg <strong>" + mealMaxCount + "</strong> måltid mere";
    iconHolder.classList.add("remove-icon");
    iconHolder.classList.remove("checkmark-icon");
    alertTrigger();
  }
  else {
    alertText.innerHTML = "Vælg <strong>" + mealMaxCount + "</strong> måltider mere";
    iconHolder.classList.add("remove-icon");
    iconHolder.classList.remove("checkmark-icon");
    alertTrigger();
  }
}

function reciptLoader() {
  var reciptHolder = document.querySelector(".recipt-holder");

  var recipt = sessionStorage.getItem("recipt");

  reciptHolder.innerHTML = recipt;
}

