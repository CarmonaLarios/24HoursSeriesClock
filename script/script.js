var iniciouReproducao = false;
function setTime()
{
    //iniciouReproducao = true;
    let display = document.querySelector('h1');
    let today = new Date();
    let time = formatSegundos(today.getHours()) + ":" + formatSegundos(today.getMinutes()) + ":" + formatSegundos(today.getSeconds());
    display.textContent = time;
    document.body.addEventListener("click", reproduceTick);
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

//if (iniciouReproducao)
setInterval(setTime,1000);

