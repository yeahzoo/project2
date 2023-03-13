$(document).ready(function(){
  /* 상단 이미지 */

  let $simg=$(".slide ul");
  let $simgli=$(".slide ul li");
  let $sbtn=$(".slide_btn ul li");
  let $snext=$(".slide_side_btn .nex");
  let $spre=$(".slide_side_btn .pre");
  let simg_w=$simgli.width();
  let simg_n=$simgli.length;
  let soldidx=0;
  
  let sindex=0;


  function slideImg(sindex){

    targetX=-(sindex*simg_w)

    $simg.animate({left:targetX},600);
    $sbtn.eq(soldidx).removeClass("active");
    $sbtn.eq(sindex).addClass("active");
    soldidx=sindex;
  }

  function slideAuto(){

    sindex++;
    if(sindex==simg_n){
      sindex=0;
    }
    slideImg(sindex);

  };
  auto=setInterval(slideAuto,4000);

  $sbtn.click(function(){

    clearInterval(auto);
    $(".play").hide();
    $(".stop").show();
    sindex=$(this).index();
    slideImg(sindex);
    auto=setInterval(slideAuto,4000);

  });

  //content2 라면종류
  $(".content2 ul li").click(function(){

  });

  //content3 레시피
  $(".tab_btn li").click(function(){

    $(this).addClass("active");
    $(this).siblings().removeClass("active");

    let result = $(this).attr("data-alt"); 
    $(".tabContents div").removeClass("active");
    $("#" + result).addClass("active");
    
  });



});