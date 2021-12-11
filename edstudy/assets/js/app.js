
$(window).on("load",function(){
    $(".preloader-container").fadeOut(1000);
  })
  
  let closeSidebar=document.querySelector('.sidebar-close i');
  let sidebarUnderlay=document.querySelector('.sidebar-underlay');
  let sidebar=document.querySelector('.sidebar');
  let hamburger=document.querySelector('.hamburger i');
  
  closeSidebar.addEventListener('click',function(){
    sidebarUnderlay.style.width='0px'
    sidebar.style.width='0px'
  
  });
  
 
  
  hamburger.addEventListener('click',function(){
   
      sidebarUnderlay.style.width='100%'
      sidebar.style.width='79%'
    closeSidebar.classList.toggle('active')
    })
    

    document.querySelectorAll('ul .open').forEach(elem=>{
      elem.addEventListener('click',(function (e) {
        e.preventDefault();
        e.stopPropagation();
 
      }))
    })
  
  
    $("ul .open").click(function (e) {
      e.preventDefault();
      e.stopPropagation();
      $(this).children().eq(1).slideToggle();
    });

    let rotater=document.querySelectorAll('.rotating ul li');
    rotater.forEach((elem, index) => {
      if (elem.style.animation) {
        elem.style.animation = "";
      } else {
        elem.style.animation = `rotater ease forwards ${index / 4 + 1}s`;
      }
    });