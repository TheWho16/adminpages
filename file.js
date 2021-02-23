$(function () {
    let idx = 0;

    if ($('.feedback_list ').length > 0) {
        $('.feedback_list ').scrollbar({
            autoScrollSize: false,
            scrollx: $('.feedback__wrap-outside .external-scroll_x'),
            scrolly: $('.feedback__wrap-outside .external-scroll_y'),
        });

        const feedbackRight = $('.feedback_right');
        const feedbackLeft = $('.feedback_left');
        const feedbackCardsItem = $('.feedback__cards__item');
        const feedbackList = $('.feedback_list');

        scrollOnClick(feedbackRight, feedbackCardsItem, feedbackList, false);
        scrollOnClick(feedbackLeft, feedbackCardsItem, feedbackList, true);
    }

    if ($('.feedback_list_without_photo ').length > 0) {
        $('.feedback_list_without_photo ').scrollbar({
            autoScrollSize: false,
            scrollx: $('.feedback__wrap-outside .external-scroll_x'),
            scrolly: $('.feedback__wrap-outside .external-scroll_y'),
        });

        const feedbackWithoutPhotoRight = $('.feedback_scroll_without_photo_right');
        const feedbackWithoutPhotoLeft = $('.feedback_scroll_without_photo_left');
        const feedbackWithoutPhotoItem = $('.feedback_item_without_photo');
        const feedbackWithoutPhotoList = $('.feedback_list_without_photo');

        scrollOnClick(feedbackWithoutPhotoRight, feedbackWithoutPhotoItem, feedbackWithoutPhotoList, false);
        scrollOnClick(feedbackWithoutPhotoLeft, feedbackWithoutPhotoItem, feedbackWithoutPhotoList, true);
    };

    const scroller = (scrollWrapper, width, idx) => {
        $('.feedback_card_pagination').text(`${idx + 1}/4`);
        scrollWrapper.animate({ scrollLeft: width * idx }, 300);
    }

    function scrollOnClick(clicker, item, scrollWrapper, isLeftBtn) {
        console.log(idx,'here')
            clicker.click(function (e) {
                e.preventDefault();
                let enable = true;
                const width = item.outerWidth(true);
                if (!enable) {
                    return;
                }
                if ((idx >= 0) && (isLeftBtn === false)) {
                    idx += 1;
                    scroller(scrollWrapper, width, idx);
                    enable = false;
                } else if ((idx <= 3) && (isLeftBtn === true)) {
                    idx -= 1;
                    scroller(scrollWrapper, width, idx);
                    enable = false;
                }
                console.log(idx, 'idx')
            });

    };

});




















































/**
 * modalEffects.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2013, Codrops
 * http://www.codrops.com
 */
var ModalEffects = (function() {

	function init() {

		var overlay = document.querySelector( '.md-overlay' );

		[].slice.call( document.querySelectorAll( '[data-modal]' ) ).forEach( function( el, i ) {

			var modal = document.querySelector( '#' + el.getAttribute( 'data-modal' ) ),
				close = modal.querySelector( '.md-close' );

			function removeModal() {
				modal.classList.remove('md-show');
				document.documentElement.classList.remove('no-scroll');
				disableBodyScroll(false, '.md-content');
			}

			el.addEventListener( 'click', function( ev ) {
				modal.classList.add('md-show');
				document.documentElement.classList.add('no-scroll');
				disableBodyScroll(true, '.md-content');
				overlay.removeEventListener( 'click', removeModal );
				overlay.addEventListener( 'click', removeModal );
			});

			close.addEventListener( 'click', function( ev ) {
				ev.stopPropagation();
				removeModal();
			});

		} );

	}

	init();

})();