/*!
    Title: Dev Portfolio Template
    Version: 1.2.2
    Last Change: 03/25/2020
    Author: Ryan Fitzgerald
    Repo: https://github.com/RyanFitzgerald/devportfolio-template
    Issues: https://github.com/RyanFitzgerald/devportfolio-template/issues

    Description: This file contains all the scripts associated with the single-page
    portfolio website.
*/
!function(n){n("html").removeClass("no-js"),n("header a").click(function(e){if(!n(this).hasClass("no-scroll")){e.preventDefault();var t=n(this).attr("href"),i=n(t).offset().top;n("html, body").animate({scrollTop:i+"px"},+Math.abs(window.pageYOffset-n(t).offset().top)),n("header").hasClass("active")&&n("header, body").removeClass("active")}}),n("#to-top").click(function(){n("html, body").animate({scrollTop:0},500)}),n("#lead-down span").click(function(){var e=n("#lead").next().offset().top;n("html, body").animate({scrollTop:e+"px"},500)}),n("#experience-timeline").each(function(){$this=n(this),$userContent=$this.children("div"),$userContent.each(function(){n(this).addClass("vtimeline-content").wrap('<div class="vtimeline-point"><div class="vtimeline-block"></div></div>')}),$this.find(".vtimeline-point").each(function(){n(this).prepend('<div class="vtimeline-icon"><i class="fa fa-map-marker"></i></div>')}),$this.find(".vtimeline-content").each(function(){var e=n(this).data("date");e&&n(this).parent().prepend('<span class="vtimeline-date">'+e+"</span>")})}),n("#mobile-menu-open").click(function(){n("header, body").addClass("active")}),n("#mobile-menu-close").click(function(){n("header, body").removeClass("active")}),n("#view-more-projects").click(function(e){e.preventDefault(),n(this).fadeOut(300,function(){n("#more-projects").fadeIn(300)})})}(jQuery);