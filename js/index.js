$(window).load(function(){
    $('.child,.top .title,.c1,.c2,.c3,.c4,.c5,.c6').addClass('animated');
    AOS.init({
        duration: 800,
        easing: 'ease-out-back',
    });
});

$(document).ready(function(){
    $('.tomom').click(function(){
        $('body,html').animate({
            scrollTop: $('.momsay').offset().top
        },700,'swing');
    });

    $('.more').click(function(){
        $('body,html').animate({
            scrollTop: $('.T3').offset().top +150
        },700,'swing');
    });

    $('.go2web').click(function(){
        window.open('https://www.snowmilk.com.tw/','_blank');
    });

    $('.buy').click(function(){
        window.open('https://www.snowmilk.com.tw/luckyBag.php','_blank');
    });


});