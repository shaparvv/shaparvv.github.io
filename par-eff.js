/*window.onload = () => 
{

    window.addEventListener('scroll', () => {

      const scroll = window.scrollY
      document.querySelectorAll('.img img').forEach(e => {
        const speed = e.dataset.speed
        
        e.style.transform = `translateY( ${scroll * speed}px)`
      })
    })
  
    
  } */

window.addEventListener('scroll', e => {
    document.body.style.cssText = `--scrollTop: ${this.scrollY}px`
})