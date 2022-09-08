$(document).ready(function () {
    $(window).scroll(function () { 
        if(scrollY >= 2200){
            $('.wrap-8 .top').fadeIn();
        }
        else{
            $('.wrap-8 .top').fadeOut();
        }

    });
    $('.wrap-8 .top ').click(function (e) { 
        e.preventDefault();
        $('html,body').animate({scrollTop:0});
    });
});
$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        dots:false,
        autoplay:true,
        autoplayTimeout:3000,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })
});
$(document).ready(function () {
    $('.log').click(function (e) { 
        e.preventDefault();
        $('body').append('<div class=overlay></div>');
        $('body').append('<div class=model></div>');
        $(".model").append('<button class="close">&times;</button>');
        
        var account = $(".account").html();
        $('.model').append(account);

        $(window).keydown(function (e) { 
            if(e.which == 27) {
                $(".overlay ,.model").remove();
            }
        });
        $('.model .close, .overlay').click(function () {

            $(".overlay ,.model").remove();

        });

        $(".signup").click(function (e) { 
            e.preventDefault();
            $(".model").remove(); 
            $('body').append('<div class=model></div>');
            $(".model").append('<button class="close">&times;</button>');
            var acc = $(".account-1").html();
            $('.model').append(acc);
            $(window).keydown(function (e) { 
                if(e.which == 27) {
                    $(".overlay ,.model").remove();
                }
            });
            $('.model .close, .overlay').click(function () {
    
                $(".overlay ,.model").remove();
    
            });
        });


  
    });

    $(".wrap-1 .mob").click(function (e) { 
        e.preventDefault();
        
        $(this).toggleClass("active");
        
        $(".wrap-1 .mob-hide").animate({width:"toggle"},350);
            
    });
});

