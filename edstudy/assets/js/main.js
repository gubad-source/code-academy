$(document).ready(function(){

    $("#treeview .open").click(function (e) {
        e.stopPropagation();
        $(this).children().eq(1).slideToggle();
      });
      
    new WOW().init();

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
  
})
