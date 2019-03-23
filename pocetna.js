var pets_pictures = ["slike/dog1.jpg", "slike/cat1.jpg", "slike/fish1.jpg"];
var pets_audio = ["zvuci/dog.mp3", "zvuci/cat.mp3", "zvuci/fish.mp3"];
var audio_pictures = ["slike/sound_off.png", "slike/sound_on.png"];
var audio_off = false;

function dog() {
	document.getElementById("slika_naslova").setAttribute("src", pets_pictures[0]);
	document.getElementById("dog").style.opacity = 1;
	document.getElementById("cat").style.opacity = 0.7;
	document.getElementById("fish").style.opacity = 0.7;
	if(!audio_off) {
		document.getElementById("pets_source").setAttribute("src", pets_audio[0]);
		var audio = document.getElementById("pets_audio");
		audio.autoplay = true;
		audio.load();
	}
}

function cat() {
	document.getElementById("slika_naslova").setAttribute("src", pets_pictures[1]);
	document.getElementById("dog").style.opacity = 0.7;
	document.getElementById("cat").style.opacity = 1;
	document.getElementById("fish").style.opacity = 0.7;
	if(!audio_off) {
		document.getElementById("pets_source").setAttribute("src", pets_audio[1]);
		var audio = document.getElementById("pets_audio");
		audio.autoplay = true;
		audio.load();
	}
}

function fish() {
	document.getElementById("slika_naslova").setAttribute("src", pets_pictures[2]);
	document.getElementById("dog").style.opacity = 0.7;
	document.getElementById("cat").style.opacity = 0.7;
	document.getElementById("fish").style.opacity = 1;
	if(!audio_off) {
		document.getElementById("pets_source").setAttribute("src", pets_audio[2]);
		var audio = document.getElementById("pets_audio");
		audio.autoplay = true;
		audio.load();
	}
}

function audioOff() {
	if(audio_off == false) {
		audio_off = true;
		document.getElementById("audio_off").style.opacity = 0.7;
		document.getElementById("audio_off").childNodes[0].setAttribute("src", audio_pictures[0]);
		var audio = document.getElementById("pets_audio");
		audio.autoplay = false;
		audio.load();
	} else {
		audio_off = false;
		document.getElementById("audio_off").style.opacity = 1;
		document.getElementById("audio_off").childNodes[0].setAttribute("src", audio_pictures[1]);
	}
}

function nemackiOvcar() {
	var podaci = document.getElementById("nemacki_ovcar");
	var dugme = document.getElementById("nemacki_ovcar_dugme");
	
	if(podaci.style.display == "block") {
		podaci.style.display = "none";
		dugme.style.borderColor = "lightgreen darkgreen darkgreen lightgreen";
	} else {
		podaci.style.display = "block";
		dugme.style.borderColor = "darkgreen lightgreen lightgreen darkgreen";
	}
}

function labrador() {
	var podaci = document.getElementById("labrador");
	var dugme = document.getElementById("labrador_dugme");
	
	if(podaci.style.display == "block") {
		podaci.style.display = "none";
		dugme.style.borderColor = "lightgreen darkgreen darkgreen lightgreen";
	} else {
		podaci.style.display = "block";
		dugme.style.borderColor = "darkgreen lightgreen lightgreen darkgreen";
	}
}

function rotvajler() {
	var podaci = document.getElementById("rotvajler");
	var dugme = document.getElementById("rotvajler_dugme");
	
	if(podaci.style.display == "block") {
		podaci.style.display = "none";
		dugme.style.borderColor = "lightgreen darkgreen darkgreen lightgreen";
	} else {
		podaci.style.display = "block";
		dugme.style.borderColor = "darkgreen lightgreen lightgreen darkgreen";
	}
}

function vreme() {
	var d = new Date();
	document.getElementById("vreme").innerHTML = "Vreme - " + d.toLocaleTimeString();
}
vreme();
setInterval(vreme, 1000);

var d = new Date();
document.getElementById("current_year").innerHTML = d.getFullYear();

function prikaziNavigaciju() {
	var navigacija = document.getElementById("responsive_nav").childNodes[3];
	if(navigacija.style.display == "block") {
		navigacija.style.display = "none";
	} else {
		navigacija.style.display = "block";
	}
}

var scrollInterval;

function scrollToTop() {
	var y = window.scrollY;
	y -= 15;
	window.scrollTo(0, y);
	if(window.scrollY == 0) {
		clearInterval(scrollInterval);
	}
}

document.getElementById("sidro").addEventListener("click", function() {
	scrollToTop();
	scrollInterval = setInterval(scrollToTop, 1);
});

window.onscroll = function() {
	var sidro = document.getElementById("sidro");
	sidro.style.transitionProperty = "opacity";
	sidro.style.transitionDuration = "0.5s";
	
	if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
		sidro.style.opacity = "1";
		sidro.style.visibility = "visible";
	} else {
		sidro.style.opacity = "0";
		sidro.addEventListener("transitionend", function() {
			if(sidro.style.opacity == "0") {
				sidro.style.visibility = "hidden";
			}
		});
	}
};