gsap.set('.box', {
  opacity: 0,
  background: '#4567DD'
})

gsap.to('.box', {
  opacity: 1,
  duration: 3,
  y: 100,
  repeat: -1,
  yoyo: true
})