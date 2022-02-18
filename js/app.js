$(window).scroll(function () { 
    let screenHeight = $(window).height()
    // console.log(screenHeight)

    let currentPosition = $(this).scrollTop();
    
    if(currentPosition >= screenHeight-100){
        $(".site-nav").addClass("site-nav-scroll");
        navScroll();
    }else{
        $(".site-nav").removeClass("site-nav-scroll");
        setActive("home");
    }

});


$(window).on("load",function(){
  $(".loader-container").fadeOut(function(){
    $(this).remove();
  });
})


$(".navbar-toggler").click(function(){
  let x =  $(".navbar-toggler2").html(`<i class="fas fa-times fa-3x menu-icon"></i>`)
  $(this).addClass("d-none");
  x.removeClass("d-none")

})

$(".navbar-toggler2").click(function(){
  let y =  $(".navbar-toggler").html(`<i class="fa fa-bars fa-2x menu-icon"></i>`)
  $(this).addClass("d-none");
  y.removeClass("d-none")

})

// $(".navbar-toggler").click(function () {
//     let result = $("#navbarSupportedContent").hasClass("show");
//     console.log(result);

    

//     // if(result){
//     //     $(".menu-icon").removeClass("fa-times").addClass("fa-bars");


//     // }
//     // else{
//     //     $(".menu-icon").removeClass("fa-bars").addClass("fa-times");
//     // }

//   })





$('.pricing-slide').slick({
  
    dots: true,
    infinite: false,
    arrows:false,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 3,
    
    
    responsive: [
      {
        breakpoint: 788,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
  
  wow = new WOW(
                        {
                        boxClass:     'wow',      // default
                        animateClass: 'animate__animated', // default
                        offset:       0,          // default
                        mobile:       true,       // default
                        live:         true        // default
                      }
                      );
                      wow.init();
  

            function setActive(current){
              $(".nav-link").removeClass("current-section");
              $(`.nav-link[href='#${current}']`).addClass("current-section");
            } ;
            
            function navScroll() {
                let currentSection = $("section[id]");

                currentSection.waypoint(function(direction){
                  if(direction == "down"){

                    let currentsectionId =$(this.element).attr("id");

                    setActive(currentsectionId);

                  }
                },{
                  offset: '150px'
                })
                
                currentSection.waypoint(function(direction){
                  if(direction == "up"){

                    let currentsectionId =$(this.element).attr("id");
                    // console.log(currentsectionId);
                    setActive(currentsectionId);

                  }
                },{
                  offset: '150px'
                });
                
                
                
                ;

              }

              navScroll();




// var waypoints = $('#home').waypoint(function(direction) {
//     console.log("I'm home")
//     $(".nav-link").removeClass("current-section");
//     // $(".nav-link[href='#home']").addClass("current-section");

// }, {
//   offset: '0%'
// })

//    var waypoints = $('#about').waypoint(function(direction) {
//     console.log("I'm about")
//     $(".nav-link").removeClass("current-section");
//     // $(".nav-link[href='#about']").addClass("current-section");

// }, {
//   offset: '25%'
// })

// var waypoints = $('#service').waypoint(function(direction) {
//     console.log("I'm service")
//     $(".nav-link").removeClass("current-section");
//     // $(".nav-link[href='#service']").addClass("current-section");

// }, {
//   offset: '25%'
// })

// var waypoints = $('#pricing').waypoint(function(direction) {
//     console.log("I'm pricing")
//     $(".nav-link").removeClass("current-section");
//     // $(".nav-link[href='#pricing']").addClass("current-section");

// }, {
//   offset: '25%'
// })
// var waypoints = $('#contact').waypoint(function(direction) {
//     console.log("I'm contact")
//     $(".nav-link").removeClass("current-section");
//     // $(".nav-link[href='#contact']").addClass("current-section");

// }, {
//   offset: '25%'
// })