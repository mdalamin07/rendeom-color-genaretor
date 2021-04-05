function rendomColor(){
    var color = "#"
    var hexCode = "01234567879abcdef"

    for(i = 0; i<6; i++ ){

        color += hexCode [Math.floor(Math.random()*16)]
    }

    return color;
}

var myTimer;

function setColor(){
    $("body").css("background-color",rendomColor);
    $(".color h4").text(rendomColor);
}

var myTimer = setInterval(setColor,2000);