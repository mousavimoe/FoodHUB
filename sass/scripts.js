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

     $('.js--wp-1').waypoint(function (direction) {
      $('.js--wp-1').addClass('animate__animated animate__fadeInBottomLeft');
     },{offset: '69%;'});

     $('.js--wp-2').waypoint(function (direction) {
      $('.js--wp-2').addClass('animate__animated animate__fadeInBottomRight');
     },{offset: '45%;'});

     $('.js--wp-3').waypoint(function (direction) {
      $('.js--wp-3').addClass('animate__animated animate__fadeInLeftBig');
     },{offset: '60%;'});

     $('.js--wp-4').waypoint(function (direction) {
      $('.js--wp-4').addClass('animate__animated animate__fadeIn');
     },{offset: '60%;'});

     $('.js--wp-5').waypoint(function (direction) {
     $('.js--wp-5').addClass('animate__animated animate__fadeIn');
     },{offset: '60%;'});

     $('.js--wp-6').waypoint(function (direction) {
     $('.js--wp-6').addClass('animate__animated animate__fadeInRightBig');
     },{offset: '60%;'});

     $('.js--h2-about-us').waypoint(function (direction) {
     $('.js--h2-about-us').addClass('animate__animated animate__fadeIn');
     },{offset: '65%;'});

     $('.js--h2-our-activity').waypoint(function (direction) {
     $('.js--h2-our-activity').addClass('animate__animated animate__fadeIn');
     },{offset: '65%;'});

     $('.js--h2-our-vision').waypoint(function (direction) {
     $('.js--h2-our-vision').addClass('animate__animated animate__fadeIn');
     },{offset: '65%;'});

     $('.js--h2-contact-us').waypoint(function (direction) {
      $('.js--h2-contact-us').addClass('animate__animated animate__fadeIn');
      },{offset: '65%;'});

      $('.js--h3-network').waypoint(function (direction) {
      $('.js--h3-network').addClass('animate__animated animate__fadeIn');
      },{offset: '65%;'});

      $('.js--h3-quality').waypoint(function (direction) {
      $('.js--h3-quality').addClass('animate__animated animate__fadeIn');
      },{offset: '65%;'});

      $('.js--h3-packaging').waypoint(function (direction) {
      $('.js--h3-packaging').addClass('animate__animated animate__fadeIn');
      },{offset: '65%;'});

      $('.js--h3-our-excellence').waypoint(function (direction) {
      $('.js--h3-our-excellence').addClass('animate__animated animate__fadeIn');
      },{offset: '65%;'});

      $('.js--h3-our-vision').waypoint(function (direction) {
      $('.js--h3-our-vision').addClass('animate__animated animate__fadeIn');
         },{offset: '65%;'});

      $('.js--h3-our-mission').waypoint(function (direction) {
      $('.js--h3-our-mission').addClass('animate__animated animate__fadeIn');
            },{offset: '65%;'});

      $('.js--h3-address').waypoint(function (direction) {
      $('.js--h3-address').addClass('animate__animated animate__fadeIn');
         },{offset: '65%;'});

      $('.js--h3-phone').waypoint(function (direction) {
      $('.js--h3-phone').addClass('animate__animated animate__fadeIn');
            },{offset: '65%;'});

      $('.js--h3-email').waypoint(function (direction) {
      $('.js--h3-email').addClass('animate__animated animate__fadeIn');
               },{offset: '65%;'});

      $('.js--txt-history').waypoint(function (direction) {
      $('.js--txt-history').addClass('animate__animated animate__slideInLeft');
      },{offset: '65%;'});

       

});