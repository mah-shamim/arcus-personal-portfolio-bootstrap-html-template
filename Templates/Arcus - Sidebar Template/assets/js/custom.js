
/*===============================================================
1.ABOUT SECTION TAB
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
2.ISOTOPE GALLERY FILTER
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
3.GALLERY MAGNIFICPOPUP
===============================================================*/

$('.grid-item').magnificPopup({
    delegate: 'a', // child items selector, by clicking on it popup will open
    type: 'image',
    gallery:{enabled:true}
});

/*===============================================================
4.GALLERY MAGNIFICPOPUP
===============================================================*/
$(document).ready(function() {

    $("#owl-demo").owlCarousel({
        
        loop:true,
        autoplay:true,
        autoplayTimeout:6000,
        nav:false,
        responsive:{
            0:{
                items:1,
                nav:false
            },
            600:{
                items:1,
                nav:true
            },
            768:{
                items:1
            },
            1280:{
                items:2
            },
        }
    });

});
