
/*选项卡切换*/
$(function(){
	
	//成员列表弹出层
	$(".list_item ul li").click(function(){
		 $(this).children(".hw_list_operating").slideToggle(300);
		 var tli = $(".list_item ul li").find(".hw_list_operating");
		 tli.hide();
		 $(this).children(".hw_list_operating").show();
									  });
 $(".hw-header-addnew").hover(function(){
									  $(".fq").show();
									  },function(){
										  $(".fq").hide();
										  });

});



	    	



