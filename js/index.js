$(document).ready(function(){
    $(".main>li").mouseover(function(){
        $(this).find(".sub").stop().slideDown("fast");
    })

    $(".main>li").mouseout(function(){
        $(".sub").stop().slideUp("fast");
    })

    // var n = 0;

    // setInterval(function(){
    //     if(n < 3){
    //         n ++;
    //     }else{
    //         n = 0
        // }// n의 인덱스범위를 0~3까지로 설정

    //     $(".top_move").animate({"top":n * (-400) + "px"}, 500)
    // }, 3000)

    setInterval(function(){
        $(".top_move").animate({"top":"-400px"}, 500, function(){
            $(".top_move").append($(".top_move li").eq(0));
            $(".top_move").css({"top":"0"})
        })
    }, 3000)

    $(".contents h2").click(function(){
        $(".contents h2").removeClass("on");
        $(this).addClass("on");
        $(".contents ul").hide();
        $(this).next().css({"display":"flex"});
    })

    $(".click").click(function(){
        $(".pop").slideDown();
    })

    $(".close").click(function(){
        $(".pop").slideUp();
    })
})// fin