// 김치이야기


$(()=>{

    // 모달레이어 팝업

    $('.modal').hide();

    $('.btn-mo').click(function(){
        $('.modal').show();
    })

    $('.popup button').click(function(){
        $('.modal').hide();
    })





    $('.sub').hide();

    // $('.gnb>li>a, .sub').hover(function(){
    //     $('+.sub',this).stop().slideToggle();
    // });

    $('.gnb>li>a').mouseover(function(){
        $('+.sub',this).stop().slideDown();
    });
    
    $('.gnb>li>a').mouseout(function(){
        $('+.sub',this).stop().slideUp();
    });

    $('.sub').mouseover(function () {
        $(this).stop(true, true).slideDown();
    });

    // 비주얼 슬라이더

    const slide = $('.slide');
    const LiWidth = $('.slide li').width();

    slide.css({
        widdth: LiWidth * 3 ,
        position : 'relative' ,
        left:0
    })

    function moveLeft () {
        slide.animate({
            left : -LiWidth
        }, 1000,function(){
            // $('.slide li:first').appendTo('.slide')
            $(this).children('li:first').appendTo(this)
            $(this).css('left', '0');
        })
    }


    setInterval(function(){
        moveLeft();
    },3000)

});