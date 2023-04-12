$(document).ready(function() {
    let modalDonateTo = document.getElementById("modalDonateTo");

    let block = `<div class="modal__content">
    <span id="modalClose" onclick="uewioruwe()" class="modal__close">×</span>
    <div class="modal__heading">На що ви б хотіли зробити внесок ?</div>
    <div class="modal__btnBlock">
      <button type="button" class="modal__btn">Лікарня в Бахмуті</button>
      <button type="button" class="modal__btn">Лікарня в Бахмуті</button>
      <button type="button" class="modal__btn">Лікарня в Бахмуті</button>
      <button type="button" class="modal__btn">Лікарня в Бахмуті</button>
      <button type="button" class="modal__btn">Лікарня в Бахмуті</button>
      <button id="modalDonateToNext" type="button" class="btn btn__primary">Далі</button>
    </div>
  </div>`;


 
    $('#donate').click(function() {
        console.log("Початок роботи модалки");
        modalDonateTo.innerHTML = block;
        $("#modalDonateTo").addClass("modal__bg");
        modalDonateTo.style.display = "flex";
    });
     
    window.onclick = function(event) {
        if (event.target == modalDonateTo) {
            modalDonateTo.style.display = "none";
            $("#modalDonateTo").removeClass("modal__bg");
        }
    }

    $('#modalClose').click(function() {
        
        console.log("*******");
        
      });
});

