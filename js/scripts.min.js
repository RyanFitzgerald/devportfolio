/*!
    Title: Dev Portfolio Template
    Version: 1.2.1
    Last Change: 08/27/2017
    Author: Ryan Fitzgerald
    Repo: https://github.com/RyanFitzgerald/devportfolio-template
    Issues: https://github.com/RyanFitzgerald/devportfolio-template/issues

    Description: This file contains all the scripts associated with the single-page
    portfolio website.
*/
!function(e){e("html").removeClass("no-js"),e("header a").click(function(t){if(!e(this).hasClass("no-scroll")){t.preventDefault();var i=e(this).attr("href"),n=e(i).offset().top;e("html, body").animate({scrollTop:n+"px"},Math.abs(window.pageYOffset-e(i).offset().top)/1),e("header").hasClass("active")&&e("header, body").removeClass("active")}}),e("#to-top").click(function(){e("html, body").animate({scrollTop:0},500)}),e("#lead-down span").click(function(){var t=e("#lead").next().offset().top;e("html, body").animate({scrollTop:t+"px"},500)}),e("#experience-timeline").each(function(){$this=e(this),$userContent=$this.children("div"),$userContent.each(function(){e(this).addClass("vtimeline-content").wrap('<div class="vtimeline-point"><div class="vtimeline-block"></div></div>')}),$this.find(".vtimeline-point").each(function(){e(this).prepend('<div class="vtimeline-icon"><i class="fa fa-map-marker"></i></div>')}),$this.find(".vtimeline-content").each(function(){var t=e(this).data("date");t&&e(this).parent().prepend('<span class="vtimeline-date">'+t+"</span>")})}),e("#mobile-menu-open").click(function(){e("header, body").addClass("active")}),e("#mobile-menu-close").click(function(){e("header, body").removeClass("active")}),e("#view-more-projects").click(function(t){t.preventDefault(),e(this).fadeOut(300,function(){e("#more-projects").fadeIn(300)})})}(jQuery);