$(document).ready(function() {

    var imagename = 8;
    imagename=$('#first').attr('src');
    imagename=imagename.substr(imagename.indexOf('_')+1, 333) ;
    imagename = 'fx/' + imagename;
    
    $('#second').attr('src',imagename);

    $('#second').fadeIn(13000);    
    $('#first').fadeOut(13000);    

  
});

