if (document.querySelector(".about__button_right")) {
  let button = document.querySelector(".about__button_right");
  let popup = document.querySelector(".popup");
  let buttonClose = popup.querySelector(".popup__close-button");

  button.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("popup_active");
  });

  buttonClose.addEventListener("click", function () {
    popup.classList.remove("popup_active");
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.key === "Escape") {
      if (popup.classList.contains("popup_active")) {
        popup.classList.remove("popup_active");
      }
    }
  });
}

if (document.querySelector(".about__map-box")) {
  let picture = document.querySelector(".about__map-box");
  let mapPopup = document.querySelector(".map-popup");
  let mapCloseButton = mapPopup.querySelector(".map-popup__close-button");

  picture.addEventListener("click", function () {
    mapPopup.classList.add("map-popup_active");
  });

  mapCloseButton.addEventListener("click", function () {
    mapPopup.classList.remove("map-popup_active");
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.key === "Escape") {
      if (mapPopup.classList.contains("map-popup_active")) {
        mapPopup.classList.remove("map-popup_active");
      }
    }
  });
}

if (document.querySelectorAll(".first__slider-item").length) {
  const slides = document.querySelectorAll(".first__slider-item");
  const prev = document.querySelector(".first__arrow-btn_left");
  const next = document.querySelector(".first__arrow-btn_right");
  const dots = document.querySelectorAll(".first__control-btn");

  let index = 0;

  const activeSlide = (n) => {
    for (slide of slides) {
      slide.classList.remove("first__slider-item_active");
    }
    slides[n].classList.add("first__slider-item_active");
  };

  const activeDot = (n) => {
    for (dot of dots) {
      dot.classList.remove("first__control-btn_active");
    }
    dots[n].classList.add("first__control-btn_active");
  };

  const prepareCurrentSlide = (ind) => {
    activeSlide(ind);
    activeDot(ind);
  };

  const nextSlide = () => {
    if (index == slides.length - 1) {
      index = 0;
      prepareCurrentSlide(index);
    } else {
      index++;
      prepareCurrentSlide(index);
    }
  };

  const prevSlide = () => {
    if (index == 0) {
      index = slides.length - 1;
      prepareCurrentSlide(index);
    } else {
      index--;
      prepareCurrentSlide(index);
    }
  };

  dots.forEach((item, indexDot) => {
    item.addEventListener("click", () => {
      index = indexDot;
      prepareCurrentSlide(index);
    });
  });

  next.addEventListener("click", nextSlide);
  prev.addEventListener("click", prevSlide);
}

if (document.querySelector(".header__toggler")) {
  const toggler = document.querySelector(".header__toggler");
  const headerList = document.querySelector(".header__nav-list");

  toggler.addEventListener("click", function() {
    toggler.classList.toggle("open");
    if(headerList.classList.contains("open")) {
      headerList.classList.remove("open");
    } else {
      headerList.classList.add("open");
    }
  });
}




