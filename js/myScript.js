$( document ).ready(function() {
   
    var $header = $("#header");
    var $homeBackground = $("#homeBackground");
    var $aboutUsContainer = $("#aboutUsContainer");
    var $clientIssuesContainer = $("#clientIssuesContainer");
    var $aboutUsSection = $(".aboutUsSection");
    var $aspiraitionsContainer = $("#aspiraitionsContainer");
    var $home = $(".home");

    adjustHomeBackgroundHeight();
    adjustTopMargin();
    startAnimation();
    pageMinHeight();

    function adjustHomeBackgroundHeight(){
        $homeBackground.css("height", ((($(window).height()-$header.height())/0.875)+"px"));
    }

    function pageMinHeight(){
        $aspiraitionsContainer.css("min-height", ((($(window).height()-$header.height())/0.875)+"px"));
    }

    function adjustTopMargin(){
        $homeBackground.css("margin-top", $header.height());
        $aboutUsContainer.css("margin-top", $header.height());
        $clientIssuesContainer.css("margin-top", $header.height());
        $aspiraitionsContainer.css("margin-top", $header.height());
    }

    function startAnimation(){
        // $aboutUsSection.addClass("move");
        $(".z3").addClass("move");
        $(".z2").addClass("move");
        $(".z1").addClass("move");
    }

    $(".homeSlogan").hide();
    $home.on('click',function(){
        var $in = $(this)
        $homeBackground.css("background-image","url(\'img/backI"+$in.attr('num')+".jpg\')");
        if($in.attr('num') == '7'){
            $("#slogan").css("color","white");
            $(".homeSlogan").show();
        }
        else{
            $(".homeSlogan").hide();
            $("#slogan").css("color","#666acb");
        }
        if($in.attr('num') == '1' || $in.attr('num') == '3'|| $in.attr('num') == '4'){
            $("#header").css('box-shadow','2px 2px 2px #b1b3f9');
        }
        else{
            $("#header").css('box-shadow','2px 2px 2px #373737');
        }
    })

});