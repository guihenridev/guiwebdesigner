$(document).ready(function() {
    $(window).scroll(function(event) {

        var yOffset = window.pageYOffset;
        var breakpoint = 80;
        if (yOffset > breakpoint) {
            $("#menu-vidro").removeClass('active');
        } else {
            $("#menu-vidro").addClass('active');
        }

    });
});
function mudar(val) {
    var x = document.getElementsByClassName('descricao');
    for(var i = 0; i < x.length; i++) x[i].style.display = 'none';
    document.getElementById('descricao'+val).style.display = 'block';  
  }