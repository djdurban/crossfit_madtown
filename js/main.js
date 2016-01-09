var pathname = window.location.pathname;
var firstP = {
	'width': '100%',
	'float': 'none',
	'padding-left': '0',
	'margin-bottom': '0',
	'margin-top': '6rem',
}
var leftP = {
	'width': '25%',
	'float': 'left',
	'margin-right': '2%'
}
var rightP = {
	'width': '73%',
	'float': 'left'
}
var leftPImg = {
	'width': '100%',
	'max-width': '200px'
}
var heading = {
	'clear': 'both',
	'padding-top': '6rem',
	'margin-bottom': '2rem',
	'margin-top': '0'
}
if (pathname === '/about-crossfit/') {
	$('#main p:first-child').css(firstP);
	$('#main h3 + p').css(leftP);
	$('#main h3 + p + p').css(rightP);
	$('#main h3 + p img').css(leftPImg);
	$('#main h3').css(heading);
}