import "./assets/scss/all.scss";
import "bootstrap/dist/js/bootstrap.min.js";

var swiper = new Swiper(".mySwiper", {
  breakpoints: {
    1024: {
      slidesPerView: 2,
      spaceBetween: 48,
    },
    992: {
      slidesPerView: 2,
      spaceBetween: 48,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 24,
    },
  },
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  keyboard: {
    enabled: true,
  },
});

if (document.querySelector(".prepage") != undefined) {
  document.querySelector(".prepage").addEventListener("click", function (e) {
    e.preventDefault();
    var currentPage = swiper.activeIndex - 1;

    swiper.slideTo(currentPage, 0);
  });
}
if (document.querySelector(".nextpage") != undefined) {
  document.querySelector(".nextpage").addEventListener("click", function (e) {
    e.preventDefault();
    var currentPage = swiper.activeIndex + 1;

    swiper.slideTo(currentPage, 0);
  });
}

// Select the node that will be observed for mutations
const targetNode = document.querySelector(".swiper-pagination");
if (targetNode != undefined) {
  // 初始化頁數
  var page = document.querySelector(".page");
  page.innerHTML = targetNode.innerHTML;

  // Options for the observer (which mutations to observe)
  const config = { attributes: true, childList: true, subtree: true };

  // Callback function to execute when mutations are observed
  const callback = (mutationList, observer) => {
    for (const mutation of mutationList) {
      if (mutation.type === "childList") {
        var page = document.querySelector(".page");
        page.innerHTML = targetNode.innerHTML;
      }
    }
  };

  // Create an observer instance linked to the callback function
  const observer = new MutationObserver(callback);

  // Start observing the target node for configured mutations
  observer.observe(targetNode, config);
}

/**
 * 熱門文章的swiper
 */
var mobileSwiper = new Swiper(".mobileSwiper", {
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 48,
    },
    372: {
      slidesPerView: 1,
      spaceBetween: 24,
    },
  },
});

/**
 * 品味生活的swiper
 */
var lifeSwiper = new Swiper(".lifeSwiper", {
  breakpoints: {
    992: {
      direction: "horizontal",
      slidesPerView: 3,
      spaceBetween: 24,
    },
    768: {
      direction: "horizontal",
      slidesPerView: 2,
      spaceBetween: 24,
    },
    372: {
      direction: "vertical",
      slidesPerView: 3,
      spaceBetween: 0,
    },
  },
});

if(document.querySelector(".prepage-life")!=undefined){
  document.querySelector(".prepage-life").addEventListener("click", function (e) {
    e.preventDefault();
    var currentPage = lifeSwiper.activeIndex - 1;
  
    lifeSwiper.slideTo(currentPage, 0);
  });
  document
    .querySelector(".nextpage-life")
    .addEventListener("click", function (e) {
      e.preventDefault();
      var currentPage = lifeSwiper.activeIndex + 1;
  
      lifeSwiper.slideTo(currentPage, 0);
    });
}

/**
 * 提案的swiper
 */
var projectSwiper = new Swiper(".projectSwiper", {
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 48,
      centeredSlides: true,
    },
    372: {
      slidesPerView: 1,
      spaceBetween: 24,
      centeredSlides: true,
    },
  },
});

/**
 * 延伸文章swiper
 */
var extendSwiper = new Swiper(".extendSwiper", {
  slidesPerView: 1,
  spaceBetween: 24,
  centeredSlides: true,
});
