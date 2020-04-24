$(function(){
	//remove .complete inline styles
	$('svg.radial-progress').each(function( index, value){
	$(this).find($('circle.complete')).removeAttr('style');
	});
	//activate animation on scroll
	$(window).scroll(function() {
		$('svg.radial-progress').each(function(index, value) {
			
		
		if(
			$(window).scrollTop() > $(this).offset().top -
				($(window).height() * 0.75) &&
			$(window).scrollTop() < $(this).offset().top +
				$(this).height() - ($(window).height() * 0.25)
			){
			//get percent of progress
			percent = $(value).data('percentage');
			//get radius
			radius = $(this).find($('circle.complete')).attr('r');
			//get circumference
			circumference = 2 * Math.PI * radius;
			//get stroke-dashoffset based on percent
			strokeDashOffset = circumference - ((percent *
			circumference) / 100);
			//1.25 second transition
			$(this).find($('circle.complete')).animate({'stroke-dashoffset':
			strokeDashOffset}, 1250);
			}
		});
	}).trigger('scroll');

});	


