$(document).ready(function(){
	var INT_TOP_ZINDEX = 1000;
	var INT_HIDDEN = 99;
	$('#nav').children('a').click(function(e){
		e.preventDefault();
		var self = $(this);
		if(self.css("z-index") == hidden+""){
			alert("POTATO");
		}
		var siteSection = $(this).attr('href');
		console.log(siteSection);
		//$(siteSection).css('z-index',INT_TOP_ZINDEX);
		$('body').css('overflow-y', 'hidden');
		var scrollBottom = $(window).scrollTop() + $(window).height();
		$(siteSection).animate({'top': scrollBottom},1000,"easeInExpo");
	});
});