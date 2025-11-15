
document.addEventListener('DOMContentLoaded', () => {

  const cards = document.querySelectorAll('.cri_person');
  const introDisplay = document.getElementById('intro_display');

  function getIntroText(card) {
    const introElement = card.querySelector("div[class^='intro_txt']");
    return introElement ? introElement.innerHTML : '';
  }

  cards.forEach(card => {
    card.addEventListener('click', () => {
      cards.forEach(c => c.classList.remove('active'));

      card.classList.add('active');

      introDisplay.innerHTML = getIntroText(card);
    });
  });
  if (cards.length > 0) {
    cards[0].click();
  }
});//cri_person


$(function () {
    $('.menu_js').mouseover(function () {
        $('.inner_menu_wrap').stop().slideDown(300)
    });
    $('.menu_js').mouseout(function () {
        $('.inner_menu_wrap').stop().slideUp(300);
    });
})//visual_benner_fulldown


