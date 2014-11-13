$(document).ready(function() {

// most of this code was imported source code which was slightly altered by me (Dan M.)

// VARS

    var $logo = $('.logo');
    var $projects_link = $('.projects_link');
    var $about_link = $('.about_link');
    var $contact_link = $('.contact_link , .getintouch');
    var $thumb = $('.thumb');
    var $thumb_image = $('.thumb_image');
    var $thumb_hover = $('.thumb_hover');
    var $project_nav = $('.project_nav');
    var $about_nav = $('.about_nav');
    var $project_close = $('.close , .finclose');
    var $header_nav = $('.nav');
    var $intro_bg = $('#intro_screen');
    var $bg1 = $('.bg1');
    var $bg2 = $('.bg2');
    var $bg3 = $('.bg3');
    var $border = $('.border1');
    var $mobile_nav = $('.mobile_nav');
    var $mobile_nav_menu = $('#mobile_nav_menu');
    var $mobile_close = $('.mobile_close');
    var $title1 = $('.title');
    var $title2 = $('.title2');
    var $title3 = $('.title3');
    var $next = $('.arrow_right , .finnext');
    var $prev = $('.arrow_left , .finprev');
    var $fin = $('.fin');
    var $loader = $('#loader');
    var $loadicon = $('.loadcontainer');
    var $etf = $('.brent');

    var $project_open = false;
    var $about_open = false;
    var $bg1active = true;
    var $bg2active = false;
    var $bg3active = false;

    var $width = $(window).width();
    var $resizeDone;


// NEXT/PREV

    $myProjectLinks = ["project_thesis.html", "project_conceptualthinking.html", "sketch.html", "UI-UX-DEV.html", "project_3dmodeling.html", "photoshopmagic.html", "blueprints.html"]
    var i = 0;

    $next.click(function() {
        if (i >= $myProjectLinks.length -1) {
            i=0;
        }

        else {
            i++;
        }
        setTimeout(function(){

            $('#project_container').load($myProjectLinks[i] + ' #project', function() {

                $('html, body').delay(2000).animate({
                    scrollTop: ($('#project_container').offset().top)
                },700,'easeInOutExpo');

                $loader.delay(2000).animate({opacity:"0",},"slow", function() {
                    $loadicon.stop(true).animate({top:"60%"},500,'easeOutExpo');
                    $loader.css('display', 'none');
                });
            });
        }, 600);

        $loader.css('display', 'block');
        $loadicon.stop(true).animate({top:"50%"},500,'easeOutExpo');
        $loader.animate({opacity:"1",},400,'easeOutCubic');

    });

    $prev.click(function() {
        if (i <= 0) {
            i=$myProjectLinks.length -1;
        }

        else {
            i--;
        }

        setTimeout(function(){

            $('#project_container').load($myProjectLinks[i] + ' #project', function() {

                $('html, body').delay(2000).animate({
                    scrollTop: ($('#project_container').offset().top)
                },700,'easeInOutExpo');

                $loader.delay(2000).animate({opacity:"0",},"slow", function() {
                    $loadicon.stop(true).animate({top:"60%"},500,'easeOutExpo');
                    $loader.css('display', 'none');
                });
            });
        }, 600);

        $loader.css('display', 'block');
        $loadicon.stop(true).animate({top:"50%"},500,'easeOutExpo');
        $loader.animate({opacity:"1",},400,'easeOutCubic');
    });


// BG HERO SWITCH

    myInterval = setInterval(heroSwitch,9000);

    function heroSwitch(){
        if ($bg1active == true && $bg2active == false) {
            $bg1active = false;
            $bg2active = true;

            function changeBg() {
                $bg1.animate({ opacity: "0" },2000, 'easeInOutCubic', function() {
                    $bg1.css('visibility', "hidden");
                    $bg2.css('visibility', "visible");
                });
            }
            changeBg();
        }

        else if ($bg1active == false && $bg2active == true) {
            $bg1active = true;
            $bg2active = false;

            function changeBg2() {
                $bg1.css('visibility', "visible");
                $bg2.css('visibility', "visible");
                $bg1.animate({ opacity: "1" },2000, 'easeInOutCubic');
            }
            changeBg2();
        }
    }

// PROJECT NAV

    $(window).on('scroll', function() {
        var scrollTop = $(this).scrollTop();

        $('#project_hero').each(function() {
            var topDistance = $(this).offset().top;

            if ( (topDistance-30) < scrollTop ) {
                $project_open = true;
                $project_nav.css('display', 'block');
                $project_nav.stop(true).animate({ marginRight: "0", opacity: "1" },200, 'easeOutExpo');
            }

            else {
                $project_open = false;
                $project_nav.stop(true).animate({ marginRight: "-130px", opacity: "0" },200, 'easeOutExpo', function() {
                    $project_nav.css('display', 'none');
                });
            }
        });
    });

// LOGO CLICK

    $logo.click(function() {
        $('html, body').animate({
            scrollTop: (0)
        },700,'easeInOutExpo');
    });

// PROJECT LINK

    $projects_link.click(function() {
        $('html, body').animate({
            scrollTop: ($('#all_projects').offset().top -60)
        },700,'easeInOutExpo');

        $mobile_nav_menu.animate({
            right:"-273px",      
        },500,'easeInOutExpo')
    });

// ABOUT LINK

    $about_link.click(function() {
        $('html, body').animate({
            scrollTop: ($('#about_hero').offset().top)
        },700,'easeInOutExpo');

        $mobile_nav_menu.animate({
            right:"-273px",      
        },500,'easeInOutExpo')
    });

// CONTACT LINK

    $contact_link.click(function() {
       $('html, body').animate({
            scrollTop: ($('#footer').offset().top)
        },700,'easeInOutExpo');

        $mobile_nav_menu.animate({
            right:"-273px",      
        },500,'easeInOutExpo')
    });

// THUMB CLICK

    $thumb.click(function() {
        i = $(this).data('num');
        $('#project_container').load($(this).data('url') + ' #project', function() {
            
            $('html, body').delay(2000).animate({
                scrollTop: ($('#project_container').offset().top)
            },700,'easeInOutExpo');

            $fin.css('display', 'block');
            
            $loader.delay(2000).animate({opacity:"0",},"slow", function() {
                $loadicon.stop(true).animate({top:"60%"},500,'easeOutExpo');
                $loader.css('display', 'none');
            });
        });

        $loader.css('display', 'block');
        $loadicon.stop(true).animate({top:"50%"},500,'easeOutExpo');
        $loader.animate({opacity:"1",},400,'easeOutCubic');

    });

// THUMB HOVER

    $thumb.hover(function() {
        $(this).find('.thumb_hover').css('opacity', '1');
        $(this).find('.view_project').stop(true).animate({
            top:"50%", opacity:"1",      
        },500,'easeOutExpo')
    }, function() {
        $(this).find('.thumb_hover').css('opacity', '0');
        $(this).find('.view_project').stop(true).animate({
            top:"70%", opacity:"0",      
        },500,'easeOutExpo')
    });

// PROJECT CLOSE

    $project_close.click(function() {
        $('html, body').animate({
            scrollTop: ($('#all_projects').offset().top -60)
        },700,'easeInOutExpo', function() {
            $project_open = false;
            $about_open = false;
            $('#project').remove();
            $fin.css('display', 'none');
        });

        i=0;
    });

// MOBILE NAV

    $mobile_nav.click(function() {
       $mobile_nav_menu.animate({
            right:"0",      
        },500,'easeInOutExpo')
    });

    $mobile_close.click(function() {
       $mobile_nav_menu.animate({
            right:"-273px",      
        },500,'easeInOutExpo')
    });

// ELECTRIC BRENT

    $etf.click(function() {
        window.open('electric.html');
    });

// WINDOW RESIZE

    $(window).resize(function () {
        clearInterval(myInterval);

        clearTimeout($resizeDone);
        $resizeDone = setTimeout(doneResizing, 500);
    });

    function doneResizing(){
      myInterval = setInterval(heroSwitch,12000);
    }
});




