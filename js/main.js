$(function () {
  $(".menu_js").mouseover(function () {
    $(".inner_menu_wrap").stop().slideDown(300);
  });
  $(".menu_js").mouseout(function () {
    $(".inner_menu_wrap").stop().slideUp(300);
  });
}); //visual_benner_fulldown

const visualBannerSwiper = new Swiper(".swiper.visual_banner", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 0,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    769: {
      slidesPerView: 1,
    },
    601: {
      slidesPerView: 1,
    },
    320: {
      slidesPerView: 1,
    },
  },
}); //visual_banner

const posterSwiper = new Swiper(".poster_swiper", {
  slidesPerView: 1.2,
  spaceBetween: 10,
  breakpoints: {
    481: {
      slidesPerView: 2.2,
    },
    769: {
      slidesPerView: 3.2,
    },
  },
});//poster

const upcomingSwiper = new Swiper(".poster_swiper.upcoming", {
  slidesPerView: 1.2,
  spaceBetween: 10,
  breakpoints: {
    481: { slidesPerView: 2.2 },
    769: { slidesPerView: 3.2 },
  },
});//upcoming_poster

const eventSwiper = new Swiper(".event_mb_swiper", {
  slidesPerView: 1.2,
  centeredSlides: true,
  spaceBetween: 5,
  loop: true,
  breakpoints: {
    768: {
      slidesPerView: 1.5,
      spaceBetween: 20,
    },
  },
});//event_mb

document.addEventListener("DOMContentLoaded", function () {
  const reviewBtn = document.querySelector(".review_btn");
  const hideReviews = document.querySelectorAll(".hide_review");
  let state = false;

  reviewBtn.addEventListener("click", function () {
    if (!state) {
      hideReviews.forEach((review) => (review.style.display = "flex"));
      state = true;
    } else {
      hideReviews.forEach((review) => (review.style.display = "none"));
      state = false;
    }
  });
});//후기 더 보기


// document.addEventListener("DOMContentLoaded", function () {
//   const tbBannerSwiper = new Swiper(".banner_box_tb.swiper", {
//     slidesPerView: 1,
//     spaceBetween: 20,
//     breakpoints: {
//       481: {
//         slidesPerView: 3.2,
//       },
//       482: {
//         slidesPerView: 2.2,
//       },
//     },
//   });
// }); 
//card_banner


$(function () {
  $(window).scroll(() => {
    if ($(window).scrollTop() >= 200) {
      $(".fix_btn").fadeIn(500);
    } else {
      $(".fix_btn").fadeOut(500);
    }
  });
  $(".top_btn").click((e) => {
    e.preventDefault();
    $(window).scrollTo({ top: 0, left: 0 }, 600);
  });
}); //jquery_btn_top

const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".table_wrap");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const targetId = tab.getAttribute("data-target");
    tabs.forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");
    contents.forEach((content) => {
      content.style.display = "none";
    });
    document.getElementById(targetId).style.display = "block";
  });
}); //schedule

const calendarDates = document.querySelectorAll(".calendar .date");
const displayDate = document.querySelector(".date_box div:nth-child(2)");
const year = 2025;
const month = 6;
const days = ["일", "월", "화", "수", "목", "금", "토"];
const defaultDate = 14;

function selectDate(dateNumber) {
  calendarDates.forEach((dateEl) => {
    dateEl.classList.remove("selected");

    if (parseInt(dateEl.textContent) === dateNumber) {
      dateEl.classList.add("selected");

      const selected = new Date(year, month, dateNumber);
      const dayOfWeek = days[selected.getDay()];
      const formatted = `${month + 1}월 ${dateNumber}일 (${dayOfWeek})`;
      displayDate.textContent = formatted;
    }
  });
}
selectDate(defaultDate);

calendarDates.forEach((dateEl) => {
  dateEl.addEventListener("click", () => {
    const dateNumber = parseInt(dateEl.textContent);
    selectDate(dateNumber);
  });
}); //calender_event

const leftMonthBtn = document.querySelector(
  '.cal_date_box .calendar_date img[alt="왼쪽버튼"]'
);
const rightMonthBtn = document.querySelector(
  '.cal_date_box .calendar_date img[alt="오른쪽버튼"]'
);
const monthDisplay = document.querySelector(".cal_date_box .month");

let currentYear = year;
let currentMonth = month;

function showMonth() {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  monthDisplay.textContent = `${monthNames[currentMonth]} ${currentYear}`;
}

leftMonthBtn.addEventListener("click", () => {
  currentMonth--;
  if (currentMonth < 0) {
    currentMonth = 11;
    currentYear--;
  }
  showMonth();
});

rightMonthBtn.addEventListener("click", () => {
  currentMonth++;
  if (currentMonth > 11) {
    currentMonth = 0;
    currentYear++;
  }
  showMonth();
});
//달력 상단 화살표 변경

const dateLeftBtn = document.querySelector(".date_box div:first-child img");
const dateRightBtn = document.querySelector(".date_box div:last-child img");

let selectedDate = defaultDate;

dateLeftBtn.addEventListener("click", () => {
  let newDate = selectedDate - 1;
  if (newDate < 1) {
    newDate = 1;
  }
  selectedDate = newDate;
  selectDate(selectedDate);
});

dateRightBtn.addEventListener("click", () => {
  let newDate = selectedDate + 1;
  if (newDate > 31) {
    newDate = 31;
  }
  selectedDate = newDate;
  selectDate(selectedDate);
});
//상영표 상단 화살표 변경
