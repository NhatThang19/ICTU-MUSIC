document.addEventListener('DOMContentLoaded', function () {
    new Splide('#MU', {
      perPage: 4,
      perMove: 1,
      gap: "1.5rem",
      padding: "4rem",
      pagination: false,
      type: "loop",
      autoplay: true,
    }).mount();
  });
  
  document.addEventListener('DOMContentLoaded', function () {
    new Splide('#Ars', {
        perPage: 4,
        perMove: 1,
        gap: "1.5rem",
        padding: "4rem",
        pagination: false,
        type: "loop",
        autoplay: true,
      }).mount();
  });