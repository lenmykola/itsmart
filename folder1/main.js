$( document ).ready(function(){
  $(".msg2").fadeOut( );
  $(`.pict`).fadeOut();
});
$('.question').click(function() {
    $('.nav').slideToggle();
    
        if (!$(this).data('status')) {
          
          $(this).data('status', true);
          $(`.question`).toggleClass('active');
        $(`.question2`).toggleClass('active1');
        }
        else {
          
          $(this).data('status', false);
          $(`.question`).toggleClass('active2');
          $(`.question2`).toggleClass('active3');
        }
       
  });
  $('.cross').click(function() {
    $('.nav').slideToggle();
    
        
    $('.question').data('status', true);
    
      
    
    
        $(`.question`).toggleClass('active2');
        $(`.question2`).toggleClass('active3');
  });
  let a=0;
  
  function testFunction() {
    if(a>0)
    {
     $(this).data('status', true);
    }
    if (!$(this).data('status')) {
    var x = document.getElementById("testInput").value;
    document.getElementById("msg2").innerHTML =  x;
    document.getElementById("msg1").innerHTML =  x+", задайте ваш вопрос.";
    $(".msg2").fadeIn( );

    }
  
  }
  
  $(".butt1").click(function(){ 
   
    if (!$(this).data('status')) {
      a++;
      $(this).data('status', true);
      $(`#msg1`).toggleClass('active7');
      $('.input1').val('').change();
      $('.input1').attr("placeholder", "Введите Ваш вопрос...");
    }
   
    
   });
  