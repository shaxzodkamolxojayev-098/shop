// var monthly = prompt("necha oulingiz bor?").trim();
// var phone = 7000;

// if (monthly >= phone) {
//   alert("sotib olishingiz mumkin");
// }else {
//   alert("pulingiz yetmadi");
// };

var elForm = document.querySelector(".site-form");
var elName = elForm.querySelector(".site-input1".trim());
var elInput2 = elForm.querySelector(".site-input2");
var Travel_MONEY = 2000;

var elP = document.querySelector(".xabar");

elForm.addEventListener("submit", function(evt) {
  evt.preventDefault();

  if (isNaN(elInput2.value)) {
    elP.textContent = "iltimos son kiriting";

  }else {
    if (elInput2.value >= Travel_MONEY) {
      elP.textContent =  `Sizni pulingiz yetdi`;
    } else {
      elP.textContent = `Sizni puliz yetmadi hullas`;
    }
  }
});



var busTicket = document.querySelector(".bus-ticket");
var busInput = document.querySelector(".input").value.trim();

var elBusP = document.querySelector(".xabar2");

busTicket.addEventListener("submit", function(evt) {
  evt.preventDefault();

  if (isNaN(busInput.value)) {
    elBusP.textContent = "iltimos son kiriting";
  } else {
    if (busInput.value <= 7) {
      elBusP.textContent = `Sizga chipta tekin`;
    } else if (busInput.value <= 65) {
      elBusP.textContent = `Sizga chipta`;
    } else if (busInput.value < 18) {
      elBusP.textContent = `Siz koproq pul tolaysiz`;
    } else if (busInput.value > 7) {
      elBusP.textContent = `Sizga chipta pullik`;
    }
  }
});




