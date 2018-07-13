var rainbodw=true;
document.querySelector('button').addEventListener('click',function() {
	var x = Math.floor(Math.random () * 256);
	var y=  Math.floor (Math.random () * 256);
	var z= Math.floor (Math.random () * 256);
	var color = "rgb(" + x +  "," + y + "," + z+ ")";

    document.querySelector('html').style.background= color;
});



	
