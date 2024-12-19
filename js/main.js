$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true, // Katta va kichik elementlarni aylantirish
    margin: 40, // Elementlar orasidagi masofa
    nav: true,
    responsive: {
      // Ekran o'lchamiga moslashuv
      0: {
        // 0px va undan kichik ekranlar uchun
        items: 1.1, // 1 element ko'rsatiladi
      },
      600: {
        // 600px dan katta ekranlar uchun
        items: 1.8, // 3 element ko'rsatiladi
      },
      1000: {
        // 1000px dan katta ekranlar uchun
        items: 4, // 5 element ko'rsatiladi
      },
    },
  });
});
