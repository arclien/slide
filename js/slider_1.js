
var count=0;
//var $window = $(window).width();
//var $windowW=$(window).innerWidth();
//var $windowH= $(window).height();
var $slide = $('#slide_box .slide');
var pageNum=$('#slide_box .slide li').length;
//alert(pageNum);
//var sliderWidth=$('#slide_box .slide li').width();
//var sliderTotal = sliderWidth * pageNum;

var $window, $windowH, sliderWidth, sliderTotal;

//console.log($window);
//$slide.children().width($window);
	//$slide.width(sliderTotal);

/*var ulWidth = 0;
$("li").each(function() {
    ulWidth = ulWidth + $(this).width()
});
alert(ulWidth);*/

//window resize
/*$(window).resize(function() {
    var $windowH= $(window).height();
	$window = $(window).width();
    sliderWidth = $(".slide li").width($window).height($windowH);
	sliderTotal = sliderWidth * pageNum;
	$slide.width(sliderTotal);
 }); */

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
};
onresize();

function next(target){
    
    if( target ){
        count = target;
    }else{
        count++;
    }

    
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
        $slide.animate({marginLeft: - ($window * count) },300,function(){
             $(".slide_nav a").removeClass("on");
             $(".slide_nav a").eq(count).addClass("on");
             
        }); 
    }
}
function prev(target){

    if( target ){
        count = target;
    }else{
        count--;
    }
    
    if(count<0){
        //1번페이지에서 뒤로 버튼 눌렀을때
        count=pageNum-1;
        //console.log('dddddd'+count);
        $slide.children("li:last").appendTo($slide);
        $slide.css('margin-left', -(sliderTotal - $window));
        $(".slide_nav a").removeClass("on");
        $(".slide_nav a").eq(count).addClass("on");
    }else{
        //count값 하나씩 줄면서 nav가 뒤로 이동.
        console.log(count);
        $slide.animate({marginLeft: '+=' + $window},300,function(){
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

var navList
//nav 클릭시 bg색 변경
$(".slide_nav a").each(function(){
   
});

//


// JAY ADDED
$(".slide_nav a").click( function(){
    var index = $(this).attr("index");
    if( count < index )
        next(index);
    else if( count > index )
        prev(index);

});