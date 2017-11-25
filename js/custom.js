// accordion jquery ui menu
$( function() {
  // $( ".accordion" ).accordion({
  //   collapsible: true,
  //   heightStyle: "content",
  //   active : 'none'
  // });

  var hashId = 0,
    $accordion = $('.accordion');
  if (window.location.hash) {
    $accordion.children('h3').each(function(i){
      var txt = $(this).text().toLowerCase().replace(/\s+/g,'_');
      console.log(txt);

      this.id = txt;
      if (txt === window.location.hash.slice(1)) {
        hashId = i;
      }
    });
  }

  $accordion.accordion({
    active: hashId,
    animate: false,
    heightStyle: 'content',
    collapsible: true,
    create: function( event, ui ) {
      $accordion.children('h3').each(function(i){
        $(this).before('<a class="accordion-link link" data-index="' + i + '" href="#' + this.id + '"></a>');
      });
      $accordion.find('.accordion-link').click(function(){
        $accordion.accordion( "option", "active", $(this).data('index') );
      });
    }
  });

});

// force hashlinks
window.setHashLink = 1;
// accordion
