$(document).ready ->
  $('a[href^="#"]').on 'click', (e) ->
    e.preventDefault()
    $('html, body').animate(
      { scrollTop: $(e.currentTarget.hash).offset().top }
      , 750
    )
