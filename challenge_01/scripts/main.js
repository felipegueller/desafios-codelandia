const post = ScrollReveal({
  origin: 'top',
  distance: '100px',
  duration: 1000
})

const content = ScrollReveal({
  origin: 'left',
  distance: '100px',
  duration: 1000,
  reset: true
})

ScrollReveal().reveal('.post', post)
ScrollReveal().reveal('.date', { delay: 200, ...content })
ScrollReveal().reveal('.icon', {delay: 200, ...content })
ScrollReveal().reveal('.title', { delay: 800, ...content })
ScrollReveal().reveal('.content', { delay: 1400, ...content })
