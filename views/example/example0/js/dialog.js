jQuery.extend({
    sayhello:function(x){
        console.log(x);
      }
});

(function(b){
	b.fn.dialog=function(m){
		var f=b.extend({
			timeToHide:1200,
			type:0, //0立刻弹出，1延时，2淡出,3顶部飞入
			height:100,
			width:100,
		},m);
		$('.pop-dialog').html(createDialog());
		$('.pop-dialog').show();
		$('.dialog').css('height',m.height);
		$('.dialog').css('width',m.width);
		if(m.type==0){
			$('.dialog').show();
		}
		if(m.type==1){
			$('.dialog').fadeIn(2000);
			//$(".dialog").fadeTo("slow",0.7);
			//$('.dialog').fadeToggle(2000);
		}
		if(m.type==2){
			//$(".dialog").slideDown("slow");
			$(".dialog").slideToggle("slow");
		}
		if(m.type==3){
			$(".dialog").addClass('flyInTopDialog');
		}
		if(m.type==7){
			$(".dialog").addClass('rollDialog');
		}
		if(m.type==8){
			$(".dialog").addClass('rollLeftDialog');
		}
	};		
}(jQuery));
	
function createDialog(){
	var elem = "<div class='dialog'><p class='closeDialog' onclick='closeDialog()'>X<p><div>This is dialog</div></div>";
	return(elem);
}

function closeDialog(){
	$('.pop-dialog').hide();
	$('.dialog').hide();
}





