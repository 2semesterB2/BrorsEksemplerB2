$(document).ready(function() {
  var stopleft = -5234 + window.innerWidth;

  function panning(){
    $('#frise').animate({
                          marginLeft: '0px'
                        },
                        30000,
                        "swing" ,  
                        function() {        
                          $('#frise').animate({
                                                marginLeft: stopleft +'px'
                                              },
                                              70000,
                                              "linear" , 
                                              function() {panning();
         })
     });
  }
  panning();
});

