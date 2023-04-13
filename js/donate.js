$(document).ready(function () {
  let modalDonateToHTML = `<div class="modal__content">
  <span id="modalClose"  class="modal__close">×</span>
  <div class="modal__heading">На що ви б хотіли зробити внесок ?</div>
  <div class="modal__btnBlock">
    <button type="button" class="modal__btn">Лікарня в Бахмуті</button>
    <button type="button" class="modal__btn">Лікарня в Бахмуті</button>
    <button type="button" class="modal__btn">Лікарня в Бахмуті</button>
    <button type="button" class="modal__btn">Лікарня в Бахмуті</button>
    <button type="button" class="modal__btn">Лікарня в Бахмуті</button>
    <button id="modalBtnNext" type="button" class="btn btn__primary">Далі</button>
  </div>
</div>`;
  let modalDonateCardHTML = `<div class="modal__content">
<span id="modalClose"  class="modal__close">×</span>
<div class="modal__btnBlock">
  <button type="button" class="modal__btn">Кредитна карта</button>
  <button type="button" class="modal__btn">Банківський переказ</button>
  <button type="button" class="modal__btn">PayPal</button>
  <button id="modalBtnNext" type="button" class="btn btn__primary">Далі</button>
</div>
</div>`;

let modalDonateCurencyHTML = `<div class="modal__content">
<span id="modalClose"  class="modal__close">×</span>
<div class="modal__heading">Виберіть валюту переказу</div>
<div class="modal__btnBlock">
  <button type="button" class="modal__btn">(UAH) UKRAINIAN HRYVNA</button>
  <button type="button" class="modal__btn">(USD) US DOLLAR</button>
  <button type="button" class="modal__btn">(EU) EURO</button>
  <button id="modalBtnNext" type="button" class="btn btn__primary modalDonateCurency">Далі</button>
</div>
</div>`;

let modalDonateCardInfoHTML = `<div class="modal__content">
<span id="modalClose"  class="modal__close">×</span>
<div class="modal__btnBlock">
  <button type="button" class="modal__btn">(UAH) UKRAINIrdgrege ergrege erg er</button>
  <button type="button" class="modal__btn">(USD) rdgrege ergrege erg er</button>
  <button type="button" class="modal__btn">rdgrege ergrege erg er</button>
  <button id="modalBtnNext" type="button" class="btn btn__primary modalDonateCurency">Далі</button>
</div>
</div>`;

  let buttonsDonate = document.querySelectorAll('.btn__donate');
  buttonsDonate.forEach((elem) => {
    elem.addEventListener('click', () => {
      modalDonateTo_Func();
    })
  })

  window.onclick = function (event) {
    if (event.target == modal) {
      modalClose();
    }
  }

  function modalClose() {
    $(".modal").removeClass("modal__bg");
    $(".modal").removeClass("modalDonateTo");
    $(".modal").removeClass("modalDonateCard");
    $(".modal").css({"display": "none"});
    $(".modal").html("");
    $("body").removeClass("lock");
    console.log("- modalDonateTo +  modalDonateCard - display = none");
  }

  function addButtonsClose() {
    let buttonsClose = document.querySelectorAll('.modal__close');
    buttonsClose.forEach((elem) => {
      elem.addEventListener('click', () => {
        modalClose();
      })
    })
  }

  function showModalBg(){
    $("#modal").addClass("modal__bg");
    $("body").addClass("lock");
  }

  function modalDonateTo_Func() {
    $(".modal").addClass("modalDonateTo");
    let modalDonateTo = document.getElementById("modal");
    modalDonateTo.innerHTML = modalDonateToHTML;

    showModalBg()
    modalDonateTo.style.display = "flex";

    $('#modalBtnNext').click(function () {
      modalDonateCard_Func();
    });

    addButtonsClose();
  }

  function modalDonateCard_Func() {
    modalClose();
    showModalBg();
    let modalDonateCard = document.getElementById("modal");
    modalDonateCard.innerHTML = modalDonateCardHTML;
    modalDonateCard.style.display = "flex";

    $('#modalBtnNext').click(function () {
      modalDonateCurency_Func();
    });

    addButtonsClose();
    console.log("modalDonateCard_Func");
  }

  function modalDonateCurency_Func() {
    modalClose();
    showModalBg();
    let modalDonateCurency = document.getElementById("modal");
    modalDonateCurency.innerHTML = modalDonateCurencyHTML;
    modalDonateCurency.style.display = "flex";

    $('#modalBtnNext').click(function () {
      modalDonateCardInfo_Func();
    });

    console.log("modalDonateCurency_Func");
    addButtonsClose();
  }

  function modalDonateCardInfo_Func(){
    modalClose();
    showModalBg();
    let modalDonateCardInfo = document.getElementById("modal");
    modalDonateCardInfo.innerHTML = modalDonateCardInfoHTML;
    modalDonateCardInfo.style.display = "flex";

    console.log("modalDonateCardInfo_Func");
    addButtonsClose();
  }

});

