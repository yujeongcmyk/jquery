$(function(){
  /*script 영역 html load 사용 예*/
  // $("ul li").click(function(){
  //   $(this).index()
  //   var thisId = $(this).attr("id");
  //   if (thisId == "section1"){
  //     $("#content").load("./load_file.html #section1");
  //   }else if(thisId == "section2"){
  //     $("#content").load("./load_file.html #section2");
  //   }else if(thisId == "section3"){
  //     $("#content").load("./load_file.html #section3");
  //   }


    $("ul li").click(function(){
      // click 하는 요소의 index 값을 받아온다.
      var thisIndex = $(this).index() + 1;
      var thisId = $(this).attr("id");
      if( thisId == "section"+thisIndex ){
        $("#content").load("./load_file.html #section"+thisIndex);
      }
    });
});// document ready
