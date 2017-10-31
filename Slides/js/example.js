$(function() {  // document ready function
  // SETUP    **************************************************
  // n =  number of secions in main 
  var n = $('main section').length ;
  var position=0;
  var inner_w = window.innerWidth;
  var inner_h = window.innerHeight;
  var client_w = document.documentElement.clientWidth;
  var client_h = document.documentElement.clientHeight;

// choose random section to show
  r = Math.floor(Math.random()*n);
  position=-r*(client_w);
  $('#frise').css("width",((n+1)*(client_w))+"px");

// animate to choosen (random) position
  $('#frise').animate({
    marginLeft: position+'px'
  },3900);
// end of initializing document   ******************************



// navigation one way  ******************************
  $('#left').on('click', moveLeft);

// navigation another way   *************************
  $('#right').on('click', moveRight);


function moveLeft() {        // When click on left button    
    if (position>-((n-2)*client_w+200)){
      position-=(client_w);
    }
    $('#frise').animate({
      marginLeft: position+'px'
    },300,"swing");
  }

  function moveRight() {        // When click on right button    
    if(position<(-20)){
      position+=(client_w);      
    }
    $('#frise').animate({
      marginLeft: position+'px'
    },300,"swing");
  }

$(document).keydown(function(e) {
    e.preventDefault(); // prevent the default action (scroll / move caret)
    switch(e.which) {
        case 37: // left
          moveLeft()
        break;

        case 39: // right
          moveRight();
        break;

        default: 
          console.log(e.which);
        return; // exit this handler for other keys
    }
});
}); // end of ready funstion
