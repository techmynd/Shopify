$(document).ready(function(){
	// ....
  
  //add defer if its not in script tag  
  $('script').each(function(){
  	if( !$(this).attr('defer') || $(this).attr('defer', '') ) {
       $(this).attr('defer', 'defer');
    }
  });
  //end 
  	
});


$(window).on('load', function(){
	// ....
});


$(window).on('resize', function(){
	// ....
});



// FUNCTIONS
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////


// function description
var functionName = function(){

}
