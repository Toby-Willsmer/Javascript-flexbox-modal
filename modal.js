var $modal      = $('.modal'),
    openclse    = ['open', 'close'],
    close_class     = ['.modal-close', '.modal-close-link'],
    action_class    = ['.modal-link', '.modal-bg', '.modal-closer'],
    open_modal  = function() {
      $modal.addClass(openclse[0]);
    },
    close_modal = function() {
      $modal.removeClass(openclse[0]);
      $modal.addClass(openclse[1]);
      $modal.one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function() {
        $modal.removeClass(openclse[1]);
      });
    };

$(action_class[0]).click(function() {                                     // open modal
  open_modal();
});

$(action_class[2]).prepend( $('<a href="#" class="modal-close"></a>') );  // adds 'close' to modal-container if class 'modal-closer' is in HTML

$(close_class.join() + ', ' + action_class[1]).click(function() {         // close modal
  close_modal();
});

$('[class*="modal-"').click(function(e) {                                 // removes default anchor behavior
  e.preventDefault();
});

$(document).keyup(function(e) {                                           // uses escape key to close modal
  if (e.keyCode == 27) { 
    close_modal();
  } 
});