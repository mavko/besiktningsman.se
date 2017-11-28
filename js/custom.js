$(function() {
  initAccordion($(".accordion"));
});

var initAccordion = function(_t) {
    _t.each(function() {
        var obj = {
            heightStyle: 'content',
            collapsible: true,
            active: false,
            animate: true,
            beforeActivate: function( event, ui ) {
                window.location.hash = ui.newHeader.attr('id') || "/";
            }
        };

        var attr = $(this).attr('data-active-index');
        if(attr !== null && attr !== undefined) {
            obj.active = Number(attr);
        }

        var hash = decodeURIComponent(window.location.hash);
        $(this).find('>h3').each(function(i){
            this.id = $(this).text().toLowerCase().replace(/\s+/g, '_');
            if(hash && hash == '#'+this.id) {
                obj.active = i;
            }
        });
        $(this).accordion(obj);
    });
};

window.setHashLink = 1;
