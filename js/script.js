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
      elP.textContent = elName.value + ': Sizni pulingiz yetdi';
    } else {
      elP.textContent = `Sizni puliz yetmadi hullas`;
    }
  }
});



var busTicket = document.querySelector(".bus-ticket");
var busInput = document.querySelector(".input");

var elBusP = document.querySelector(".xabar2");

busTicket.addEventListener("submit", function(evt) {
  evt.preventDefault();

  if (isNaN(Number(busInput.value))) {
    elBusP.textContent = "iltimos son kiriting";
    return;
  } else {
    if (busInput.value > 120) {
      elBusP.textContent = "Iltimos haqiqiy yoshingizni kiriting!";
      return;
     } else if (busInput.value >= 60) {
      elBusP.textContent = "sizga chipta tekin";
      return;
    } else if (busInput.value >= 20) {
      elBusP.textContent = "sizga chipta 2.000 so'm";
      return;
    } else if (busInput.value >= 7) {
      elBusP.textContent = "sizga chipta 1.400 so'm";
      return;
    } else if (busInput.value > 0) {
      elBusP.textContent = "sizga chipta tekin!";
      return;
    } else if (busInput.value == 0) {
      elBusP.textContent = "Iltimos yoshingizni kiriting!";
      return;
    };
  };
  }
);




