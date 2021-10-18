$(window).scroll(
    function()
    {
    $('nav').toggleClass('scrolled',$(this).scrollTop()>50);
    });
    
    $(document).ready(function(){
        $(window).scroll(function(){
            // sticky navbar on scroll script
            if(this.scrollY > 20){
                $('.scrolled').addClass("sticky");
            }else{
                $('.scrolled').removeClass("sticky");
            }
            
            // scroll-up button show/hide script
            if(this.scrollY > 500){
                $('.scroll-up-btn').addClass("show");
            }else{
                $('.scroll-up-btn').removeClass("show");
            }
        });
    
        // slide-up script
        $('.scroll-up-btn').click(function(){
            $('html').animate({scrollTop: 0});
            // removing smooth scroll on slide-up button click
            $('html').css("scrollBehavior", "auto");
        });
    
        $('.navbar .menu li a').click(function(){
            // applying again smooth scroll on menu items click
            $('html').css("scrollBehavior", "smooth");
        });
    
        // toggle menu/navbar script
        $('.menu-btn').click(function(){
            $('.navbar .menu').toggleClass("active");
            $('.menu-btn i').toggleClass("active");
        });
        
        // typing text animation script
        var typed = new Typed(".typing", {
            strings: ["Learner", "Developer", "Coder", "Freelancer"],
            typeSpeed: 100,
            backSpeed: 60,
            loop: true
        });
    
        var typed = new Typed(".typing-2", {
            strings: ["Learner", "Developer", "Coder", "Freelancer"],
            typeSpeed: 100,
            backSpeed: 60,
            loop: true
        });
    });

    // document.addEventListener("DOMContentLoaded", function(){
    //     window.addEventListener('scroll', function() {
    //         if (window.scrollY > 50) {
    //           document.getElementById('navbar_top').classList.add('fixed-top');
    //           // add padding top to show content behind navbar
    //           navbar_height = document.querySelector('.navbar').offsetHeight;
    //           document.body.style.paddingTop = navbar_height + 'px';
    //         } else {
    //           document.getElementById('navbar_top').classList.remove('fixed-top');
    //            // remove padding top from body
    //           document.body.style.paddingTop = '0';
    //         } 
    //     });
    //   }); 
   
