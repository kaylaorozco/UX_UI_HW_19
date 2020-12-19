setTimeout(function (){
    $(".loader-bg").fadeToggle();
}, 1000);

const faders = document.querySelectorAll(".fade-in");

 $(".hamburger").on("click", function () {
    $(".hamburger").removeClass("active").addClass("fa-times");
    if ($(".hamburger").hasClass("fa-times")) {
        $(".hero-image").css("background-color", "#262626");
        $(".menu").css("flex-direction", "column");
        $(".menu").css("justify-content", "center");
        $(".menu").css("align-items", "space-between");
        $(".menu").css("color", "#D1A16C");
    }
});

$(".fa-times").on("click", function () {
    $(".fa-times").removeClass("active").addClass("hamburger");
})

$(".contact-pulse").on("hover", function () {
    $(".contact-pulse")
})

const appearOptions = {
    threshold: 1,
    rootMargin: "0px 0px -100px 0px"
};
const appearOnScroll = new IntersectionObserver( function(
    entries, appearOnScroll
) {
    entries.forEach( entry => {
        if (!entry.isIntersecting) {
            return;
        }
        else {
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
        }
    })
}
    , appearOptions);

    faders.forEach( fader => {
        appearOnScroll.observe(fader);
    });

    // navbar

    $(document).ready(function() {


        $(window).scroll(function() {    
            var scroll = $(window).scrollTop();
        
             //>=, not <=
            if (scroll >= 60) {
                //clearHeader, not clearheader - caps H
                $(".navbar").addClass("bg-dark");
            } else {
              $(".navbar").removeClass("bg-dark");
            }
        }); //missing );
          
          
          
          
        
          
        // document ready  
        });