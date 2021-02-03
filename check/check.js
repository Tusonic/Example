function check() {

var liczba = document.getElementById("pole").value; // łapie wartosc id=pole
    document.getElementById("napis").innerHTML=liczba; // lapie kontener div o id=napis i innerHTML wklada do niego zmienna liczba

    if(liczba>0) document.getElementById("sprawdzenie").innerHTML="dodatnia";
    else if (liczba<0) document.getElementById("sprawdzenie").innerHTML="ujemna";
    else if (liczba=="0") document.getElementById("sprawdzenie").innerHTML="zero";
    else document.getElementById("sprawdzenie").innerHTML="to nie jest liczba";

}