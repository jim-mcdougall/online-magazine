jQuery(document).ready(function($) {
  'use strict';
  var $masonryContainer = $('.masonry');

  $masonryContainer.masonry({
    columnWidth: '.masonry__column',
    gutter: '.masonry__gutter',
    isAnimated: false,
    itemSelector: '.masonry__item'
  });
});