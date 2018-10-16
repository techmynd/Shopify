/* ===================== */
/* Document Ready Starts */
/* ===================== */

$(document).ready(function(){
  
  // add defer if its not in script tags
  $('script').each(function(){
    if( !$(this).attr('defer') || $(this).attr('defer', '') ) {
      $(this).attr('defer', 'defer');
    }
  });
  // end defer
    
});

/* =================== */
/* Document Ready Ends */
/* =================== */

/* ============== */
/* On Load Starts */
/* ============== */

$(window).on('load', function(){
  // ....
});

/* ============ */
/* On Load Ends */
/* ============ */

/* ================ */
/* On Resize Starts */
/* ================ */

$(window).on('resize', function(){
  // ....
});

/* ============== */
/* On Resize Ends */
/* ============== */

/* =============== */
/* Functions Start */
/* =============== */

// function description
var functionName = function(){

}

/* ============= */
/* Functions End */
/* ============= */