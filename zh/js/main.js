;(function () {
    
    'use strict';
    
    
    
    // iPad and iPod detection	
    var isiPad = function(){
        return (navigator.platform.indexOf("iPad") != -1);
    };
    
    var isiPhone = function(){
        return (
                (navigator.platform.indexOf("iPhone") != -1) || 
                (navigator.platform.indexOf("iPod") != -1)
                );
    };
    
    
    if(!isPhone()){
        $('#fullpage').fullpage({
            'verticalCentered': true,
            'css3': true,
            'anchors': ['pages1','pages2','pages3','pages4','pages5','pages6','pages7','pages8','pages9','pages10','pages11'],
            'menu':'#fh5co-primary-menu',
            'navigation': true,
            'navigationPosition': 'right',
            afterLoad:function(link,index){
                console.log("index="+index);
                $('.li_border').removeClass("li_border");
                if(index===1){
                    $('li#li-about').addClass("li_border");
                }
                if(index===2){
                    $('li#li-product').addClass("li_border");
                }
                if(index===3){
                    $('li#li-markting').addClass("li_border");
                }
                if(index>=4&&index<8){
                    $('li#li-tech').addClass("li_border");
                }
                if(index>=8&&index<11){
                    $('li#li-team').addClass("li_border");
                }
                if(index===11){
                    $('li#li-connect').addClass("li_border");
                }
                let ind = index - 1;
                console.log($('.section').eq(ind));
                $('.section').eq(ind).find('.animate-box').each(function(){
                    let animated = $(this).hasClass('animated');
                    console.log('animated:',animated);
                    if(!animated){
                        
                        var that = $(this);
                        
                        // var times = setInterval(function(){
                        that.addClass('animated fadeInUp');
                        // },400)
                        
                    }
                })
                
            }
        })
    }
    
    // Main Menu Superfish
    var mainMenu = function() {
        
        $('#fh5co-primary-menu').superfish({
            delay: 0,
            animation: {
                opacity: 'show'
            },
            speed: 'fast',
            cssArrows: true,
            disableHI: true
        });
        
    };
    
    // Parallax
    var parallax = function() {
        $(window).stellar();
    };
    
    
    // Offcanvas and cloning of the main menu
    var offcanvas = function() {
        
        var $clone = $('#fh5co-menu-wrap').clone();
        $clone.attr({
            'id' : 'offcanvas-menu'
        });
        $clone.find('> ul').attr({
            'class' : '',
            'id' : ''
        });
        
        $('#fh5co-page').prepend($clone);
        
        // click the burger
        $('.js-fh5co-nav-toggle').on('click', function(){
            
            if ( $('body').hasClass('fh5co-offcanvas') ) {
                $('body').removeClass('fh5co-offcanvas');
            } else {
                $('body').addClass('fh5co-offcanvas');
            }
            // $('body').toggleClass('fh5co-offcanvas');
            
        });
        
        $('#offcanvas-menu').css('height', $(window).height());
        
        $(window).resize(function(){
            var w = $(window);
            
            
            $('#offcanvas-menu').css('height', w.height());
            
            if ( w.width() > 769 ) {
                if ( $('body').hasClass('fh5co-offcanvas') ) {
                    $('body').removeClass('fh5co-offcanvas');
                }
            }
            
        });	
        
    }
    
    
    
    // Click outside of the Mobile Menu
    var mobileMenuOutsideClick = function() {
        $(document).click(function (e) {
	    var container = $("#offcanvas-menu, .js-fh5co-nav-toggle");
	    if (!container.is(e.target) && container.has(e.target).length === 0) {
                if ( $('body').hasClass('fh5co-offcanvas') ) {
                    $('body').removeClass('fh5co-offcanvas');
                }
	    }
        });
    };
    
    
    // Animations
    
    var contentWayPoint = function() {
        var i = 0;
        $('.animate-box').waypoint( function( direction ) {
            
            if( direction === 'down' && !$(this.element).hasClass('animated') ) {
                
                i++;
                
                $(this.element).addClass('item-animate');
                setTimeout(function(){
                    
                    $('body .animate-box.item-animate').each(function(k){
                        var el = $(this);
                        setTimeout( function () {
                            el.addClass('fadeInUp animated');
                            el.removeClass('item-animate');
                        },  k * 200, 'easeInOutExpo' );
                    });
                    
                }, 100);
                
            }
            
        } , { offset: '85%' } );
    };
    
    
    // Document on load.
    $(function(){
        mainMenu();
        parallax();
        offcanvas();
        mobileMenuOutsideClick();
        contentWayPoint();
    });
}());

function isPhone(){
    var flag = false; 
    var userAgentInfo = navigator.userAgent; 
    var Agents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"]; 
    for (var i = 0; i < Agents.length; i++) { 
        if (userAgentInfo.indexOf(Agents[i]) > 0) { 
            flag = true; 
            break; 
        } 
    }
    console.log(flag);
    return flag;
}