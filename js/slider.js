
var count=0;
var $window, 
    $windowH,
    sliderWidth,
    sliderTotal;
var $slide = $('#slide_box .slide');
var pageNum=$('#slide_box .slide li').length;
//alert(pageNum);


//console.log(pageNum, sliderWidth, sliderTotal);

//window resize
$(window).resize(onresize);
function onresize(){
    $window = $(window).width(),
	$windowH= $(window).height(),
	sliderWidth=$('#slide_box .slide li').width(),
	sliderTotal = sliderWidth * pageNum;
    $(".slide li").css({width: $window, height: $windowH});
	$slide.css({marginLeft: - ($window * count)});
	$slide.children().width($window);
    $slide.width(sliderTotal);
    
//    $(".slide li").each(function(count) {
//       $window = $(window).width();
//       $windowH= $(window).height();
//       $(this).width($window).height($windowH);
//    });
      
 }); 
onresize();

function next(){
    count++;
    if(count>pageNum-1){
        count=0;
        //5번째 페이지에서 다시 1번 페이지로 가기.
        $slide.children("li:first").prependTo($slide);
        $slide.css('margin-left','0px');
        $(".slide_nav a").removeClass("on");
        $(".slide_nav a").eq(count).addClass("on");
    }else{
        //count값에 맞게 페이지와 nav가 앞으로 이동.
        console.log(count);
        $slide.animate({marginLeft: -($window*count)},300,function(){
             $(".slide_nav a").removeClass("on");
             $(".slide_nav a").eq(count).addClass("on");
             
        }); 
    }
}
function prev(){
    count--;
    if(count<0){
        //1번페이지에서 뒤로 버튼 눌렀을때
        count=pageNum-1;
        //console.log('-'+count);
        $slide.children("li:last").appendTo($slide);
        $slide.css('margin-left', -(sliderTotal - $window));
        $(".slide_nav a").removeClass("on");
        $(".slide_nav a").eq(count).addClass("on");
    }else{
        //count값 하나씩 줄면서 nav가 뒤로 이동.
        console.log(count);
        $slide.animate({marginLeft: ($window * count)},300,function(){
            $(".slide_nav a").removeClass("on");
            $(".slide_nav a").eq(count).addClass("on");
        });
     
    }
}
//왼쪽버튼(뒤로)
$(".arrow_prev a").click(function(e){
     e.preventDefault();
//    $slide.animate({marginLeft: '+=' + $window});  
    prev();
});
//오른쪽버튼(앞으로)
$(".arrow_next a").click(function(e){
     e.preventDefault();
//    $slide.animate({marginLeft: '-=' + $window});  
    next();
});

//nav 클릭시 bg색 변경
$(".slide_nav a").each(function(){
    
});

//