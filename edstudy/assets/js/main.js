$(document).ready(function () {
  let navItem = document.querySelectorAll(".navbar-nav .nav-item");
  navItem.forEach((elem) => {
    elem.addEventListener("click", function () {
      document.querySelector(".nav-item.active").classList.remove("active");

      elem.classList.add("active");
    });
  });

  if ($("#isotope .courses").length) {
    var $grid = $("#isotope .courses").isotope({
      itemSelector: ".grid-item",
      percentPosition: true,
    });

    $(".isotope-menu").on("click", "button", function () {
      $(".isotope-menu button.active").removeClass("active");
      $(this).addClass("active");
      var filterValue = $(this).attr("data-filter");
      $grid.isotope({ filter: filterValue });
    });
  }

  $("#treeview .open").click(function (e) {
    e.preventDefault();
    e.stopPropagation();
    $(this).children().eq(1).slideToggle();
  });

  if ($(".blog-details__content__comment ul li").length > 0) {
    $(".comment-size").text($(".blog-details__content__comment ul li").length);
  }

  if ($(".testimonial-slider").length) {
    $(".testimonial-slider").owlCarousel({
      loop: true,
      margin: 30,
      nav: false,
      center: true,
      autoplay: true,
      autoplayTimeout: 4000,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 2,
        },
        1000: {
          items: 3,
        },
      },
    });
  }

  let coursesTab = Array.from(document.querySelectorAll(".nav .nav-item"));
  coursesTab.forEach((elem) => {
    elem.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();

      let navItemSelected = document.querySelector(".nav-item.activee");
      navItemSelected.classList.remove("activee");
      elem.classList.add("activee");

      let tabbPaneTargetSelected = document.querySelector(
        `[data-target='${elem.getAttribute("data-source")}']`
      );

      let tabbPaneTargetRemove = document.querySelector(".tabb-pane.active");
      tabbPaneTargetRemove.classList.remove("active");
      tabbPaneTargetRemove.classList.add("d-none");

      tabbPaneTargetSelected.classList.remove("d-none");
      tabbPaneTargetSelected.classList.add("active");
    });
  });

  if ($(".back-to-top").length) {
    $(window).scroll(function (e) {
      var scroll = $(window).scrollTop();
      if (scroll > 245) {
        $(".back-to-top").addClass("show");
        $(".nav-first").addClass("sticky-menu");
      } else {
        $(".back-to-top").removeClass("show");
        $(".nav-first").removeClass("sticky-menu");
      }
    });

    $(".back-to-top").click(function (e) {
      $("html, body").animate(
        {
          scrollTop: $("html").offset().top,
        },
        1000
      );
    });
  }

  var addToBasketBtn = document.querySelectorAll(".add-to-cart");
  var cartCount = document.querySelector(".fas.fa-shopping-basket");
  var cartItems = document.querySelector(".cart-items");

  addToBasketBtn.forEach((elem) => {
    elem.addEventListener("click", function (e) {
      e.preventDefault();

      let basket = JSON.parse(localStorage.getItem("basket"));

      if (basket == null) {
        basket = {
          items: [],
          count: 0,
          total: 0,
        };
      }

      let prudoctId = this.dataset.id;

      let index = basket.items.findIndex((item) => {
        return item.id == prudoctId;
      });

      if (index == -1) {
        let product = {
          id: this.dataset.id,
          price:
            this.parentNode.parentNode.nextElementSibling.children[1].innerText,
          image: this.parentNode.previousElementSibling.getAttribute("src"),
          qty: 1,
        };

        basket.items.push(product);
      } else {
        basket.items[index].qty++;
      }

      basket = calcTotalAndCount(basket);

      if (cartCount != null)
        cartCount.nextElementSibling.innerText = basket.count;

      localStorage.setItem("basket", JSON.stringify(basket));
    });
  });

  let basket = JSON.parse(localStorage.getItem("basket"));

  if (basket != null && cartCount != null) {
    cartCount.nextElementSibling.innerText = basket.count;
  }

  if (basket != null && cartItems != null) {
    basket.items.forEach((item, index) => {
      let td = `<td class="col-sm-8 col-md-6">
                    <div class="media">
                        <a class="thumbnail pull-left" href="#"> 
                            <img class="media-object" src="${
                              item.image
                            }" style="width: 72px; height: 72px;">
                        </a>
                      
                    </div></td>
                    <td class="col-sm-1 col-md-1" style="text-align: center">
                    <input type="email" class="form-control" id="exampleInputEmail1" value="${
                      item.qty
                    }">
                    </td>
                    <td class="col-sm-1 col-md-1 text-center"><strong>${
                      item.price
                    } ₼</strong></td>
                    <td class="col-sm-1 col-md-1 text-center"><strong>${
                      item.price * item.qty
                    } ₼</strong></td>
                    <td class="col-sm-1 col-md-1">
                    <button type="button" class="btn btn-danger remote-from-basket" data-id="${
                      item.id
                    }">
                        <span class="glyphicon glyphicon-remove"></span> Remove
                    </button>
                </td>`;

      let tr = document.createElement("tr");
      tr.dataset.index = index;
      tr.innerHTML = td;

      cartItems.prepend(tr);
    });
  }

  var removeBtns = document.querySelectorAll(".remote-from-basket");

  removeBtns.forEach((item) => {
    item.addEventListener("click", function () {
      let index = item.parentNode.parentNode.dataset.index;
      basket.items.splice(index, 1);
      item.parentNode.parentNode.remove();

      basket = calcTotalAndCount(basket);
      localStorage.setItem("basket", JSON.stringify(basket));
    });
  });

  function calcTotalAndCount(basket) {
    basket.count = 0;
    basket.total = 0;
    basket.items.forEach((item) => {
      basket.total += item.qty * item.price;
      basket.count++;
    });

    return basket;
  }
  let shopCategorySearch=document.querySelector('.shop-action__form__select')
  shopCategorySearch.addEventListener('change',function(e){
    let shopTarget=e.target.value.toLowerCase();

    let text2 = Array.from(document.querySelectorAll("#shop-area [data-id]"));
  text2.forEach((elem) => {
    let stuff = elem.dataset.id.toLowerCase();
    if (stuff.indexOf(shopTarget) != -1) {
      elem.classList.remove("d-none");
    } else {
      elem.classList.add("d-none");
    }
  });
  })
  let categorySearch=document.querySelector('.page-search__box__select');
  categorySearch.addEventListener('change',function(e){
  let valSearch=e.target.value.toLowerCase();
  let text = Array.from(document.querySelectorAll("#courses .courses [data-id]"));
  text.forEach((elem) => {
    
    let stuff = elem.dataset.id.toLowerCase();
    if (stuff.indexOf(valSearch) != -1) {
      elem.classList.remove("d-none");
    }else {
      elem.classList.add("d-none");
    }
  });
  let text4 = Array.from(document.querySelectorAll("#event-courses [data-id]"));
  text4.forEach((elem) => {
    let stuff = elem.dataset.id.toLowerCase();
    if (stuff.indexOf(valSearch) != -1) {
      elem.classList.remove("d-none");
    } else {
      elem.classList.add("d-none");
    }
  });
 
  })
  new WOW().init();
});

let search = document.querySelector(".search-engine");
search.addEventListener("keyup", function (e) {
  console.log(e.target.value.toLowerCase());
  let term = e.target.value.toLowerCase();

  let text = Array.from(
    document.querySelectorAll("#courses .courses [data-id]")
  );
  text.forEach((elem) => {
    // let stuff= elem.textContent.toLowerCase();
    //    if(stuff.indexOf(term) !=-1){
    //     elem.parentNode.parentNode.parentNode.parentNode.classList.remove('d-none');
    //    }else{
    //     elem.parentNode.parentNode.parentNode.parentNode.classList.add('d-none');
    //    }
    let stuff = elem.dataset.id.toLowerCase();
    if (stuff.indexOf(term) != -1) {
      elem.classList.remove("d-none");
    } else {
      elem.classList.add("d-none");
    }
  });

  let text2 = Array.from(document.querySelectorAll("#shop-area .shop-item"));
  text2.forEach((elem) => {
    let stuff = elem.textContent.toLowerCase();
    if (stuff.indexOf(term) != -1) {
      elem.parentNode.classList.remove("d-none");
    } else {
      elem.parentNode.classList.add("d-none");
    }
  });

  let text3 = Array.from(document.querySelectorAll("#treeview li a"));
  text3.forEach((elem) => {
    let stuff = elem.textContent.toLowerCase();
    if (stuff.indexOf(term) != -1) {
      elem.parentNode.classList.remove("d-none");
    } else {
      elem.parentNode.classList.add("d-none");
    }
  });

  let text4 = Array.from(document.querySelectorAll("#event-courses [data-id]"));
  text4.forEach((elem) => {
    let stuff = elem.dataset.id.toLowerCase();
    if (stuff.indexOf(term) != -1) {
      elem.classList.remove("d-none");
    } else {
      elem.classList.add("d-none");
    }
  });
});

