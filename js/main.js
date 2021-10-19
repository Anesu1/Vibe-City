$('.owl-carousel').owlCarousel({
    loop:true,
    margin:50,
    nav:true,
    autoplay:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})


const selected = document.querySelector(".selected");
const optionsContainer = document.querySelector(".options-container");
const arrow = document.getElementById("arrow");
const  optionsList = document.querySelectorAll(".option");

selected.addEventListener("click", ()  =>{
    optionsContainer.classList.toggle("active");
})


optionsList.forEach( o => {
    o.addEventListener("click", () =>{
       selected.innerHTML = o.querySelector("label").innerHTML;
       optionsContainer.classList.remove("active");
       var img = document.createElement("img");
       img.src = arrow.id;
       selected.appendChild(arrow)
    })
})

$('header ul li').on('click', function () {
  
    $('header ul li').removeClass('active');
    var $this = $(this);
    if (!$this.hasClass('active')) {
        $this.addClass('active');   
    }
    
  });

  
$(window).on('scroll', function(){
    if($(window).scrollTop()){
    $('header').addClass('bgColor')
    }
    else{
    $('header').removeClass('bgColor')
    }
    })
    
  