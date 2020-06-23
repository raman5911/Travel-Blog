$(document).ready(function(){
  
    //Highlight the active link

    $('.nav-item').on('click', function(){

        $('.nav-item').removeClass('active');
        $(this).addClass('active');

    });

    //--------- Blog Post Slider ----------------

    $('.slider').slick({
          slidesToShow: 3,
          slidesToScroll: 3,
          dots: true,
          autoplay: true,
          autoplaySpeed: 3000,

          //If width is less than 768px, then only one slide will be showed at a time

           responsive: [
             {
                 breakpoint: 768,
                 settings: 
                 {
                   slidesToShow: 1,
                   slidesToScroll: 1
                 }
             },
             {
                 breakpoint: 990,
                 settings: 
                 {
                   slidesToShow: 2,
                   slidesToScroll: 2
                 }
             },
             {
               breakpoint: 1200,
               settings: 
               {
                 slidesToShow: 3,
                 slidesToScroll: 3
               }
             }
              
           ]

    });

    $('.post-img').hover(function(){

        $(this).find("p").css("visibility", "visible");

    }, function(){

        $(this).find("p").css("visibility", "hidden");

    });

    //--------- Blog Post Slider ----------------

    if(window.innerWidth<=768)
    {
        $('.site-content').removeClass('container');
        $('.site-content').addClass('container-fluid');
    }

    //-------- Animate on Scroll -------------------
    AOS.init();

});