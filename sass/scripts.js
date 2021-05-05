$(document).ready(function() {

    $('.abts').click(function () {
        $('html, body').animate({scrollTop: $('.sec-about-us').offset().top}, 100); 
     });

     $('.actvt').click(function () {
        $('html, body').animate({scrollTop: $('.sec-our-activity').offset().top}, 100); 
     });

     $('.vsn').click(function () {
        $('html, body').animate({scrollTop: $('.sec-our-vision').offset().top}, 100); 
     });

     $('.cntcts').click(function () {
        $('html, body').animate({scrollTop: $('.sec-contact-us').offset().top}, 100); 
     });
     
});