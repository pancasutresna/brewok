(function($){
    $(function(){

        $('.button-collapse').sideNav();
        $('.parallax').parallax();
        $('#owl').owlCarousel({
            margin:10,
            items:2,
            nav:false,
            autoHeight: true,
            itemsDesktopSmall: [1199,2],
            itemsTablet:[768,2],
            itemsMobile:[550,1]
        });

        $('.slider').slider();

        $('#fullpage').fullpage({
            lockAnchors: false,
            anchors: ['home', 'about', 'school', 'works', 'skills', 'portfolio', 'contact', 'last'],
            css3: true,
            scrollOverflow: true,
            'navigation': false,
            'navigationPosition': 'right',
            'afterLoad': function(anchorLink, index){
                if(index == 3 || index == 4 || index == 6 || index == 7 ){
                    $('nav ul a').removeClass('light-nav');
                    $('nav ul a').addClass('dark-nav');

                    $('.button-collapse').removeClass('light-nav');
                    $('.button-collapse').addClass('dark-nav');

                    $('.brand-logo').removeClass('light-nav');
                    $('.brand-logo').addClass('dark-nav');
                }else{
                    $('nav ul a').removeClass('dark-nav');
                    $('nav ul a').addClass('light-nav');

                    $('.button-collapse').removeClass('dark-nav');
                    $('.button-collapse').addClass('light-nav');

                    $('.brand-logo').removeClass('dark-nav');
                    $('.brand-logo').addClass('light-nav');

                }
            },
            'onLeave': function(index, nextIndex, direction){

                // section 0 (index) animation
                $('#section0 .section-title').toggleClass('fadeInDown', nextIndex == 1);
                $('#section0 .section-content').toggleClass('fadeIn', nextIndex == 1);

                // section 1 (about) animation
                $('#section1 .section-title').toggleClass('fadeInDown', nextIndex == 2);
                $('#section1 .section-content').toggleClass('fadeIn', nextIndex == 2);

                // section 2 (education) animation
                $('#section2 .section-title').toggleClass('fadeInDown', (nextIndex == 3));
                $('#section2 .section-content').toggleClass('fadeIn', (nextIndex == 3 ));

                // section 3 (education) animation
                $('#section3 .section-title').toggleClass('fadeInDown', (nextIndex == 4));
                $('#section3 .section-content').toggleClass('fadeIn', (nextIndex == 4 ));

                // section 4 (education) animation
                $('#section4 .section-title').toggleClass('fadeInDown', (nextIndex == 5));
                $('#section4 .section-content').toggleClass('fadeIn', (nextIndex == 5 ));

                // section 5 (education) animation
                $('#section5 .section-title').toggleClass('fadeInDown', (nextIndex == 6));
                $('#section5 .section-content').toggleClass('fadeIn', (nextIndex == 6 ));

                // section 6 (Contact Us) animation
                $('#section6 .section-title').toggleClass('fadeInDown', (nextIndex == 7));
                $('#section6 .section-content').toggleClass('fadeIn', (nextIndex == 7 ));

                // section 7 (Contact Us) animation
                $('#section7 .section-content').toggleClass('fadeIn', nextIndex == 8);

            }
        });

        $('header').css({ 'height': $(window).height() });
        $(window).on('resize', function() {
            $('header').css({ 'height': $(window).height() });
            $('body').css({ 'width': $(window).width() })
        });

        function showImage(){
            //vat myImage = document.getElementById(imageId);
            //myImage.setAttribute('class', '')
            console.log('test');
        }



           //$(document).on('scroll', function(){
        //    var o = $(document).scrollTop() / 500;
        //    if(o > 1.000){
        //        o = 1;
        //    }
        //
        //    var e = $('nav');
        //    var currentColor = e.css('background-color');
        //    var rgb = currentColor.replace(/^(rgb|rgba)\(/, '').replace(/\)$/, '').replace(/\s/g, '').split(',');
        //    var newColor = 'rgba(' + rgb[0] + ', ' + rgb[1] + ', ' + rgb[2] + ', ' + o + ')';
        //    e.attr('style', 'background-color:' + newColor + ' !important');
        //});

    }); // end of document ready
})(jQuery); // end of jQuery name space