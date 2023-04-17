$(".thumbnails").owlCarousel({
    loop: true,
    nav: true,
    navText: ["Anterior", "Próximo"],
    responsive: {
        0: {
            item: 1
        },
        480: {
            item: 3
        },
        1000: {
            item: 4
        },

    }
});