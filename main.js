const clouds = document.querySelectorAll('.cloud'),
    boat = document.querySelector('.boat'),
    fantasy = document.querySelector('.fantasy');
    window.addEventListener('scroll', function(e){
       boat.style.transform = `translateX(${window.scrollY}px)`
       fantasy.style.objectPosition = `0 ${window.scrollY / 10}%`
       clouds.forEach(el =>{
           const speed = el.getAttribute('data-speed')
           el.style.transform = `translateX(${window.scrollY * speed}px)`
       })
    })
    
    