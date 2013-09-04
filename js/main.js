$(document).ready(function(){
	var zindexes = [1000,900,800];
	var zIndexList ={top:1000,behind:900,bottom:800};
	var sections = [];
	var activeSection;
	var lock = false;
	var selection;
	var scrolled = false;

	$("section").each(function(){ sections.push($(this))});
	for(var i= sections.length-1; i >= 1; i--){
		sections[i].hide();
	}
	activeSection = sections[0];
	activeSection.css('z-index',zindexes[0]);

	$('#nav').children('a').click(function(e){
		e.preventDefault();
		if(lock) return;
		selection = $($(this).attr('href'));
		if(selection[0] == activeSection[0]){
			$('html,body').animate({scrollTop:0}, 400);
			return;
		}
		lock = true;
		if($(window).scrollTop() > 20){
			$('html,body').animate({scrollTop:0}, 400, scrollComplete);
			//$('body').animate({scrollTop:0}, 400, scrollComplete);
		}else{
			animatePage();
		}
		
	});
	function animatePage(){
		selection.css('z-index',zindexes[1]);
		var scrollBottom = $(window).scrollTop() + $(window).height();
		selection.show();
		activeSection.animate({'left': -activeSection.width()},800,"easeInExpo",function(){
			$(this).css('z-index',zindexes[1]);
			activeSection.css('z-index',zindexes[0]);
			$(this).css('left',0);
			lock = false;
		});
		activeSection = selection;
	}
	function scrollComplete(){
		if(scrolled) {
			scrolled = false;
			return;
		}
		scrolled = true;
		animatePage();
	}
});