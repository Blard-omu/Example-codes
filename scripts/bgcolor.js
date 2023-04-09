function getHex()
{
// storing all letter and digit combinations
// for html color code
let letters = "0123456789ABCDEF";
// html color code starts with #
let color = '#';
// generating 6 times as HTML color code consist
// of 6 letter or digits
for (var i = 0; i < 6; i++)
color += letters[(Math.floor(Math.random() * 16))];
return color;
}

function changeColor(){
    const hex = getHex();
    document.getElementById("hex").innerHTML = hex;
    document.getElementsByTagName("BODY")[0].style.backgroundColor = hex;
}
// using setinterval
// setInterval(changeColor,2000)