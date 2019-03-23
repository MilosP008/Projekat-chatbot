function dodajStavku(ime, broj, cena) {
	var listItem = document.createElement("li");
			var span1 = document.createElement("span");
			var span2 = document.createElement("span");
			var span3 = document.createElement("span");
			var span4 = document.createElement("span");
			var textItem1 = document.createTextNode(ime);
			var textItem2 = document.createTextNode("X");
			var textItem3 = document.createTextNode(broj + " kom.");
			var textItem4 = document.createTextNode(cena);
			span1.appendChild(textItem1);
			span2.appendChild(textItem2);
			span3.appendChild(textItem3);
			span4.appendChild(textItem4);
			listItem.appendChild(span1);
			listItem.appendChild(span2);
			listItem.appendChild(span3);
			listItem.appendChild(span4);
			stavke.appendChild(listItem);
}

var ukupno = (function() {
	var brojac = 0;
	return function(sabirak = 0) {
		document.getElementById("korpa_ocisti").addEventListener("click", function() {
			return brojac = 0;
		});
		return brojac += sabirak;
	};
})();

function dodajUKorpu(name) {
	var stavke = document.getElementById("stavke");
	var brojStavki = document.getElementsByClassName("broj_dugme");
	var broj = [];
	
	for(var j = 0; j < brojStavki.length; j++) {
		if(brojStavki[j].value == "") {
			broj.push(1);
		} else {
			broj.push(brojStavki[j].value);
		}
	}
	
	switch(name) {
		case "boo_stene":
			if(broj[0] > 0) {
				var ukupnaCena = broj[0] * 350;
				ukupno(ukupnaCena);
				dodajStavku("Boo štene", broj[0], ukupnaCena + " €");
			}
			break;
		case "nemacki_ovcar_stene":
			if(broj[1] > 0) {
				var ukupnaCena = broj[1] * 400;
				ukupno(ukupnaCena);
				dodajStavku("Nemački ovčar", broj[1], ukupnaCena + " €");
			}
			break;
		case "sibirski_haski":
			if(broj[2] > 0 && broj[2] != "") {
				var ukupnaCena = broj[2] * 500;
				ukupno(ukupnaCena);
				dodajStavku("Haski (sibirski)", broj[2], ukupnaCena + " €");
			}
			break;
		case "labrador_retriver_stene":
			if(broj[3] > 0) {
				var ukupnaCena = broj[3] * 375;
				ukupno(ukupnaCena);
				dodajStavku("Labrador retriver", broj[3], ukupnaCena + " €");
			}
			break;
		case "persijska_macka":
			if(broj[4] > 0) {
				var ukupnaCena = broj[4] * 500;
				ukupno(ukupnaCena);
				dodajStavku("Persijska mačka", broj[4], ukupnaCena + " €");
			}
			break;
		case "himalajska_macka":
			if(broj[5] > 0) {
				var ukupnaCena = broj[5] * 300;
				ukupno(ukupnaCena);
				dodajStavku("Himalajska mačka", broj[5], ukupnaCena + " €");
			}
			break;
		case "sijamska_macka":
			if(broj[6] > 0) {
				var ukupnaCena = broj[6] * 600;
				ukupno(ukupnaCena);
				dodajStavku("Sijamska mačka", broj[6], ukupnaCena + " €");
			}
			break;
		case "britanska_kratkodlaka_macka":
			if(broj[7] > 0) {
				var ukupnaCena = broj[7] * 550;
				ukupno(ukupnaCena);
				dodajStavku("Britanska kratkodlaka", broj[7], ukupnaCena + " €");
			}
			break;
		case "platika_koralna":
			if(broj[8] > 0) {
				var ukupnaCena = broj[8] * 1;
				ukupno(ukupnaCena);
				dodajStavku("Platika koralna", broj[8], ukupnaCena + " €");
			}
			break;
		case "zuti_moli":
			if(broj[9] > 0) {
				var ukupnaCena = broj[9] * 1;
				ukupno(ukupnaCena);
				dodajStavku("Žuti moli", broj[9], ukupnaCena + " €");
			}
			break;
		case "crveni_rak":
			if(broj[10] > 0) {
				var ukupnaCena = broj[10] * 5;
				ukupno(ukupnaCena);
				dodajStavku("Crveni rak", broj[10], ukupnaCena + " €");
			}
			break;
		case "beta_ribica":
			if(broj[11] > 0) {
				var ukupnaCena = broj[11] * 3;
				ukupno(ukupnaCena);
				dodajStavku("Beta", broj[11], ukupnaCena + " €");
			}
			break;
	}
	document.getElementById("ukupno").innerHTML = "Ukupno: " + ukupno() + " € + 20% PDV = " + (ukupno() + (ukupno() * 20) / 100) + " €";
	
	var lista = stavke.childNodes;
	
	for (var i = 0; i < lista.length; i++) {
		lista[i].style.listStyleType = "none";
		lista[i].style.marginRight = "40px";
		lista[i].style.padding = "5px";
		lista[i].style.marginBottom = "5px";
		lista[i].childNodes[1].style.marginRight = "5px";
		if(window.screen.width > 400) {
			lista[i].childNodes[2].style.marginRight = "50px";
			lista[i].childNodes[3].style.marginRight = "50px";
		} else if(window.screen.width <= 400) {
			lista[i].childNodes[2].style.marginRight = "20px";
			lista[i].childNodes[3].style.marginRight = "20px";
		}
		lista[i].childNodes[1].style.cssFloat = "right";
		lista[i].childNodes[2].style.cssFloat = "right";
		lista[i].childNodes[3].style.cssFloat = "right";
		lista[i].childNodes[1].addEventListener("mouseover", function() {
			var lista = document.getElementById("stavke").childNodes;
			for (var i = 0; i < lista.length; i++) {
				lista[i].childNodes[1].style.cursor = "pointer";
			}
		});
		lista[i].childNodes[1].addEventListener("click", ukloniListu);
			
		if(name == "boo_stene" || name == "nemacki_ovcar_stene" || name == "sibirski_haski" || name == "labrador_retriver_stene") {
			lista[lista.length - 1].style.backgroundColor = "lightgreen";
		} else if(name == "persijska_macka" || name == "himalajska_macka" || name == "sijamska_macka" || name == "britanska_kratkodlaka_macka") {
			lista[lista.length - 1].style.backgroundColor = "#ff8080";
		} else if(name == "platika_koralna" || name == "zuti_moli" || name == "crveni_rak" || name == "beta_ribica") {
			lista[lista.length - 1].style.backgroundColor = "#80dfff";
		}
	}
}

function ukloniListu() {
	this.parentNode.style.display = "none";
	var span = this.parentNode.childNodes[3];
	var cena = span.firstChild.nodeValue.split(" ");
	ukupno(-cena[0]);
	document.getElementById("ukupno").innerHTML = "Ukupno: " + ukupno() + " € + 20% PDV = " + (ukupno() + (ukupno() * 20) / 100) + " €";
}

function ukloniStavke() {
	document.getElementById("stavke").innerHTML = "";
	document.getElementById("ukupno").innerHTML = "Ukupno: 0 € + 20% PDV = 0 €";
}

function prikaziPodatke() {
	var klizac = document.getElementById("klizac");
	var licni_podaci = document.getElementById("licni_podaci");
	var omotac_ocisti = document.getElementById("omotac_ocisti");
	var div = klizac.childNodes[1];
	var span = div.childNodes[1];
	
	if(window.screen.width > 400) {
		if (licni_podaci.style.display == "block") {
			licni_podaci.style.display = "none";
			span.innerHTML = "&#9658;";
			klizac.style.background = "linear-gradient(to right, gray, white, gray)";
		} else {
			licni_podaci.style.display = "block";
			span.innerHTML = "&#9668;";
			klizac.style.background = "linear-gradient(to right, white, gray, white)";
		}
	} else if(window.screen.width <= 400) {
		if (licni_podaci.style.display == "block") {
			licni_podaci.style.display = "none";
			span.style.display = "inline";
			span.innerHTML = "&#9650;";
			omotac_ocisti.style.marginBottom = "100px";
			klizac.style.background = "linear-gradient(to bottom, gray, white, gray)";
		} else {
			licni_podaci.style.display = "block";
			div.removeAttribute("id");
			span.style.display = "inline";
			span.innerHTML = "&#9660;";
			omotac_ocisti.style.marginBottom = "850px";
			klizac.style.background = "linear-gradient(to bottom, white, gray, white)";
		}
	}
}

function provera() {
	var greska = "";

	if (forma.ime.value == "" || forma.prezime.value == "" || forma.mesto_stanovanja.value == "" || forma.ulica_broj.value == "" || forma.broj_bankovnog_racuna.value == "") {
		greska = "* Molimo vas popunite sva polja.<br />";
		if(forma.ime.value == "") {
			forma.ime.style.borderColor = "red";
		} else {
			forma.ime.style.borderColor = "initial";
		}
		if(forma.prezime.value == "") {
			forma.prezime.style.borderColor = "red";
		} else {
			forma.prezime.style.borderColor = "initial";
		}
		if(forma.mesto_stanovanja.value == "") {
			forma.mesto_stanovanja.style.borderColor = "red";
		} else {
			forma.mesto_stanovanja.style.borderColor = "initial";
		}
		if(forma.ulica_broj.value == "") {
			forma.ulica_broj.style.borderColor = "red";
		} else {
			forma.ulica_broj.style.borderColor = "initial";
		}
		if(forma.broj_bankovnog_racuna.value == "") {
			forma.broj_bankovnog_racuna.style.borderColor = "red";
		} else {
			forma.broj_bankovnog_racuna.style.borderColor = "initial";
		}
	}
	
	if (/[0-9]/.test(forma.ime.value) || /[0-9]/.test(forma.prezime.value) || /[0-9]/.test(forma.mesto_stanovanja.value)) {
		greska += "* Ime, prezime i mesto stanovanja ne smeju sadržati brojeve.<br />";
		if(/[0-9]/.test(forma.ime.value)) {
			forma.ime.style.borderColor = "red";
		} else if(forma.ime.value != "") {
			forma.ime.style.borderColor = "initial";
		}
		if(/[0-9]/.test(forma.prezime.value)) {
			forma.prezime.style.borderColor = "red";
		} else if(forma.prezime.value != ""){
			forma.prezime.style.borderColor = "initial";
		}
		if(/[0-9]/.test(forma.mesto_stanovanja.value)) {
			forma.mesto_stanovanja.style.borderColor = "red";
		} else if(forma.mesto_stanovanja.value != "") {
			forma.mesto_stanovanja.style.borderColor = "initial";
		}
	} else if(forma.ime.value != "" && forma.prezime.value != "" && forma.mesto_stanovanja.value != "") {
		forma.ime.style.borderColor = "initial";
		forma.prezime.style.borderColor = "initial";
		forma.mesto_stanovanja.style.borderColor = "initial";
	}
	
	if (!(/[a-z]/.test(forma.ulica_broj.value) && /[0-9]/.test(forma.ulica_broj.value)) && forma.ulica_broj.value != "") {
		greska += "* Ulica je nevažeća, mora biti u formatu (naziv ulice broj).<br />";
		forma.ulica_broj.style.borderColor = "red";
	} else if(forma.ulica_broj.value != "") {
			forma.ulica_broj.style.borderColor = "initial";
	}
	
	if (/[a-z]/.test(forma.broj_bankovnog_racuna.value)) {
		greska += "* Broj bankovnog računa nije ispravan.";
		forma.broj_bankovnog_racuna.style.borderColor = "red";
	} else if(forma.broj_bankovnog_racuna.value != "") {
		forma.broj_bankovnog_racuna.style.borderColor = "initial";
	}
	
	if (greska != "") {
		document.getElementById("greske").innerHTML = greska;
		document.getElementById("greske").style.display = "block";
		return false;
	}
}