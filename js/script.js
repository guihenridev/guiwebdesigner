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