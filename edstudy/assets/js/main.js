$(document).ready(function(){

  
    if ($('#isotope .courses').length) {
        var $grid = $('#isotope .courses').isotope({
            itemSelector: '.grid-item',
            percentPosition: true,
        });

        $('.isotope-menu').on('click', 'button', function () {
           
            $(".isotope-menu button.active").removeClass("active");
            $(this).addClass("active");
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({ filter: filterValue });
        });
    }

    $("#treeview .open").click(function (e) {
        e.preventDefault();
        e.stopPropagation();
        $(this).children().eq(1).slideToggle();
      });
      
   

    if ($('.blog-details__content__comment ul li').length > 0 ){
        $('.comment-size').text($('.blog-details__content__comment ul li').length);
    }

    if ($('.testimonial-slider').length) {
        $('.testimonial-slider').owlCarousel({
            loop: true,
            margin: 30,
            nav: false,
            center: true,
            autoplay: true,
            autoplayTimeout: 4000,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 3
                }
            }
        });
    }

    let coursesTab=Array.from(document.querySelectorAll('.nav .nav-item'));
    coursesTab.forEach(elem=>{
        elem.addEventListener('click',function(e){
            e.preventDefault();
            e.stopPropagation();

            let navItemSelected=document.querySelector('.nav-item.activee');
            navItemSelected.classList.remove('activee');
            elem.classList.add('activee');
         
            let tabbPaneTargetSelected = document.querySelector(
                `[data-target='${elem.getAttribute("data-source")}']`
              );
            
              let tabbPaneTargetRemove = document.querySelector(".tabb-pane.active");
              tabbPaneTargetRemove.classList.remove("active");
              tabbPaneTargetRemove.classList.add("d-none");
             
          
              tabbPaneTargetSelected.classList.remove("d-none");
              tabbPaneTargetSelected.classList.add("active");
        })
    })
  
    if ($(".back-to-top").length) {
        $(window).scroll(function (e) {
            var scroll = $(window).scrollTop();
            if (scroll > 245) {
                $('.back-to-top').addClass("show");
                $('.nav-first').addClass("sticky-menu");
            } else {
                $('.back-to-top').removeClass("show");
                $('.nav-first').removeClass("sticky-menu");
            }
        });

        $(".back-to-top").click(function (e) {
            $('html, body').animate({
                scrollTop: $("html").offset().top
            }, 1000);
        });
    }



      new WOW().init();
})
