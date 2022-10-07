
fetch('https://complex.in.ua/yantarne')
            .then((data) => {
                console.log(data);
            });

let stream = new Audio();

stream.src = 'https://complex.in.ua/yantarne';

let rotateDeg = 0;
let streamPlay = false;
let x;
$('.main__left__img').click(function(){
    if(!streamPlay){
    stream.play()
    streamPlay = true;
   
    x = setInterval(function(){
        rotateDeg++
        if(rotateDeg = 360){
            rotateDeg = 0 
        }
       
        },100)
    
    }else {
        stream.pause();
        streamPlay = false;
        
        clearTimeout(x)
    }
})

streamVolume.oninput = function(){
    stream.volume = streamVolume.value
}
let platChange = false;
$('.main__left__img').click(function(){
    if(!platChange){
    $('.main__left__img').css('background-image','url(../img/platOn.png)')
    platChange = true;
    }else{
        $('.main__left__img').css('background-image','url(../img/platOf.png)')
        platChange = false;
    }
})





