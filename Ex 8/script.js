function TurOnoff() {
    var Image = document.getElementById('image');

    if(Image.src.match('OFFLampada')) {
        Image.src = 'ONLampada.jpg';
    }else {
        Image.src = 'OFFLampada.jpg';
    }    


}