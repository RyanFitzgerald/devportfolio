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

(function($) {
  // Show current year
  $('#current-year').text(new Date().getFullYear())

  // Remove no-js class
  $('html').removeClass('no-js')

  // Animate to section when nav is clicked
  $('header a').click(function (e) {
    // Treat as normal link if no-scroll class
    if ($(this).hasClass('no-scroll')) return

    e.preventDefault()
    var heading = $(this).attr('href')
    var scrollDistance = $(heading).offset().top

    $('html, body').animate(
      {
        scrollTop: scrollDistance + 'px',
      },
      Math.abs(window.pageYOffset - $(heading).offset().top) / 1
    )

    // Hide the menu once clicked if mobile
    if ($('header').hasClass('active')) {
      $('header, body').removeClass('active')
    }
  })

  // Scroll to top
  $('#to-top').click(function () {
    $('html, body').animate(
      {
        scrollTop: 0,
      },
      500
    )
  })

  // Scroll to first element
  $('#lead-down span').click(function () {
    var scrollDistance = $('#lead').next().offset().top
    $('html, body').animate(
      {
        scrollTop: scrollDistance + 'px',
      },
      500
    )
  })

  // Create timeline
  $('#experience-timeline').each(function () {
    $this = $(this) // Store reference to this
    $userContent = $this.children('div') // user content

    // Create each timeline block
    $userContent.each(function () {
      $(this)
        .addClass('vtimeline-content')
        .wrap(
          '<div class="vtimeline-point"><div class="vtimeline-block"></div></div>'
        )
    })

    // Add icons to each block
    $this.find('.vtimeline-point').each(function () {
      $(this).prepend(
        '<div class="vtimeline-icon"><i class="fa fa-map-marker"></i></div>'
      )
    })

    // Add dates to the timeline if exists
    $this.find('.vtimeline-content').each(function () {
      var date = $(this).data('date')
      if (date) {
        // Prepend if exists
        $(this)
          .parent()
          .prepend('<span class="vtimeline-date">' + date + '</span>')
      }
    })
  })

  // Open mobile menu
  $('#mobile-menu-open').click(function () {
    $('header, body').addClass('active')
  })

  // Close mobile menu
  $('#mobile-menu-close').click(function () {
    $('header, body').removeClass('active')
  })

  // Load additional projects
  $('#view-more-projects').click(function (e) {
    e.preventDefault()
    $(this).fadeOut(300, function () {
      $('#more-projects').fadeIn(300)
    })
  })

  // projecct image viewer
  $('.project-image .image').click(function () {
    $('#full-image').attr('src', $(this).attr('alt'))
    $('#image-viewer').show()
  })

  $('#image-viewer .close').click(function () {
    $('#image-viewer').hide()
  })

  // projecct video viewer
  $('.project-video .image').click(function () {
    console.log('click')
    $('#full-video').attr('src', $(this).attr('alt'))
    $('#video-viewer').show()
  })

  $('#video-viewer .close').click(function () {
    $('#video-viewer').hide()
  })

  // projecct glb viewer
  $('.project-glb .image').click(function () {
    console.log('click')
    $('#full-glb').attr('src', $(this).attr('alt'))
    $('#glb-viewer').show()
  })

  $('#glb-viewer .close').click(function () {
    $('#glb-viewer').hide()
  })
  
})(jQuery);
