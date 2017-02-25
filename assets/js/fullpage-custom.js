$(document).ready(function() {        
	
	/* ======= Fullpage.js ======= */ 
	/* Ref: https://github.com/alvarotrigo/fullPage.js */
        
    $('#fullpage').fullpage({
		anchors: ['home', 'substratum', 'ota', 'configurable'],
		navigation: true,
		navigationPosition: 'right',
		navigationTooltips: ['Home', 'Substratum', 'Ota', 'Configurable'],
		resize : false,
		scrollBar: true,
		autoScrolling: false,
		paddingTop: '120px'
		
	});
    

});