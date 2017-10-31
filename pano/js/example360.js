$(document).ready(function() {
  var stopleft = -8900 + window.innerWidth;

  function panning(){
    $('#frise').animate({
                          marginLeft: '-800px'
                        },
                        0,
                        "swing" ,  
                        function() {        
                          $('#frise').animate({
                                                marginLeft: stopleft +'px'
                                              },
                                            51000,
                                              "linear" , 
                                              function() {panning();
         })
     });
  }
  panning();
});

