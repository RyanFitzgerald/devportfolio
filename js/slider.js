// Buat array berisi konfigurasi Swiper untuk setiap slider
var sliderConfigs = [
    {
        container: '.swiper-container-1',
        pagination: '.swiper-pagination-1',
    },
    {
        container: '.swiper-container-2',
        pagination: '.swiper-pagination-2',
    },
    {
        container: '.swiper-container-3',
        pagination: '.swiper-pagination-3',
    },
    {
        container: '.swiper-container-4',
        pagination: '.swiper-pagination-4',
    },
    {
        container: '.swiper-container-5',
        pagination: '.swiper-pagination-5',
    },
    {
        container: '.swiper-container-6',
        pagination: '.swiper-pagination-6',
    },
    {
        container: '.swiper-container-7',
        pagination: '.swiper-pagination-7',
    },
    {
        container: '.swiper-container-8',
        pagination: '.swiper-pagination-8',
    },
    {
        container: '.swiper-container-9',
        pagination: '.swiper-pagination-9',
    },
    {
        container: '.swiper-container-10',
        pagination: '.swiper-pagination-10',
    }
];

// Inisialisasi Swiper untuk setiap slider dengan loop
sliderConfigs.forEach(function (config) {
    var swiper = new Swiper(config.container, {
        loop: false,
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
            el: config.pagination,
            clickable: true,
        },
    });
});