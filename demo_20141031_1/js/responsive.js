$(function(){
	$('#persistent').data('location','center');
});

$(window).scroll(function(){
	if($('#source-transcript').scrollTop() > 0)
	{
		if($('#persistent').data('location') == 'center')
		{
			$('#persistent').data('location','left');
			$('#persistent').stop().animate({
				right:'200px'
			},600);
		}
	}
	else
	{
		if($('#persistent').data('location') == 'left')
		{
			$('#persistent').data('location','center');
			$('#persistent').stop().animate({
				right:'50px'
			},600);
		}
	}
});
