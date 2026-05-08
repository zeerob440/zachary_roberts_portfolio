# Zachary Roberts Software Engineering Portfolio
[zachary_roberts_portfolio](https://zeerob440.github.io/zachary_roberts_portfolio/index.html)

## INTRODUCTION

My portfolio is my first front-end development project. It is intended to be a persistent artifact throughout my career, and therefore will be continuously perfected as my engineering skills develop.

It is part resume part neon sign, its most notable feature is dynamic CSS swapping, which applies a modern, or
retro styling depending on the user interaction. It also features a cinematic transition screen easter egg. 

## Tech Stack
- HTML
- CSS
- JavaScript 
- Formspree API
- GitHub Pages

## Features

- Dynamic CSS theme switching (modern/retro)
- Responsive multi-page portfolio design
- GitHub Pages deployment
- CAPTCHA-protected recruiter contact form
- Cinematic transition-screen easter egg
- Project indexing across Python, JavaScript, and C++

## DESIGN DIAGRAMS

### Usecase Diagram


## Behavior




## DATA DESIGN
My portfolio functions primarily as a client-side static website hosted on GitHub Pages. Recruiter contact submissions are processed through the Formspree API, allowing secure form handling without a dedicated backend server.

The contact form includes client-side validation and CAPTCHA verification to reduce spam and unauthorized submissions.

## INTERFACE DeSIGN

The portfolio interface is styled through three independent CSS themes: `modern.css`, `retro.css` and `terminal.css`. CSS's can be dynamic swapped by the user by clicking the "Back to the Future" button.


![modern.css UI example](/images/mod_intf.png)
*Example of UI while modern.css is applied.*

![retro.css UI example](/images/ret_intf.png)
*Example of UI while retro.css is applied.*


`modern.css` is designed to provide a polished contemporary interface focused on readability, responsiveness, and professional presentation.

![Example of rendered modern UI](/images/mod.png)
*Rendered page with modern.css applied.*

`terminal.css` is designed to style a transition page between `modern.css` and `retro.css`. It is is a homage to a popular 1990's movie; and cinematically informs the user that the a retro style is going to be applied. `transition/index.html` runs for approximately three seconds before redirecting to `root/index.html` with the new css applied.

![Example of rendered retro UI](/images/terminal.png)
*Example of transition page rendering*

`retro.css` the theme intentionally recreates a late-1990s GeoCities-era web aesthetic using bright colors, animated GIFs, CRT-inspired styling, and period-specific layout conventions.

![Example of rendered retro UI](/images/ret.png)
*Rendered page with modern.css applied.*
 


# TEST CASES
1. Ensure each page for at least 2 user choices per page if page does not terminate.
  

# SUMMARY



