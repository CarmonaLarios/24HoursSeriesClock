var iniciouReproducao = false;
var apresentouMsgUsuario = false;
function setTime()
{
    let display = document.querySelector('h1');
    let today = new Date();
    let time = formatSegundos(today.getHours()) + ":" + formatSegundos(today.getMinutes()) + ":" + formatSegundos(today.getSeconds());
    display.textContent = time;
    //ConfirmarReproducao();
}

function formatSegundos(segundos){
    if (segundos <10) segundos = "0" + segundos;
    return segundos;
}

function reproduceTick()
{
  if ((!iniciouReproducao)){
    var audio = new Audio('sounds/24_countdown.mp3');
    audio.play();
    iniciouReproducao = true;
  }

}

function ConfirmarReproducao()
{
  if (apresentouMsgUsuario) return;
  reproduceTick();
  apresentouMsgUsuario = true;
}

setInterval(setTime,1000);

