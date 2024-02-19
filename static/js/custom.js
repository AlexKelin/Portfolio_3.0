/*!
 * Item: Kitzu
 * Description: Personal Portfolio Template
 * Author/Developer: Exill
 * Author/Developer URL: https://themeforest.net/user/exill
 * Version: v2.0.1
 * License: Themeforest Standard Licenses: https://themeforest.net/licenses
 */

/*----------- CUSTOM JS SCRIPTS -----------*/

(function($) {
  'use strict';
  $(function() {
    // Code here executes When the DOM is loaded...
  });
  $(window).on('load', function() {
    // Code here executes When the page is loaded
  });
}(jQuery));

$(document).ready(function() {
  // Initialize animatedModal or similar functionality for the "About Me" button
  $('.about-me-btn').animatedModal({
    color: '#34c77f', // Example modal background color, change as needed
    animatedIn: 'zoomIn',
    animatedOut: 'zoomOut',
    animationDuration: '0.6s',
    beforeOpen: function() {
      console.log("The animation was called");
    },
    afterOpen: function() {
      console.log("The animation is completed");
    },
    beforeClose: function() {
      console.log("The animation was called to close");
    },
    afterClose: function() {
      console.log("The animation is completed to close");
    }
  });
});
