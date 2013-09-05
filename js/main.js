$(document).ready(function(){
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
	activeSection.css('z-index',zIndexList.top);

	$('#nav').children('a').click(function(e){
		if(lock) return;
		if($(this).attr('href').charAt(0) != '#'){
			return;
		}
		e.preventDefault();
		selection = $($(this).attr('href'));

		if(selection[0] == activeSection[0]){
			$('html,body').animate({scrollTop:0}, 400);
			return;
		}
		$(this).parent().children().removeClass("active");
		$(this).addClass('active');

		lock = true;
		if($(window).scrollTop() > 20){
			$('html,body').animate({scrollTop:0}, 400, scrollComplete);
		}else{
			animatePage();
		}
		
	});
	function animatePage(){
		selection.css('z-index',zIndexList.behind);
		selection.show();
		activeSection.animate({'left': -activeSection.width()},800,"easeInExpo",function(){
			$(this).css('z-index',zIndexList.behind);
			activeSection.css('z-index',zIndexList.top);
			$(this).css('left',0);
			$(this).hide();
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
	$('.project-info').hide();
	$('.portfolio').find('.project-thumbnail').children('a').on('mouseenter',function(){
		$(this).next().stop(true).animate({'bottom':0},400);
	}).on('mouseleave',function(){
		$(this).next().stop(true).animate({'bottom':-50},400);
	}).on('click',function(evt){
		var self = $(this);
		evt.preventDefault();
		self.parent().next().slideToggle(400);
	});
		


});