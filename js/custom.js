$(function() { initAccordion($(".accordion")) });
var initAccordion = function(i) {
    i.each(function() {
        var i = { heightStyle: "content", collapsible: !0, active: !1, animate: !0, beforeActivate: function(i, t) { window.location.hash = t.newHeader.attr("id") || "/" } },
            t = $(this).attr("data-active-index");
        null !== t && void 0 !== t && (i.active = Number(t));
        var n = decodeURIComponent(window.location.hash);
        $(this).find(">h3").each(function(t) { this.id = $(this).text().toLowerCase().replace(/\s+/g, "_"), n && n == "#" + this.id && (i.active = t) }), $(this).accordion(i)
    })
};
window.disableKeyNavigation = 0, window.setHashLink = 1;

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
/** code by webdevtrick ( https://webdevtrick.com ) **/
[...document.querySelectorAll('.single-column')].map(column => {
    column.style.setProperty('--animation', 'slide');
    column.style.setProperty('height', '200%');
    column.innerHTML = column.innerHTML + column.innerHTML;
});

/* header animation controls */
// This is used only for the mute button and 
// restarting the animation.
const audio = document.querySelector('audio')
const wrapper = document.querySelector('#root')
const btnAudio = document.querySelector('#btn-audio')
const btnRestart = document.querySelector('#btn-restart')

btnRestart.addEventListener('click', () => {
    wrapper.style.display = 'none'
    setTimeout(() => {
        wrapper.style.display = 'block'
        audio.currentTime = 0
        audio.play()
    }, 10)
})

btnAudio.addEventListener('click', () => {
    const elClass = 'controls__btn--toggled'
    btnAudio.classList.remove(elClass)
    audio.muted = !audio.muted

    if (audio.muted) {
        btnAudio.classList.add(elClass)
    }
})