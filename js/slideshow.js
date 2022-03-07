//This calls the jquery library for sliding left side menu for desktop only

(function($) {

  $(document).ready(function(){

     $('.block-views-blockslideshow-block-1').addClass('col-12 py-5');
     $( '.carousel-item').first().addClass( "active" );
     $( '.carousel-indicators li').first().addClass( "active" );
     
      //shows carousel indicators dynamically
      var myCarousels = $(".carousel");

      myCarousels.each(function( index, element  ) {
        var myCarousel = $("#"+$(element).attr('id')); 
        myCarousel.append("<ol class='carousel-indicators'></ol>");
        var indicators = $("#"+$(element).attr('id') + " .carousel-indicators"); 
       
        $("#"+$(element).attr('id') +" .carousel-inner").children(".carousel-item").each(function(index) {
          console.log(index);
          (index === 0) ? 
          indicators.append("<li data-target='#"+$(element).attr('id')+"' data-slide-to='"+index+"' class='active'><a href='#'>"+ (index + 1) +"</a></li>") : 
          indicators.append("<li data-target='#"+$(element).attr('id')+"' data-slide-to='"+index+"'><a href='#'>"+ (index + 1) +"</a></li>");
        });
      });
    
      //pause and play button
      $('#play-pause-btn').click(function(){
          var $el = $(this);

          var isPlaying = $el.hasClass('isPlaying');
          var isPaused = $el.hasClass('isPaused');

          if (isPaused) {
            // we know it's paused, so play it
            $('#carousel-slideshow').carousel('cycle');
            $el.removeClass('isPaused');
            $el.addClass('isPlaying');
            
          } else if (isPlaying) {
            // we know it's playing, so pause it
            $('#carousel-slideshow').carousel('pause');
            $el.removeClass('isPlaying');
            $el.addClass('isPaused');
            
          }
       });

       

  });


  
})(jQuery);
