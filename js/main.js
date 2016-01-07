var pathname = window.location.pathname;

if (pathname === '/getting-started/2016-01-03-getting-started.html') {
	$('#contact p').css('float', 'left');
	$('#contact p').css('width', '73%');
	$('#contact p').css('padding-left', '2%');
	$('#contact h3 + p').css('width', '25%');
	$('#contact h3 + p').css('float', 'left');
	$('#contact h3 + p img').css('width', '100%');
	$('#contact h3').css('clear', 'both');
	$('#contact > p').css('width', '100%');
	$('#contact > p').css('padding-left', '0');
	$('#contact > p').css('float', 'none');
}
}
}