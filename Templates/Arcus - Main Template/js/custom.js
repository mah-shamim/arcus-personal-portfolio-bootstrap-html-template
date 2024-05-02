/***********************
    1.STICKY NAV
    2.SECTION SCROLL
    3.ABOUT SECTION TAB
    4.SCROLL REVEAL
    5.ISOTOPE GALLERY FILTER
    6.GALLERY MAGNIFICPOPUP
    7.GALLERY SLIPHOVER
    8.CLIENTS OWL CAROUSEL
************************/


/*===============================================================
1.STICKY NAV
===============================================================*/

window.addEventListener("scroll", function(){
    var navbar = document.querySelector("nav");
    navbar.classList.toggle("sticky", window.scrollY > 0);
})

/*===============================================================
2.SECTION SCROLL
===============================================================*/

if($("body").hasClass("side-header")){
    $('.smooth-scroll').on('click', function() {
        event.preventDefault();
        var sectionTo = $(this).attr('href');
        $('html, body').stop().animate({
          scrollTop: $(sectionTo).offset().top}, 1000, 'easeInOutExpo');
    });
       }else {
    $('.smooth-scroll').on('click', function() {
        event.preventDefault();
        var sectionTo = $(this).attr('href');
        $('html, body').stop().animate({
          scrollTop: $(sectionTo).offset().top - 50}, 1000, 'easeInOutExpo');
    });
}


/*===============================================================
3.ABOUT SECTION TAB
===============================================================*/

(() => {
    const aboutSection = document.querySelector(".about-section"),
    tabsContainer = document.querySelector(".about-tabs");

    tabsContainer.addEventListener("click", (event) => {
        /* if event.target.classList.contains 'tab-item' class and not contains
        'active' class */
        if(event.target.classList.contains("tab-item") &&
        !event.target.classList.contains("active")){
            const target = event.target.getAttribute("data-target");
            // deactivate existing active 'tab-item'
            tabsContainer.querySelector(".active").classList.remove("active");
            //activate new 'tab-item'
            event.target.classList.add("active");

            //deactivate existing active 'tab-content'
            aboutSection.querySelector(".tab-content.active").classList.remove("active");

            //activate new 'tab-content'
            aboutSection.querySelector(target).classList.add("active");
        }
    })
})();

/*===============================================================
4.SCROLL REVEAL
===============================================================*/

const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})

sr.reveal('.section-title',{})

/*===============================================================
5.ISOTOPE GALLERY FILTER
===============================================================*/

$(document).ready(function (){
    $(window).on("load", function (){
        var $container = $('.portfolio');
        $container.isotope({
            filter: '*',
            animationOptions: {
                queue: true
            }
        });
        $('.portfolio-filter span').click(function (){
            $('.portfolio-filter .active').removeClass('active');
            $(this).addClass('active');
            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    queue: true
                }
            });
            return false;
        });
    });
});

/*===============================================================
6.GALLERY MAGNIFICPOPUP
===============================================================*/

$('.grid-item').magnificPopup({
    delegate: 'a', // child items selector, by clicking on it popup will open
    type: 'image',
    gallery:{enabled:true}
});

/*===============================================================
7.GALLERRY SLIPHOVER
===============================================================*/

$(window).load(function() {
    $('.dh-container').directionalHover();
});

/*===============================================================
8.CLIENTS OWL CAROUSEL
===============================================================*/

$(document).ready(function() {

    $("#owl-demo").owlCarousel({

        navigation : false, // Show next and prev buttons

        slideSpeed : 300,
        paginationSpeed : 400,

        items : 1, 
        itemsDesktop : false,
        itemsDesktopSmall : false,
        itemsTablet: false,
        itemsMobile : false,
        autoPlay : true
    });

});