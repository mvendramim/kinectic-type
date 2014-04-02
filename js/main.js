$(document).ready(function(){
$(document).ready(function() {
  $('a.tips').cluetip();

  $('.tip').cluetip({
    splitTitle: '|', // use the invoking element's title attribute to populate the clueTip...
                     // ...and split the contents into separate divs where there is a "|"
    sticky: true, closePosition: 'title', cluetipClass: 'rounded',  dropShadow: false, arrows: true, activation: 'click', closeText: '<img src="http://i.imgur.com/M6LJNxW.png"></img>',fx: {open: 'fadeIn', openSpeed:  'slow', },
  });
});
    
    

  
    $(".tip-top").tooltip({
        placement : 'top'
    });
    $(".tip-right").tooltip({
        placement : 'right'
    });
    $(".tip-bottom").tooltip({
        placement : 'bottom'
    });
    $(".tip-left").tooltip({
        placement : 'left'
    });
    
    $('[data-toggle="popover"]').popover({
    trigger: 'click',
        'placement': 'right'
});
    
    
    
});

$(function() {
  $('a[href*=#home]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top -200
        }, 1000);
        return false;
      }
    }
  });
});

$(function() {
  $('a[href*=#thepoem]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top -200
        }, 1000);
        return false;
      }
    }
  });
});

$(function(){
            $.stellar({
                horizontalScrolling: false,
                verticalOffset: 0,
            });
        });




