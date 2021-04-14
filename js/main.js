$(function(){
  var w, h, t;
	var num = 0;
	var link = "";
	var startFlag = false;

	setTimeout(function(){
		$("body, html").animate({scrollTop : 0}, 800, function(){
			$("#page2").removeClass("active");
			startFlag = true;
		});
	}, 150);


	/* resize event */
	$(window).resize(function(){
		w = $(window).width();
		h = $(window).height();
	});
	$(window).trigger("resize");


	/* scroll event */
	$(window).scroll(function(){
		if(startFlag == false){
			return false;
		}

		t = $(window).scrollTop();

		if(t < $("#footer").offset().top){
			$("#page2").addClass("active");
		}
		
		if(t > 150){
			$(".fixed").addClass("active");
		} else{
			$(".fixed").removeClass("active");
		}
	});
	$(window).trigger("scroll");


	/* click event */
	$("#nav .gnb a").click(function(e){
    e.preventDefault();
		link = $(this).attr("href");
		$("body, html").animate({scrollTop : $(link).offset().top}, 400);

		num = $(this).parent().index();

		return false;
	});


  /* keyvisual */
  var typingBool = false; 
  var typingIdx = 0; 
  var liIndex = 0;
  var liLength = (".typing-txt > ul > li").length;
	var typingTxt = $(".typing-txt > ul > li").eq(liIndex).text(); 
	
  typingTxt = typingTxt.split("");

  if(typingBool == false){
    typingBool = true;
    var tyInt = setInterval(typing, 100);
  } 
     
  function typing(){ 
    if(typingIdx < typingTxt.length){
      $(".typing").append(typingTxt[typingIdx]);
      typingIdx++; 
    } else{
      if(liIndex >= liLength - 1){
        liIndex = 0;
      } else{
        liIndex++; 
      }
     
    	typingIdx = 0;
      typingBool = false; 
      typingTxt = $(".typing-txt > ul > li").eq(liIndex).text(); 
       
			clearInterval(tyInt);
			
      setTimeout(function(){
        $(".typing").html('');
          tyInt = setInterval(typing, 100);
        }, 1000);
    } 
	}


	/* btn_scroll */
	$(".btn_scroll a").click(function(e){
		e.preventDefault();
		$("html, body").animate({scrollTop : $($(this).attr("href")).offset().top}, 500, "linear");
	});


	/* cont4 event */
	$(".skills .icons li").eq(0).addClass("on");
	$(".skills .desc .txt.on").show();
	
	$(".skills .icons li").click(function(e){
		e.preventDefault();
		var tabType = $(this).index();
		$(".skills .desc div").hide();
		$(".skills .desc div").eq(tabType).show();
		$(".skills .icons li").removeClass("on");
		$(".skills .icons li").eq(tabType).addClass("on");
	});
	
	
	/* btn_top */
	$(".btn_top").hide();
	
	$(window).scroll(function(){
		if($(this).scrollTop() > 500) {
			$(".btn_top").fadeIn(300);
		} else {
			$(".btn_top").fadeOut(300);
		}
	});
	
	$(".gotop").click(function(){
		$("html, body").animate({scrollTop : 0}, 400);
		return false;
	});
});