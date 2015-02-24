// Implement the Konami Code on a webpage


(function($) {
    
	var resetProgress,
		cheatProgress = 0,
		// An array of the keycodes for the code
		code = [
			// up up down down left right left right b a
			38, 38, 40, 40, 37, 39, 37, 39, 66, 65
		],
		// How much time to allow between keypresses
		time = 500;

	$( document ).bind( 'keydown.konami', function( event ) {
		
		if ( event.keyCode === code[ cheatProgress ] ) {
			clearTimeout( resetProgress );
			if ( cheatProgress === code.length - 1 ) {
				$( document ).trigger( 'cheat.konami' );
				cheatProgress = 0;
			} else {
				resetProgress = setTimeout( function() {
					console.log( 'Progress reset.' );
					cheatProgress = 0;
				}, time );
				cheatProgress += 1;
			}
			console.log( event.keyCode );
		}
	});
	
	$( document ).bind( 'cheat.konami', function() {
		pudding();
	});

})( jQuery );
