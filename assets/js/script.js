$(document).ready(function() {
    $(window).scroll(function(event) {

        var yOffset = window.pageYOffset;
        var breakpoint = 80;
        if (yOffset > breakpoint) {
            $("#menu-v").removeClass('active');
        } else {
            $("#menu-v").addClass('active');
        }

    });
});
function mudar(val) {
    var x = document.getElementsByClassName('descricao');
    for(var i = 0; i < x.length; i++) x[i].style.display = 'none';
    document.getElementById('descricao'+val).style.display = 'block';  
  }

  function typeWriter(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
      setTimeout(() => elemento.innerHTML += letra, 75 * i);
    });
  }
  
  const titulo = document.getElementById('type-class');
  typeWriter(titulo);
  const subtitulo = document.getElementById('type-sub');
  setTimeout(() => typeWriter(subtitulo), 1500);


window.sr = ScrollReveal();
sr.reveal('.intervalCardReveal', {
  duration:1500, 
  interval: 300, 
  origin: "top",
  distance: "50px"});

sr.reveal('.sobreReveal', {duration: 1500})
sr.reveal('.titleReveal', {duration: 2000, origin:"top", distance:"60px"});


/*
  
  const debounce = function(func, wait, immediate) {
    let timeout;
    return function(...args) {
      const context = this;
      const later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };
  
  
  const target = document.querySelectorAll('[data-anime]');
  const animationClass ='animate';

  function animeScroll(){
    const windowTop= window.pageYOffset + ((window.innerHeight * 3) / 4);

    target.forEach(function(element) {
      if ((windowTop) > element.offsetTop) {
        element.classList.add(animationClass);        
      } else
        element.classList.remove(animationClass); 
    });
  }

animeScroll();
  if(target.length){
    window.addEventListener('scroll', debounce(function(){
      animeScroll();
    }, 200));
  }*/
  
  