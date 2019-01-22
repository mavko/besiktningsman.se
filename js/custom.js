$(function(){initAccordion($(".accordion"))});var initAccordion=function(i){i.each(function(){var i={heightStyle:"content",collapsible:!0,active:!1,animate:!0,beforeActivate:function(i,t){window.location.hash=t.newHeader.attr("id")||"/"}},t=$(this).attr("data-active-index");null!==t&&void 0!==t&&(i.active=Number(t));var n=decodeURIComponent(window.location.hash);$(this).find(">h3").each(function(t){this.id=$(this).text().toLowerCase().replace(/\s+/g,"_"),n&&n=="#"+this.id&&(i.active=t)}),$(this).accordion(i)})};window.disableKeyNavigation=0,window.setHashLink=1;
function myFunction() {
  var copyText = document.getElementById("myInput");
  copyText.select();
  document.execCommand("copy");

  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Kopierade: " + copyText.value;
}

function outFunc() {
  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Kopiera till urklipp";
}
