$(function(){

    /*MENU MOBILE*/ 
    $('.mobile').click(function(){
        $(this).find('ul').slideToggle();
    })
    
    /*menu scroll*/ 
    $('nav a').click(function(){
        var href = $(this).attr('href');
        var offSetTop = $(href).offset().top;

        $('html, body').animate({'scrollTop':offSetTop});
        
        return false;
    })
    
    //hover social-box    
    $('.icon-wraper').hover(function(){
        $(this).find('i').css("color", "#231B1B");
    })

    $('.icon-wraper').mouseleave(function(){
        $(this).find('i').css("color", "#7161EF");
    })

    $('footer .icon-wraper').hover(function(){
        $(this).find('i').css("color", "#231B1B");
    })

    $('footer .icon-wraper').mouseleave(function(){
        $(this).find('i').css("color", "#fff");
    })

    //hover portfolio
    $('.port-box').hover(function(){
        $(this).find('#soon').hide();
    })

    $('.port-box').mouseleave(function(){
        $(this).find('#soon').show();
    })

    //CORREÇÃO MENU MOBILE
    // $('.ul-mobile-a').click(function(){
    //     $(this).find('.mobile').css('opacity', '0');
    // })

    //SOCIAL 
    $('.img-box').hover(function(){
        $(this).find('.social-thing').css('display', 'block');
    })

    $('.img-box').mouseleave(function(){
        $(this).find('.social-thing').css('display', 'none');
    })
});