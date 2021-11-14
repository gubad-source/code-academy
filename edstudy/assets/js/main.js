$(document).ready(function(){


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
