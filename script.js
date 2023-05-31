$(document).ready(function(){

    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle');
    });

    $(window).on('scroll load',function(){
        $('#menu').removeClass('fa-times');
        $('header').removeClass('toggle');

        // Scroll button part
       /* if($(window).scrollTop > 0){
            $('.dim').show();
        }
        else{
            $('.dim').hide(); // ça marche pas
        }*/
    });

    //smooth scrolling
    $('a[href*="#"]').on('click',function(e){
        e.preventDefault();

        $('html, body').animate({
            scrollTop : $($(this).attr('href')).offset().top,
        },
        400,
        'linear'
        
        )
    })
});