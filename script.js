$(function () {
    "use strict";


$("#loader").delay(1000).fadeOut("slow");



const wow = new WOW({
    boxClass: 'animate',
    animateClass: 'animated',
    offset: '90',
    mobile: false
});
wow.init();

});