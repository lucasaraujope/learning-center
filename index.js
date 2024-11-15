let valueDisplays = document.querySelectorAll(".alunos__number");
let interval = 20000;

valueDisplays.forEach((valueDisplay) => {
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute("data-val"));
    let duration = Math.floor(interval / endValue);
    let counter = setInterval(function() {
        startValue += 1;
        valueDisplay.textContent = startValue;
        if(startValue == endValue){
            clearInterval(counter);
        }
    }, duration);
});

let videoAtual = document.querySelector('.layer-videos');

let videoNovo = document.querySelectorAll('.videos__botoes');

function trocar(){
    document.getElementById("videos").scr = videoAtual;
    let aux = videoAtual;
    videoAtual = videoNovo;
    videoNovo = aux;
}
    
function changeVideo(embedUrl) {
        document.getElementById("video").src = embedUrl;
}

function changeVideo2(embedUrl) {
        document.getElementById("video2").src = embedUrl;
}
