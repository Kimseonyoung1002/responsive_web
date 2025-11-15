$(function () {
    $('.menu').mouseover(function () {
        $('.inner_menu_wrap').stop().slideDown(300)
    });
    $('.menu').mouseout(function () {
        $('.inner_menu_wrap').stop().slideUp(300);
    });
});//full_down


document.addEventListener('DOMContentLoaded', () => {
  const gnbTop = document.querySelector('.gnb_top');
  const gnbMenuWrap = document.querySelector('.gnb_menu_wrap');
  const menuOuter = document.querySelector('.menu_outer');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
      gnbTop.classList.add('scrolled_top');
      gnbMenuWrap.classList.add('scrolled_bottom');
      menuOuter.classList.add('scrolled_bottom');
    } else {
      gnbTop.classList.remove('scrolled_top');
      gnbMenuWrap.classList.remove('scrolled_bottom');
      menuOuter.classList.remove('scrolled_bottom');
    }
  });
});//scroll_event



    const menuCheckbox = document.getElementById('menu_btn');

    menuCheckbox.addEventListener('change', function () {
        const loginWindow = document.querySelector('.login_window');

        if (menuCheckbox.checked) {
            loginWindow.style.right = '0';
            document.body.style.overflow = 'hidden';
        } else {
  
            loginWindow.style.right = '-250px';
            document.body.style.overflow = '';
        }
    });//login_window


