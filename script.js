validation = false;

function calculer() {

    var option1 = parseInt(document.getElementById("service1").options[document.getElementById("service1").selectedIndex].value);
    var option2 = parseInt(document.getElementById("service2").options[document.getElementById("service2").selectedIndex].value);
    var option3 = parseInt(document.getElementById("service3").options[document.getElementById("service3").selectedIndex].value);
    var qte1 = document.getElementById("qte1").value;
    var qte2 = document.getElementById("qte2").value;
    var qte3 = document.getElementById("qte3").value;
    var prix1 = document.getElementById("prix1");
    var prix2 = document.getElementById("prix2");
    var prix3 = document.getElementById("prix3");
    var totalHt = document.getElementById("totalHt");
    var totalTtc = document.getElementById("totalTtc");
    var resultat1 = 0;
    var resultat2 = 0;
    var resultat3 = 0;
    console.log(qte1);
    console.log(option1);

    if ((!isNaN(option1) && !isNaN(qte1)) && qte1 > 0) {
        resultat1 = parseInt(option1 * qte1);
        prix1.value = resultat1;

    } else {
        prix1.value = "Sous-total HT";
    }
    if ((!isNaN(option2) && !isNaN(qte2)) && qte2 > 0) {
        resultat2 = parseInt(option2 * qte2);
        prix2.value = resultat2;
    } else {
        prix2.value = "Sous-total HT";
    }
    if ((!isNaN(option3) && !isNaN(qte3)) && qte3 > 0) {
        resultat3 = parseInt(option3 * qte3);
        prix3.value = resultat3;
    } else {
        prix3.value = "Sous-total HT";
    }

    totalHt.value = parseInt(resultat1 + resultat2 + resultat3);
    totalTtc.value = (totalHt.value * 1.2).toFixed(2);
}

function verif() {
    var nom = document.getElementById("nom");
    var email = document.getElementById("email");
    var checkbox = document.getElementById("checkbox");

    if (validation == false) {
        if (nom.value == "") {
            nom.style.border = "2px solid red";
            alert("Veuillez renseigner votre nom");
            validation = false;
        } else {
            nom.style.border = "1px solid black";
            validation = true;

        }

        if ((email.value == "") || (email.value.includes("@") == false)) {
            email.style.border = "2px solid red";
            alert("Veuillez vérifier votre email");
            validation = false;
        } else {
            email.style.border = "1px solid black";
            validation = true;
        }

        if (checkbox.checked == false) {
            alert("Veuillez accepter les condition générales");
            validation = false;
        } else {
            validation = true;
        }
        return validation;


    }
    if (validation == true) {
        alert("Validation effectuée, vous pouvez envoyer votre commande.")
    }
}

function envoi() {

    if (validation == true) {
        window.open("mailto:test@exemple.com");
    } else {
        alert("Veuillez cliquer sur le bouton vérifier avant envoi");
    }
}

window.onload = function () {
    calculer();
}

window.addEventListener("load", function () {
    document.getElementById("verif").addEventListener("click", verif);
    document.getElementById("envoi").addEventListener("click", envoi);
})