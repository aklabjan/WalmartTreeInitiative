let canvas = document.getElementById("canvas");
if (!(canvas instanceof HTMLCanvasElement))
    throw new Error("Canvas is not HTML Element");

let ctx = canvas.getContext("2d");


var img = new Image();
img.onload = function() {
    return setInterval(draw,1000);
};
img.src = 'treeDiagram.png';
img.width = 50
let browny = 375;
let greeny = 375;
let count = 0;
function draw(){
    ctx.clearRect(0,0,375,375);
    ctx.fillStyle = 'rgb(0, 128, 0)';
    ctx.fillRect(0,greeny,375,375);
    ctx.fillStyle = 'rgb(139, 39, 19)';
    ctx.fillRect(0,browny,375,375);
    ctx.drawImage(img, 0, 0);
    document.getElementById('count').innerHTML = count;
    if (browny > 225){
        browny = browny - 5;
    }
    if (greeny > 0){
        greeny = greeny - 5;
        count = count + 1700;
    }
    else{
        greeny = 375;
        browny = 375;
        count = 0;
    }
}

