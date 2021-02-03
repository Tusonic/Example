var numer = Math.floor(Math.random()*5)+1;

function loadslider() {

   numer++;
   if (numer>5)numer=1;

    var plik = "<img src=\"image/"+ numer +".jpg\" />";


    document.getElementById("slider").innerHTML = plik;

    setTimeout(loadslider, 5000);

}